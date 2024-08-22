"use client"
import { Card } from "@repo/ui/card";
import Contacts from "../../../components/Contacts/Contacts";
import { Button } from "@repo/ui/button";
import { BadgeIndianRupee, Plus, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getBalance } from "../../lib/actions/getBalance";
import { BalanceCard } from "../../../components/BalanceCard";
import airtelLogo from "../../public/airtel.jpg"
import netflixLogo from "../../public/netflix.jpg"
import spotifyLogo from "../../public/spotify.png"
import crunchyrollLogo from "../../public/crunchyroll.png"

export default function Dashboard () {
    const [balance, setBalance] = useState<{ amount: number; locked: number; }>({ amount: 0, locked: 0 });
    useEffect (() => {
        const balanceData = async () => {
            return await getBalance();
        }
        balanceData().then(data => setBalance(data));

    }, [])

    return (
        <>
            <div className="w-[90%] p-2">
                <div className=" text-[#fff] w-full CardBG1 p-5 duration-500 rounded-lg CardBG-Profile shadow-lg grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <Card ClassName="col-span-2 row-span-2 w-full">
                        <BalanceCard amount={balance?.amount!} locked={balance?.locked!}  />
                        <Card ClassName="bg-[#1B1C1D] mt-2" title="Recharge">
                            <div className="flex space-x-4">
                            <div className="flex flex-col p-2 justify-center items-center hover:bg-[#3b3d3f] rounded-lg">
                                <Image src={airtelLogo.src} width={50} height={50} className="h-[50px] w-[50px] rounded-lg object-fit" alt="logo"/>
                                <div className="text-sm">Airtel prepaid</div>
                            </div>
                            <div className="flex flex-col p-2 justify-center items-center hover:bg-[#3b3d3f] rounded-lg">
                                <Image src={airtelLogo.src} width={50} height={50} className="h-[50px] w-[50px] rounded-lg object-fit" alt="logo"/>
                                <div className="text-sm">Airtel postpaid</div>
                            </div>
                            <div className="flex flex-col p-2 justify-center items-center hover:bg-[#3b3d3f] rounded-lg">
                                <Image src={netflixLogo.src} width={100} height={100} className="h-[50px] w-[50px] rounded-lg object-cover" alt="logo"/>
                                <div className="text-sm">Netflix...</div>
                            </div>
                            <div className="flex flex-col p-2 justify-center items-center hover:bg-[#3b3d3f] rounded-lg">
                                <Image src={crunchyrollLogo.src} width={50} height={50} className="h-[50px] w-[50px] rounded-lg object-fit" alt="logo"/>
                                <div className="text-sm">Crunchyroll</div>
                            </div>
                            <div className="flex flex-col p-2 justify-center items-center hover:bg-[#3b3d3f] rounded-lg">
                                <Image src={spotifyLogo.src} width={50} height={50} className="h-[50px] w-[50px] rounded-lg object-fit" alt="logo"/>
                                <div className="text-sm">Spotify</div>
                            </div>
                            </div>
                        </Card>
                    </Card>
                    <div className="row-span-1 grid grid-rows-2 text-3xl">
                        <Card ClassName="w-full h-[90%] bg-[#e1d9e7] text-slate-600 flex justify-center items-center">
                            <div className="w-full grid grid-cols-2">
                                <div>
                                    <BadgeIndianRupee size={50} color="#442F6E" />
                                    <div>Loan</div>
                                </div>
                                <div className="flex flex-col text-xl">
                                    <div>Pending - 4</div>
                                    <div className="p-2 bg-[#655284] rounded-lg text-white text-sm mt-2">{`due date - 2days`}</div>
                                </div>
                            </div>
                        </Card>
                        <Card ClassName="w-full bg-[#bdb2c6] h-[90%] text-slate-600 flex justify-center items-center">
                            <div className="w-full h-full grid grid-cols-2">
                                <Link href={"/split/create-split"} className="cursor-pointer group border-2 border-dashed border-blue-700 h-[90%] rounded-xl flex justify-center items-center flex-col bg-[#96ecff] bg-opacity-30">
                                    <Plus size={40} color="blue" className="group-hover:scale-125 duration-200" />
                                    <span className="text-lg">Create split</span>
                                </Link>
                                <Link href={"split"} className="flex flex-col justify-center items-center">
                                    <Users size={50} color="#442F6E" />
                                    <div>Split</div>
                                    <div className="text-lg text-[#603f95]">{`pending - 8`}</div>
                                </Link>
                            </div>
                        </Card>
                        <Card ClassName="w-full bg-[#A89EAF] h-[90%] text-slate-600">
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