"use server"
import { getServerSession } from "next-auth"
import { authoptions } from "../../api/auth/[...nextauth]/auth"
import prisma from "@repo/coindb/client";

export async function P2Ptransfer (to: string, amount: number) {
    const session = await getServerSession(authoptions);
    const from = session?.user?.id;

    if(!from) {
        return {
            message: "User is not Logged in"
        }
    }
    const toUser = await prisma.user.findFirst({
        where: {
            phone: to
        }
    })
    if (!toUser) return {
        message: "reciever User not found"
    }

    try {
        await prisma.$transaction(async (txn) => {
            // We are locking the request so that they execute sequentially without interfering: 
            // mongoDB is safe from this type of folly
            await txn.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`;// Locking

            const fromBalance = await txn.balance.findUnique({
                where: { userId: Number(from) },
            });
            if (!fromBalance || fromBalance.amount < amount) {
                throw new Error("Insufficient funds")
            }
            await txn.balance.update({
                where: { userId: Number(from) },
                data: { amount: { decrement: amount } }
            });
            await txn.balance.update({
                where: { userId: Number(toUser.id) },
                data: { amount: { increment: amount } }
            })
        })
    } catch (e) {
        console.log(e)
        return {
            message: "Error in bank transfer"
        }
    }

    await prisma.p2pTransfer.create({
        data: {
            amount: amount,
            timestamp: new Date(),
            fromUserID: Number(from),
            toUserID: Number(toUser.id),
            Username: toUser.name
        }
    })
}