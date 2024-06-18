"use client"
import { Card } from "@repo/ui/card";

export const BalanceCard = ({amount, locked}: {
    amount: number;
    locked: number;
}) => {
    return <Card ClassName={"bgBalance "} title={"Balance"}>
        <div className="flex justify-between border-b border-slate-300 p-2 pb-2">
            <div>
                Unlocked balance
            </div>
            <div>
                {amount / 100} INR
            </div>
        </div>
        <div className="flex justify-between p-2 py-2">
            <div>
                Total Locked Balance
            </div>
            <div>
                {locked / 100} INR
            </div>
        </div>
        <div className="flex flex-col justify-between  p-5 py-2 bg-[#232526] rounded-3xl">
            <div className="text-slate-400 italic">
                Total Balance
            </div>
            <div className="text-3xl">
                {(locked + amount) / 100} INR
            </div>
        </div>
    </Card>
}