'use client'

import {createClient} from "@/lib/supabase/client";

export const LoginButton = () => {
    const supabase = createClient()

    const loginWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: "http://localhost:3000/login/callback",
                queryParams: {
                    access_type: 'offline',
                    prompt: 'consent',
                },
            },
        })
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
    }

    return (
        <>
            <button onClick={handleLogout}>
                Logout
            </button>
            <button onClick={loginWithGoogle}>
                Sign in with Google
            </button>
        </>
    )
}