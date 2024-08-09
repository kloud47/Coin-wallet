"use server"
import prisma from "@repo/coindb/client"
import { getServerSession } from "next-auth";
import { authoptions } from "../auth";
import { redirect } from "next/navigation";


export default async function GetAllContacts() {
    const session = await getServerSession(authoptions);
    const uID = Number(session?.user?.id);
    const data = await prisma.contacts.findMany({
        where: {
            userID: uID,
            // ContactPhone: "123456"
        },
        select: {
            givenName: true,
            ContactPhone: true,
            contactProfile: true,
        }
    })
    return data;
}

export async function PayContactUser (phone: string, message: string, amount: number, fromId: number) {
    const toUser = await prisma.user.findFirst({
        where: {
            phone: phone
        },
        select: {
            id: true,
            name: true
        }
    })
    
    try {
        await prisma.$transaction(async (txn) => {
            // We are locking the request so that they execute sequentially without interfering: 
            // mongoDB is safe from this type of folly
            await txn.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(fromId)} FOR UPDATE`;// Locking

            const fromBalance = await txn.balance.findUnique({
                where: { userId: Number(fromId) },
            });
            if (!fromBalance || fromBalance.amount < amount) {
                throw new Error("Insufficient funds")
            }
            await txn.balance.update({
                where: { userId: Number(fromId) },
                data: { amount: { decrement: amount } }
            });
            await txn.balance.update({
                where: { userId: Number(toUser?.id) },
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
            fromUserID: Number(fromId),
            toUserID: Number(toUser?.id),
            Username: toUser?.name!,
            message: message
        }
    })
}

export async function FetchContact (name: string) {
    try {
        const data = await prisma.contacts.findFirst({
            where: {
                givenName: name
            },
        })
        return data;
    } catch (e) {
        return new Error("Can't find contact.")
    } 
}
export async function DeleteContact (phone: string) {
    const session = await getServerSession(authoptions);
    const id = Number(session.user.id)
    await prisma.contacts.delete({
        where: {
            contactID: {
                userID: id,
                ContactPhone: phone
            }
        }
    })
    redirect("/dashboard")
}