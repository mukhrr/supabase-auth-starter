"use client"

import {useEffect, useState} from "react"
import {zodResolver} from "@hookform/resolvers/zod"
import {Loader2} from "lucide-react"
import {useForm} from "react-hook-form"
import * as z from "zod"
import {toast} from "sonner";
import {useSearchParams} from "next/navigation";

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {signUp} from "@/lib/auth";

export default function SignUpForm() {
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const searchParams = useSearchParams()
    const searchMessage = searchParams.get('message')
    const formSchema = z.object({
        username: z
            .string()
            .min(4, {message: "Username must not be less than 4 characters."})
            .max(20, {message: "Username cannot be more than 20 characters"}),
        email: z.string().email({message: "Invalid email address."}),
        password: z.string().min(1, {message: "Invalid password."}),
    })
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    })

    const erStyle = "border-red-500 focus-visible:ring-red-500 shadow-sm-red-400"

    const onSubmit = async (formData) => {
        await setLoading(true)
        await signUp(formData)
        await setLoading(false)
        await setErrorMessage(searchMessage)
    };

    const {formState} = form

    useEffect(() => {
        if (errorMessage) {
            toast.error(searchMessage)
            setErrorMessage(searchMessage)
        }

        return setErrorMessage('')
    }, [errorMessage, searchMessage])

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
                    <FormField
                        control={form.control}
                        name='username'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder='usename'
                                            {...field}
                                            className={formState?.errors.username && erStyle}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder='name@example.com'
                                            {...field}
                                            className={formState?.errors.email && erStyle}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={form.control}
                        name='password'
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder='password'
                                        type='password'
                                        {...field}
                                        className={formState?.errors.password && erStyle}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type='submit' className='w-full' disabled={loading}>
                        {loading && <Loader2 className='mr-2 animate-spin' size={16}/>}
                        Continue
                    </Button>
                    <div className="text-center text-red-600">{errorMessage}</div>
                </form>
            </Form>
        </>
    )
}
