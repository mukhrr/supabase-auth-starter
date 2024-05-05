import {cn} from "@/lib/utils"
import Link from "next/link";

import AuthForm from "./authForm"
import {buttonVariants} from "@/components/ui/button";

export default function LoginPage({searchParams}) {
    return (
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-center'>
                <h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
                <p className='text-sm text-muted-foreground'>
                    Enter your email and password below to log in
                </p>
            </div>
            <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col md:flex-row justify-center gap-2 items-center">
                Don't have an account yet?!
                <Link href="/signup" className={cn(buttonVariants({variant: "link"}))}>Sign Up For Free</Link>
            </div>
            <div className={cn("grid gap-6")}>
                <AuthForm/>
                {searchParams?.message && <div className="text-center text-red-600">{searchParams.message}</div>}
            </div>
        </div>
    )
}
