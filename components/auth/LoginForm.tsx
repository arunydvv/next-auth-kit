"use client"
import React from 'react'
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




const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (values : z.infer<typeof LoginSchema>) => { 
        console.log(values)
    }

    return (
        <CardWrapper
            headerLabel="Welcome Back"
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
                                            placeholder='********'
                                            type='password'>

                                        </Input>

                                    </FormControl>
                                    <FormMessage></FormMessage>
                                </FormItem>
                            )}>

                        </FormField>

                    </div>
                    {/* <FormError message='Something went wrong'/>
                    <FormSuccess message='Email Sent'/> */}
                    <Button
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

