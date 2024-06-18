import prisma from "@repo/coindb/client";
import { AddMoney } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/OnRampTransaction";
import { getServerSession } from "next-auth";
import { authoptions } from "../../lib/auth";

async function getBalance() {
    const session = await getServerSession(authoptions);
    console.log(session.user.id)
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

async function getOnRampTransactions() {
    const session = await getServerSession(authoptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

export default async function() {
    const balance = await getBalance();
    // console.log(balance)
    const transactions = await getOnRampTransactions();

    return <div className="w-[90%] p-4">
        <div className=" text-[#fff] pb-3 italic CardBG1 p-10 p-3 rounded-[50px] duration-500 shadow-lg">
            <div className="text-3xl hover:tracking-wider font-bold tracking-widest duration-500 p-5">Transfer</div>
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