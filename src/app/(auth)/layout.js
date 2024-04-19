import {createClient} from "@/lib/supabase/server";
import {redirect} from "next/navigation";

export default async function AuthLayout({children}) {
    const supabase = createClient()
    const {data: {user}} = await supabase.auth.getUser()

    if (user) redirect('/')

    return (
        <div
            className="grid grid-cols-2">
            <div>image</div>
            {children}
        </div>
    )
}