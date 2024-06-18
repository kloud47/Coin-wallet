import { SendCard } from "../../../components/SendCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { getServerSession } from "next-auth";
import { authoptions } from "../../lib/auth";
import prisma from "@repo/coindb/client";

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

export default async function() {
    const balance = await getBalance()
    return <div className="w-[90%]">
        <div className=" text-[#fff] pb-3 italic CardBG1 p-10 p-3 rounded-[50px] duration-500 shadow-lg">
            <div className="text-3xl font-bold hover:tracking-wider tracking-widest duration-500 p-5">To Number</div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <SendCard />
                </div>
                <div>
                    <BalanceCard amount={balance.amount} locked={balance.locked} />
                </div>
            </div>
        </div>
    </div>
}