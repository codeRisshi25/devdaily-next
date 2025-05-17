import { PrismaClient } from "@prisma/client";

const prismaCLientSingleton = () => {
     return new PrismaClient();
}

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaCLientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaCLientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") {
    globalThis.prismaGlobal = prisma;
}
