'use server';
import prisma from "@repo/coindb/client"
import { getServerSession } from "next-auth"
import { authoptions } from "../../api/auth/[...nextauth]/auth"


interface formType {
    inputAmt: string, 
    inputTitle: string, 
    inputContent: string, 
    inputMembers: string[]
}

export const CreateSplit = async ({
    inputAmt,
    inputTitle,
    inputContent,
    inputMembers
} : formType) => {
    const session = await getServerSession(authoptions);

    console.log("working");

    try {
        await prisma.split.create({
            data: {
                host: session.user.id,
                splitID: 123,
                amount: Number(inputAmt),
                timestamp: new Date(),
                title: inputTitle,
                content: inputContent,
                members: inputMembers,
                status: "pending"
            }
        })
        return "complete"
    } catch (e:any) {
        return "incomplete"
    }
}