"use client";

import {useFormStatus} from "react-dom";
import {Loader2} from "lucide-react";

export function SubmitButton({children, ...props}) {
    const {pending, action} = useFormStatus();

    const isPending = pending && action === props.formAction;

    return (
        <button {...props} type="submit" aria-disabled={pending} className="flex items-center gap-2">
            {isPending && <Loader2 className='mr-2 animate-spin' size={16}/>}
            {children}
        </button>
    );
}
