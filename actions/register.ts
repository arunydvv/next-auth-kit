"use server";

import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import { z } from "zod";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const register = async (
  values: z.infer<typeof RegisterSchema>
): Promise<{ error?: string; success?: string }> => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid Fields!",
    };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: "User already exists!",
    };
  }

  const newUser = await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  return {
    success: "User Created",
  };
};
