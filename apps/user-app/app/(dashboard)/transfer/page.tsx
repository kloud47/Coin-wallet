import prisma from "@repo/coindb/client";
import { AddMoney } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/transactions/OnRampTransaction";
import { getServerSession } from "next-auth";
import { authoptions } from "../../lib/auth";
import { getBalance } from "../../lib/actions/getBalance";

async function getOnRampTransactions() {
    const session = await getServerSession(authoptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        txnId: t.id,
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

export default async function() {
    const balance = await getBalance();
    const transactions = await getOnRampTransactions();

    return <div className="w-[90%] p-4">
        <div className=" text-[#fff] pb-3 CardBG1 p-10 rounded-xl duration-500 shadow-lg">
            <div className="text-3xl font-bold tracking-widest p-5">
                <div className="font-Roboto">Transfer to Wallet</div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
                <AddMoney />
            </div>
            <div>
                <BalanceCard amount={balance.amount} locked={balance.locked} />
                <div className="pt-4">
                    <OnRampTransactions transactions={transactions} />
                    {/* <OnRampTransactions /> */}
                </div>
            </div>
        </div>
        </div>
    </div>
}