import prisma from "@repo/coindb/client";
import { getServerSession } from "next-auth";
import { authoptions } from "../../api/auth/[...nextauth]/auth";

export async function getTransactions() {
    const session = await getServerSession(authoptions);
    const user = Number(session?.user?.id);
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            OR:[
                {toUserID: user},
                {fromUserID: user},
            ]
        }
    })
    return txns.map(t => ({
        id: t.id,
        toId: t.toUserID,
        fromId: t.fromUserID,
        amount: t.amount,
        toname: t.Username,
        time: t.timestamp,
        message: t.message
    }))
}