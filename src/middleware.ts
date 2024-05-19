'use server';
import { verifyToken } from '@/(db)/lib/auth';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export const   middleware= async (request: NextRequest) => {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get('token')?.value??'';
    const isVerified = await verifyToken(token);
    
    const publicRoute = ['/','auth/login','auth/register','/api/auth/login','/api/auth/register',];
    if (publicRoute.includes(path)) {
        return NextResponse.next();
    }
    const privateRouteRegex = new RegExp('^/main/*');
    if (privateRouteRegex.test(path) && !isVerified) {
        return NextResponse.redirect(new URL('/auth/signin', request.nextUrl).toString());
    }
    const authRouteRegex = new RegExp('^/auth/*');
    if (isVerified && authRouteRegex.test(path)) {
        return NextResponse.redirect(new URL('/main', request.nextUrl).toString());
    }
    
    return NextResponse.next();    
}

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}