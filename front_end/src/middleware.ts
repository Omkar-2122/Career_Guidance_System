import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './utils/jwt';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('auth_token');
    const isAuthPage = request.nextUrl.pathname.startsWith('/auth');
    
    if (!token && !isAuthPage) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    if (token && isAuthPage) {
        return NextResponse.redirect(new URL('/profile', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/profile/:path*', '/auth/:path*']
};