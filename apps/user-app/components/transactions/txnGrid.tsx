"use client"
import { ArrowBigRight, Divide } from "lucide-react";
import { useSession } from "next-auth/react";

export default function({
    transactions
}: {
    transactions: {
        id: number,
        toname: string,
        amount: number,
        toId: number,
        fromId: number,
        time: Date
        message: string | null
    }[]
}): JSX.Element {
    const { data: session, status } = useSession();
    console.log(session)
    return (
        <div className="pt-4 flex flex-col p-2 px-4 rounded-3xl shadow-lg">
            <ul className="flex text-black mb-2">
                <li className="mx-1 bg-[#B7ACBF] rounded-xl text-md p-1">Today</li>
                <li className="mx-1 bg-[#B7ACBF] rounded-xl text-md p-1">This week</li>
                <li className="mx-1 bg-[#B7ACBF] rounded-xl text-md p-1">This month</li>
            </ul>
            {transactions.map((txn, i) => <div className={`flex justify-between ${(i%2 == 0) ?"bg-[#cfc8d5]" : "bg-[#B7ACBF]"}  rounded-md text-black p-2 mb-1 hover:translate-x-2 duration-300`} key={txn.id}>
                    <div className="text-sm flex">
                        <div className={`p-3 flex flex-col items-center text-[#46316F] text-lg font-bold`}>
                            {txn.toname === session?.user?.name ? (" from " + txn.fromId) : (<div className="flex"><ArrowBigRight /> {txn.toname}</div>)}
                        </div>
                    </div>
                    <div className="text-slate-600 text-lg flex items-center">
                        {txn.message}
                    </div>
                <div className={`${txn.toname === session?.user?.name ? "text-green-600" : "text-rose-600"} text-xl font-bold flex flex-col justify-center`}>
                    { txn.toname === session?.user?.name ? "+" : "-"}  Rs {txn.amount /100}
                            <span className="text-sm text-[#6a6a6a]">{txn.time.toDateString()}</span>
                </div>
            </div>)}
        </div>
    )
}