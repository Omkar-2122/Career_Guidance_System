import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/utils/dbConnect';
import { generateToken } from '@/utils/jwt';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
    let connection;
    try {
        const { action, email, password, name } = await req.json();
        connection = await dbConnect();

        if (action === 'register') {
            // Validate password strength
            if (password.length < 8) {
                return NextResponse.json({ 
                    error: 'Password must be at least 8 characters long' 
                }, { status: 400 });
            }

            const existingUser = await connection.execute(
                'SELECT email FROM users WHERE email = :email',
                [email],
                { outFormat: oracledb.OUT_FORMAT_OBJECT }
            );

            if (existingUser.rows?.length > 0) {
                return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            
            const result = await connection.execute(
                `INSERT INTO users (name, email, password, last_login) 
                 VALUES (:name, :email, :password, CURRENT_TIMESTAMP)
                 RETURNING user_id INTO :id`,
                {
                    name,
                    email,
                    password: hashedPassword,
                    id: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }
                },
                { autoCommit: true }
            );

            const userId = result.outBinds.id[0];
            const token = generateToken(userId);

            // Set HTTP-only cookie
            cookies().set('auth_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 24 * 60 * 60 * 1000 // 24 hours
            });

            return NextResponse.json({
                user: {
                    id: userId,
                    name,
                    email
                }
            });
        }

        if (action === 'login') {
            const result = await connection.execute(
                `SELECT user_id, name, email, password, selected_domain, progress 
                 FROM users WHERE email = :email`,
                [email],
                { outFormat: oracledb.OUT_FORMAT_OBJECT }
            );

            const user = result.rows?.[0];
            if (!user) {
                return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
            }

            // Update last login
            await connection.execute(
                'UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE user_id = :userId',
                [user.user_id],
                { autoCommit: true }
            );

            const token = generateToken(user.user_id);

            cookies().set('auth_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 24 * 60 * 60 * 1000
            });

            return NextResponse.json({
                user: {
                    id: user.user_id,
                    name: user.name,
                    email: user.email,
                    selectedDomain: user.selected_domain,
                    progress: user.progress
                }
            });
        }

        if (action === 'logout') {
            cookies().delete('auth_token');
            return NextResponse.json({ success: true });
        }

    } catch (error) {
        console.error('Auth error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }
}