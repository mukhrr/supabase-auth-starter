import {NextResponse} from 'next/server'
import {updateSession} from '@/lib/supabase/middleware'
import {createMiddlewareClient} from "@supabase/auth-helpers-nextjs";

export async function middleware(req, event) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({req, res});
    const user = await supabase.auth.getUser();
    if (!user) {
        return NextResponse.redirect('/login');
    }
    return res;
}

export const config = {matcher: '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',}