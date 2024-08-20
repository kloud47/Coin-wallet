import TxnGrid from "../../../components/transactions/txnGrid";
import { BalanceCard } from "../../../components/BalanceCard";
import { getBalance } from "../../lib/actions/getBalance";
import { Card } from "@repo/ui/card";
import { getTransactions } from "../../lib/actions/getTransactions";
import { UserCard } from "@repo/ui/user-card";
import { getRecentContacts } from "../../lib/actions/contactFunc";

export default async function() {
    const balance = await getBalance();
    const transactions = await getTransactions();
    const contactsArray = await getRecentContacts();


    return <div className="flex lg:flex-row flex-col w-[90%] font-Roboto CardBG-Profile rounded-xl">
        <div className="flex flex-col w-full lg:w-[55%] px-6 lg:pl-6 py-5">
            <BalanceCard amount={balance.amount} locked={balance.locked} />
            <Card ClassName="bg-[#8A8290] mb-2 mt-3" title="Recent">
            <div className="flex flex-wrap bg-[#8a8290] rounded-xl p-2 border-t-2 border-black">
                {contactsArray?.map(u => <UserCard name={String(u.givenName)} imgUrl={u.contactProfile!}>{ u.givenName?.split(' ').at(0) }</UserCard>)}
            </div>
            </Card>
        </div>
        <div className=" text-[#fff] w-full lg:w-[45%]  duration-500 shadow-lg">
            <div className="text-3xl font-bold tracking-widestp-5 pt-4 pl-4">
                <div className="">Transactions</div>
            </div>
            
            <div className="flex flex-col w-full justify-center p-2">
                <TxnGrid transactions={transactions} />
            </div>
        </div>
    </div>
}