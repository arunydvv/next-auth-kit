"use server"

import { db } from "@/lib/db"
import bcrypt from "bcrypt"
import { z } from "zod"
import { RegisterSchema } from "@/schemas"


// we are using server actions here

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values)

    if (!validatedFields.success) {
        return {
            error: "Invalid Fields!"
        }
    }
    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await db.user.findUnique({
        where: {
            email: email
        }
    });

    if (existingUser) {
        return {
            error: "User already exists!"
        }
    }

    const newUser = await db.user.create({
        data: {
            email,
            password: hashedPassword,
            name
        }
    });

    return {
        success : "User Created"
    }
}