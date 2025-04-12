import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';

export async function PUT(req: Request) {
    let connection;
    try {
        const { userId, selectedDomain, progress } = await req.json();
        connection = await dbConnect();

        const result = await connection.execute(
            `UPDATE users 
             SET selected_domain = :selectedDomain, 
                 progress = :progress 
             WHERE user_id = :userId`,
            {
                userId,
                selectedDomain,
                progress
            },
            { autoCommit: true }
        );

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Profile update error:', error);
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