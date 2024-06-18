"use client"
import { Card } from "@repo/ui/card"

export const OnRampTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        status: "Success" | "Failure" | "Processing",
        provider: string
    }[] 
}) => {
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    } else {
    return <Card ClassName={"bg-[#070633] no-scrollbar rounded-[30px]"} title="Recent Transactions">
        <div className="pt-2">
            {transactions.map(t => <div className="flex justify-between">
                <div>
                    <div className="text-sm flex">
                        Received INR
                    <div className={`p-3 flex items-center ${(t.status === "Success")? "text-emerald-400" : "text-rose-600"}`}>
                        {"(" + t.status + ")"}
                    </div>
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.amount / 100}
                </div>

            </div>)}
        </div>
    </Card>
    }
}

// export const OnRampTransactions = () => {
//     return <div>
//         Hello
//     </div>
// }