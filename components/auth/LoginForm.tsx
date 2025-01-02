"use client"
import React, { useState, useTransition } from 'react'
import CardWrapper from './CardWrapper'
import LoginButton from './LoginButton'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormItem, FormLabel, FormField, FormControl, FormMessage } from '../ui/form'
import { z } from 'zod'
import { LoginSchema } from '@/schemas'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FormError } from '../ui/formError'
import { FormSuccess } from '../ui/FormSuccess'
import { login } from '@/actions/login'


import { signIn } from "@/auth"

export  function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("github")
            }}
        >
            <button type="submit">Signin with GitHub</button>
        </form>
    )
} 


const LoginForm = () => {
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")

    const [isPending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof LoginSchema>) => { 
        setError("");
        setSuccess("");
        startTransition(() => {
            login(values).then((data) => {
                setError(data.error);
                setSuccess(data.success);
            })
        })
    }

    return (
        <CardWrapper
            headerLabel="Welcome back!"
            backButtonLabel="Don't have an Account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form
            {...form}
            >
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'>
                    <div className='space-y-4'>
                        <FormField
                            control={form.control }
                            name='email'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder='example@email.com'
                                        type='email'>
                                            
                                        </Input> 

                                    </FormControl>
                                    <FormMessage></FormMessage>
                            </FormItem>
                        )}>

                        </FormField>
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder='********'
                                            type='password'>

                                        </Input>

                                    </FormControl>
                                    <FormMessage></FormMessage>
                                </FormItem>
                            )}>

                        </FormField>

                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success} />
                    <Button
                        disabled={isPending}
                        type='submit'
                        className='w-full'
                    >
                        Log In

                    </Button>
                </form>

            </Form>
        </CardWrapper>
    )
}

export default LoginForm

