import {headers} from "next/headers";
import {redirect} from "next/navigation";

import {createClient} from "@/lib/supabase/server";

import {SubmitButton} from "@/components/ui/submit-button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";

export default function Register({searchParams}) {
    const signUp = async (formData) => {
        "use server";

        const origin = headers().get("origin");
        const email = formData.get("email")
        const password = formData.get("password")

        const supabase = createClient();

        const {error} = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${origin}/auth/callback`,
            },
        });

        if (error) {
            return redirect("/login?message=Could not authenticate user");
        }

        return redirect("/login?message=Check email to continue sign in process");
    };

    return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
            <div className="absolute bottom-10 right-20 flex justify-center gap-2 items-center">
                Already have an account yet?!
                <Link href="/login" className={cn(buttonVariants({variant: "ghost"}))}>Login</Link>
            </div>
            <div className='flex flex-col space-y-2 text-center'>
                <h1 className='text-2xl font-semibold tracking-tight'>Register your account</h1>
                <p className='text-sm text-muted-foreground pb-4'>
                    as
                </p>
            </div>
            <div className={cn("grid gap-6")}>
                <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
                    <label className="text-md" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        name="email"
                        placeholder="you@example.com"
                        required
                    />
                    <label className="text-md" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        required
                    />
                    <SubmitButton
                        formAction={signUp}
                        className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
                        pendingText="Signing Up..."
                    >
                        Sign Up
                    </SubmitButton>
                    {searchParams?.message && (
                        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                            {searchParams.message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}
