import { SendCard } from "../../../components/SendCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { P2pTransactions } from "../../../components/transactions/p2pTransactions";
import { getServerSession } from "next-auth";
import { authoptions } from "../../lib/auth";
import prisma from "@repo/coindb/client";

async function getTransactions() {
    const session = await getServerSession(authoptions);
    const txn = await prisma.p2pTransfer.findMany({
        where: {
            fromUserID: Number(session?.user?.id)
        }
    });
    return txn.map(t => ({
        txnId: t.id,
        amount: t.amount,
        time: t.timestamp,
        Username: t.Username
    }))
}

export default async function() {
    const transactions = await getTransactions()
    return <div className="w-[90%]">
        <div className=" text-[#fff] pb-3 CardBG1 p-10 rounded-[50px] duration-500 shadow-lg">
            <div className="text-3xl font-bold hover:tracking-wider tracking-widest duration-500 p-5">To Number</div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <SendCard />
                </div>
                <div>
                    <div className={"pt-4"}>
                        <P2pTransactions transactions={transactions} />
                    </div>
                </div>
            </div>
        </div>
    </div>
}