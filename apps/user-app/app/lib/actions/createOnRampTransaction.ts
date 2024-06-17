"use server"
import { getServerSession } from "next-auth"
import { authoptions } from "../auth"
import prisma from "@repo/coindb/client";

export const createRampTransaction = async (provider: string, amount: string): Promise<string> => {
    const session = await getServerSession(authoptions);
    if (!session?.user || !session?.user.id) {
        return new Promise((resolved) => resolved("Unauthenticated User"))
    }

    const token = (Math.random() * 100).toString();;
    return await prisma.onRampTransaction.create({
        data: {
            provider,
            token,
            status: "Processing",
            amount: Number(amount)*100,
            startTime: new Date(),
            userId: Number(session?.user?.id)
        }
    })
        .then(() => "Done")
        .catch(err => "Someting happened in the database")
}   