"use client"
import { Card } from "@repo/ui/card";
import Contacts from "../../../components/Contacts/Contacts";
import { Button } from "@repo/ui/button";
import { ArrowLeftRight, BadgeIndianRupee, Plus, Users, WalletCards } from "lucide-react";
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
            <div className="relative w-[90%] p-2">
                <div className="absolute top-0 bg-[#322B39] -translate-y-2 text-3xl px-5 font-thin rounded-t-xl text-[#787775] py-2">Dasboard</div>
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
                        <div className="grid grid-cols-2 items-center justify-center rounded-r-none rounded-l-3xl h-full bg-[#B7ACBF] text-slate-700">
                            <div className="mx-auto font-bold text-2xl text-[#475569]">
                                <WalletCards color="#442F6E" size={40} className="mx-auto" />
                                <span>Wallet</span>
                            </div>
                            <div className="flex flex-col">
                                <div className="w-full text-center border-b text-lg hover:bg-[#6d627f] hover:text-white duration-200 border-[#312E39] py-4">Add Money</div>
                                <div className="w-full text-center border-t text-lg hover:bg-[#6d627f] hover:text-white duration-200 border-[#312E39] py-4">Balance</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 items-center justify-center rounded-r-none h-full bg-[#B7ACBF] text-slate-700">
                            <div className="mx-auto font-bold text-2xl text-[#475569]">
                                <ArrowLeftRight color="#442F6E" size={40} className="mx-auto" />
                                <span>Transfer</span>
                            </div>
                            <div className="flex flex-col">
                                <div className="w-full text-center border-b text-lg hover:bg-[#6d627f] hover:text-white duration-200 border-[#312E39] py-4">Send Money</div>
                                <div className="w-full text-center border-t text-lg hover:bg-[#6d627f] hover:text-white duration-200 border-[#312E39] py-4">Transactions</div>
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