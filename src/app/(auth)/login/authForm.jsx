"use client"

import {useEffect, useState} from "react"
import {zodResolver} from "@hookform/resolvers/zod"
import {GitHubLogoIcon} from "@radix-ui/react-icons"
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
import {handleGoogleLogin, signIn} from "@/lib/auth";

export default function AuthForm() {
    const [loading, setLoading] = useState(false)
    const searchParams = useSearchParams()
    const searchMessage = searchParams.get('message')
    const [errorMessage, setErrorMessage] = useState("")
    const formSchema = z.object({
        email: z.string().email({message: "Invalid email address."}),
        password: z.string().min(1, {message: "Invalid password"}),
    })
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const {
        formState: {errors},
    } = form

    const erStyle = "border-red-500 focus-visible:ring-red-500 shadow-sm-red-400"

    const onSubmit = async (formData) => {
        await setLoading(true)
        await signIn(formData)
        await setLoading(false)
        await setErrorMessage(searchMessage)
    };

    const loginWithGoogle = async () => {
        await handleGoogleLogin()
    }


    useEffect(() => {
        if (errorMessage) {
            toast.error(searchMessage)
            setErrorMessage(searchMessage)
        }

        return setErrorMessage('')
    }, [errorMessage])

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
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
                                            className={errors.email && erStyle}
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
                                        className={errors.password && erStyle}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type='submit' className='w-full' disabled={loading}>
                        {loading && <Loader2 className='mr-2 animate-spin' size={16}/>}
                        Submit
                    </Button>

                    <div className="text-center text-red-600">{errorMessage}</div>
                </form>
            </Form>
            <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                    <span className='w-full border-t'/>
                </div>
                <div className='relative flex justify-center text-xs uppercase'>
                  <span className='bg-background px-2 text-muted-foreground'>
                    Or continue with
                  </span>
                </div>
            </div>
            <Button
                variant='outline'
                type='submit'
                onClick={loginWithGoogle}
                disabled={loading}
            >
                {loading ? (
                    <Loader2 className='mr-2 animate-spin' size={16}/>
                ) : (
                    <GitHubLogoIcon className='mr-2 h-4 w-4'/>
                )}
                Google
            </Button>
        </>
    )
}
