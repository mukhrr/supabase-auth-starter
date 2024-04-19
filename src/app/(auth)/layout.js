import {createClient} from "@/lib/supabase/server";
import {redirect} from "next/navigation";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {Command} from "lucide-react";
import Image from "next/image";

export default async function AuthLayout({children}) {
    const supabase = createClient()
    const {data: {user}} = await supabase.auth.getUser()

    if (user) redirect('/')

    return (
        <div
            className='container relative h-screen flex-col items-center
        justify-center md:grid lg:grid-cols-2 lg:px-0 !max-w-none overflow-hidden'
        >
            <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
                <div className='absolute inset-0 bg-zinc-900'/>
                <div className='relative z-20 flex items-center text-lg font-medium'>
                    <Link href='/' className='mr-6 flex items-center space-x-2'>
                        <Image width='24' height='24' src='/assets/logo.png' alt="Logo" className='border-0'/>
                        <span className='hidden font-bold sm:inline-block'>IELTS GURUS</span>
                    </Link>
                </div>
                <div className='relative z-20 h-screen flex items-center space-x-2'>
                    <blockquote className='space-y-2'>
                        <p className='text-lg'>
                            &ldquo;It does not matter how slowly you go as long as you do not stop.&rdquo;
                        </p>
                        <footer className='text-sm italic'>Confucius</footer>
                    </blockquote>
                </div>
            </div>
            <div className='lg:p-8 flex items-center justify-center h-screen w-full -mt-28'>
                {children}
            </div>
        </div>
    )
}