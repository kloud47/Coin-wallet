import { Card } from "@repo/ui/card";
import Contacts from "../../../components/Contacts/Contacts";
import { Button } from "@repo/ui/button";


export default function Dashboard (): JSX.Element {
    return (
        <>
            <div className="w-[90%] h-[90%] p-2">
                <div className=" text-[#fff] w-full h-full CardBG1 p-5 duration-500 rounded-lg CardBG-Profile shadow-lg grid rid-cols-3 gap-4">
                    <Card ClassName="col-span-2 row-span-3 p-0 shadow-none bg-[#000]">
                        {/* <img src={Credit.src} alt="" className="rounded-md w-full"/> */}
                    </Card>
                    <div className=" space-y-2 row-span-3 flex flex-col items-end text-3xl">
                        <Card ClassName="h-[50%] w-full bg-[#A89EAF] text-slate-600 flex justify-center items-center">
                            <div>Loans</div>
                        </Card>
                        <Card ClassName="h-[50%] w-full bg-[#A89EAF] text-slate-600 flex justify-center items-center">
                            <div>Split</div>
                        </Card>
                    </div>
                    <div className="col-span-3 grid grid-cols-3 space-x-1 ">
                        <div className="flex flex-col items-center justify-center rounded-r-none rounded-l-3xl h-full bg-[#B7ACBF] text-slate-700">
                            <Wallet />
                            <div className="font-bold text-xl text-purple-800">Wallet</div>
                            <div className="flex gap-x-8 mt-2">
                                <Button className="rounded-xl text-lg border">Add Money</Button>
                                <Button className="rounded-xl text-lg border">Balance</Button>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center h-full bg-[#B7ACBF] text-slate-700">
                            <Money />
                            <div className="font-bold text-xl text-purple-800">Transfer</div>
                            <div className="flex gap-x-8 mt-2">
                                <div className="rounded-xl text-lg">Send Money</div>
                                <div className="rounded-xl text-lg">Transactions</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center rounded-r-2xl justify-center h-full bg-[#B7ACBF] text-slate-700"></div>
                    </div>
                </div>
            </div>
            <div className="w-[90%] p-4">
                <div className="w-full text-[#fff] pb-3 CardBG1 p-6 rounded-lg duration-500 CardBG-Profile shadow-lg">
                    <div className="text-3xl font-bold tracking-widestp-5">
                        {/* <div className="ml-5 duration-500">Contacts</div> */}
                    </div>
                    <Contacts />
                </div>
            </div>
        </>
    );
}

function Wallet () {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
    </svg>
}

function Money () {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
}