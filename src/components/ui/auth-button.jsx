import {createClient} from "@/lib/supabase/server";
import Link from "next/link";
import {redirect} from "next/navigation";

import {cn} from "@/lib/utils"
import {buttonVariants} from "@/components/ui/button";

export default async function AuthButton() {
    const supabase = createClient();

    const {
        data: {user},
    } = await supabase.auth.getUser();

    const signOut = async () => {
        "use server";

        const supabase = createClient();
        await supabase.auth.signOut();
        return redirect("/login");
    };

    return user ? (
        <div className="flex items-center gap-4">
            Hey, {user.email}!
            <form action={signOut}>
                <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
                    Logout
                </button>
            </form>
        </div>
    ) : (
        <div className="flex items-center gap-4">
            <Link
                href='/login'
                className={cn(buttonVariants({variant: "outline"}))}
            >
                Login
            </Link>
            <Link
                href='/signup'
                className={cn(buttonVariants({variant: "default"}))}
            >
                Signup
            </Link>
        </div>
    );
}
