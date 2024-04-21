import Link from "next/link"

import {cn} from "@/lib/utils"
import {buttonVariants} from "@/components/ui/button"

import SignUpForm from "./signUpForm"

export default function SignUpPage({searchParams}) {
    return (
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-center'>
                <h1 className='text-2xl font-semibold tracking-tight'>Register your account</h1>
                <p className='text-sm text-muted-foreground'>
                    as
                </p>
            </div>
            <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col md:flex-row justify-center gap-2 items-center">
                Already have an account yet?!
                <Link href="/login" className={cn(buttonVariants({variant: "link"}))}>Login To Your Account</Link>
            </div>
            <div className={cn("grid gap-6")}>
                <SignUpForm/>
                {searchParams?.message && <div className="text-center text-red-600">{searchParams.message}</div>}
            </div>
        </div>
    )
}
