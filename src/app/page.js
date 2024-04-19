import Link from "next/link";
import Image from "next/image";

import AuthButton from "@/components/ui/auth-button";

export default async function Index() {
    return (
        <div className="flex-1 w-full flex flex-col gap-20 items-center justify-center min-h-screen">
            <header
                className='sticky top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60 max-w-[1230px]'>
                <div className='flex h-14 items-center justify-between w-full'>
                    <div className='mr-4 hidden md:flex'>
                        <Link href='/' className='mr-6 flex items-center space-x-2'>
                            <Image width='24' height='24' src='/assets/logo.png' alt="Logo" className='border-0'/>
                            <span className='hidden font-bold sm:inline-block'>IELTS GURUS</span>
                        </Link>
                    </div>

                    <nav className='flex items-center gap-4'>
                        <AuthButton/>
                    </nav>
                </div>
            </header>


            <main className="flex-1 flex flex-col gap-6 max-w-[1230px]">
                Main content goes here
            </main>

            <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
                <p>
                    Powered by{" "}
                    <a
                        href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                        target="_blank"
                        className="font-bold hover:underline"
                        rel="noreferrer"
                    >
                        Supabase
                    </a>
                </p>
            </footer>
        </div>
    );
}
