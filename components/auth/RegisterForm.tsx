"use client";

import React, { useState, useTransition } from "react";
import CardWrapper from "./CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormItem,
    FormLabel,
    FormField,
    FormControl,
    FormMessage,
} from "../ui/form";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../ui/formError";
import { FormSuccess } from "../ui/FormSuccess";
import { register } from "@/actions/register";
import { RegisterSchema } from "@/schemas";

const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        try {
            startTransition(() => {
                register(values).then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                });
            });
        } catch {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <CardWrapper
            headerLabel="Create an Account"
            backButtonLabel="Already have an Account?"
            backButtonHref="/auth/login"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="name">Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="name"
                                            {...field}
                                            disabled={isPending}
                                            placeholder="Alice Bob"
                                            type="text"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="email"
                                            {...field}
                                            disabled={isPending}
                                            placeholder="example@email.com"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="password"
                                            {...field}
                                            disabled={isPending}
                                            placeholder="********"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    {error && <FormError message={error} />}
                    {success && <FormSuccess message={success} />}
                    <Button disabled={isPending} type="submit" className="w-full">
                        {isPending ? "Creating..." : "Create an Account"}
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
};

export default RegisterForm;
