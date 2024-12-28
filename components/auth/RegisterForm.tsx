"use client"
import React, { useState, useTransition } from 'react'
import CardWrapper from './CardWrapper'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormItem, FormLabel, FormField, FormControl, FormMessage } from '../ui/form'
import { z } from 'zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FormError } from '../ui/formError'
import { FormSuccess } from '../ui/FormSuccess'
import { register } from '@/actions/register'
import { RegisterSchema } from '@/schemas'




const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")

    const [isPending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() => {
            register(values).then((data) => {
                setError(data.error);
                setSuccess(data.success);
            })
        })
    }

    return (
        <CardWrapper
            headerLabel="Create an Account"
            backButtonLabel="Already have an Account?"
            backButtonHref="/auth/login"
            showSocial
        >
            <Form
                {...form}
            >
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'>
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder='Alice Bob'
                                            type='name'>

                                        </Input>

                                    </FormControl>
                                    <FormMessage></FormMessage>
                                </FormItem>
                            )}>

                        </FormField>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
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
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                        disabled={isPending}
                        type='submit'
                        className='w-full'
                    >
                        Create an Account

                    </Button>
                </form>

            </Form>
        </CardWrapper>
    )
}

export default RegisterForm

