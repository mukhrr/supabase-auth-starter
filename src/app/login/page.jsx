'use client'

import {createClient} from "@/lib/supabase/client";

export default function LoginPage() {

    const loginWithGoogle = async () => {
        const supabase = createClient()

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

    return (
        <div>
            <form>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required/>
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required/>
            </form>
            <button onClick={loginWithGoogle}>Sign in with Google
            </button>
        </div>
    )
}