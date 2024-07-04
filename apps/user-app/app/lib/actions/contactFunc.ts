"use server"
import prisma from "@repo/coindb/client"
import { getServerSession } from "next-auth";
import { authoptions } from "../auth";

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

export async function PayContactUser (phone: string) {
    // const data = await prisma.balance.findUnique({
    //     data: {

    //     }
    // })
    console.log("hello")
}

export async function FetchContact (name: string) {
    const data = await prisma.contacts.findFirst({
        where: {
            givenName: name
        },
    })
    return data;
}