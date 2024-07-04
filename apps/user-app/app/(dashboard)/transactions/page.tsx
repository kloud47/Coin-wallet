import { getServerSession } from "next-auth";
import TxnGrid from "../../../components/txnGrid";
import { authoptions } from "../../lib/auth";
import prisma from "@repo/coindb/client";

async function getTransactions() {
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
        time: t.timestamp
    }))
}

export default async function() {
    const transactions = await getTransactions();
    return <div className="w-[90%] p-4 font-Roboto">
        <div className=" text-[#fff] pb-3 CardBG2 p-10 rounded-[50px] duration-500 shadow-lg">
            <div className="text-3xl font-bold tracking-widestp-5 mb-4 p-5">
                <div className="hover:tracking-wider duration-500">Transactions</div>
            </div>
            <div className="flex flex-col w-full justify-center p-2">
                <div>
                    <TxnGrid transactions={transactions} />
                </div>
            </div>
        </div>
    </div>
}