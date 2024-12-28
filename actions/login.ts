"use server"

import { LoginSchema } from "@/schemas"
import { error } from "console"
import { z } from "zod"

// we are using server actions here

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)

    if (!validatedFields.success) {
        return {
            error: "Invalid Fields!"
        }
    }
    return {
        success: "Email sent!"
    }

} 