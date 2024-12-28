import { PrismaClient } from "@prisma/client"

declare global{
    var prisma: PrismaClient | undefined;
}
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = db
}


// This prevents creation of new PrismaClient instances when hot reloading occurs in development
// global is not affected by hot reloading 