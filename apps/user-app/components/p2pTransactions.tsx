"use client"
import { Card } from "@repo/ui/card"

export const P2pTransactions = ({
    transactions
}: {
    transactions: {
        txnId: number,
        time: Date,
        amount: number,
        Username: string,
    }[] 
}) : JSX.Element => {
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    } else {
    return <Card ClassName={"bg-[#070633] hover:translate-y-[2px] no-scrollbar rounded-[30px]"} title="Recent Transactions">
        <div className="pt-2">
            {transactions.map(t => <div className="flex justify-between" key={t.txnId}>
                <div>
                    <div className="text-sm flex">
                        Sent INR
                    <div className={`p-3 flex items-center font-bold`}>
                        ({t.Username})
                    </div>
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    {`Rs ${t.amount / 100}`}
                </div>

            </div>)}
        </div>
    </Card>
    }
}