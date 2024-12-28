import * as z from "zod";

export const LoginSchema = z.object({
    email: z
        .string()
        .email("Please enter a valid email address")
        .trim()
        .refine((email) => /^[^@]+@[^@]+\.[^@]+$/.test(email), {
            message: "Email must not contain invalid characters",
        }),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(20, "Password cannot exceed 20 characters")
        .superRefine((password, ctx) => {
            const issues: string[] = [];

            if (!/[A-Z]/.test(password)) {
                issues.push("at least one uppercase letter");
            }
            if (!/[a-z]/.test(password)) {
                issues.push("at least one lowercase letter");
            }
            if (!/[0-9]/.test(password)) {
                issues.push("at least one number");
            }
            if (!/[@$!%*?&]/.test(password)) {
                issues.push("at least one special character (@, $, !, %, *, ?, &)");
            }
            if (/\s/.test(password)) {
                issues.push("no spaces");
            }

            if (issues.length > 0) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: `Password must contain ${issues.join(", ")}.`,
                });
            }
        }),
});



export const RegisterSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters long")
        .max(50, "Name cannot exceed 50 characters")
        .regex(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces"),

    email: z
        .string()
        .email("Please enter a valid email address")
        .trim()
        .refine((email) => /^[^@]+@[^@]+\.[^@]+$/.test(email), {
            message: "Email must not contain invalid characters",
        }),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(64, "Password cannot exceed 64 characters")
        .superRefine((password, ctx) => {
            const issues: string[] = [];

            if (!/[A-Z]/.test(password)) {
                issues.push("at least one uppercase letter");
            }
            if (!/[a-z]/.test(password)) {
                issues.push("at least one lowercase letter");
            }
            if (!/[0-9]/.test(password)) {
                issues.push("at least one number");
            }
            if (!/[@$!%*?&]/.test(password)) {
                issues.push("at least one special character (@, $, !, %, *, ?, &)");
            }
            if (/\s/.test(password)) {
                issues.push("no spaces");
            }

            if (issues.length > 0) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: `Password must contain ${issues.join(", ")}.`,
                });
            }
        }),
});
