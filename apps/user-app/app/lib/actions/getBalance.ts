"use server"
import prisma from "@repo/coindb/client";
import { getServerSession } from "next-auth";
import { authoptions } from "../auth";

export async function getBalance() {
    const session = await getServerSession(authoptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}