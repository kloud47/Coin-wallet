import { getServerSession } from "next-auth";
import TxnGrid from "../../../components/transactions/txnGrid";
import { authoptions } from "../../lib/auth";
import prisma from "@repo/coindb/client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import TransactionGraph from "../../../components/transactions/TransactionGraph";

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
        time: t.timestamp,
        message: t.message
    }))
}

export default async function() {
    const transactions = await getTransactions();
    return <div className="flex w-[90%] font-Roboto CardBG-Profile rounded-xl">
        <div className="w-[60%]">
            <TransactionGraph transactions={transactions} />
        </div>
        <div className=" text-[#fff] w-[40%]  duration-500 shadow-lg">
            <div className="text-3xl font-bold tracking-widestp-5 pt-4 pl-4">
                <div className="">Transactions</div>
            </div>
            
            <div className="flex flex-col w-full justify-center p-2">
                <div>
                    <TxnGrid transactions={transactions} />
                </div>
            </div>
        </div>
    </div>
}