"use server"

import { RegisterSchema } from "@/schemas"
import { z } from "zod"

// we are using server actions here

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values)

    if (!validatedFields.success) {
        return {
            error: "Invalid Fields!"
        }
    }
    return {
        success: "Email sent!"
    }

} 