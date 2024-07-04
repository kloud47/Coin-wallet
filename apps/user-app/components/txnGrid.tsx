"use client"
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
    }[]
}): JSX.Element {
    const { data: session, status } = useSession();
    console.log(session)
    return (
        <div className="pt-4 flex flex-col bg-[#2e212e] border-2 p-2 px-4 rounded-3xl shadow-lg">
            <ul className="flex text-black mb-2">
                <li className="mx-1 bg-[#B7ACBF] rounded-xl text-md p-1">Recent</li>
                <li className="mx-1 bg-[#B7ACBF] rounded-xl text-md p-1">This week</li>
                <li className="mx-1 bg-[#B7ACBF] rounded-xl text-md p-1">This month</li>
            </ul>
            {transactions.map(txn => <div className="flex justify-between bg-[#c0c8d1] rounded-xl text-black p-2 my-1 hover:translate-x-3 duration-300" key={txn.id}>
                <div>
                    <div className="text-sm flex">
                        <div className={`p-3 flex items-center text-lg font-bold`}>
                            {txn.toname === session?.user?.name ? (" from " + txn.fromId) : ("to " + txn.toname)}
                        </div>
                    </div>
                        <div className="text-slate-600 text-xs">
                        </div>
                </div>
                <div className={`${txn.toname === session?.user?.name ? "text-green-600" : "text-rose-600"} text-xl font-bold flex flex-col justify-center`}>
                    { txn.toname === session?.user?.name ? "+" : "-"}  Rs {txn.amount /100}
                </div>
            </div>)}
        </div>
    )
}