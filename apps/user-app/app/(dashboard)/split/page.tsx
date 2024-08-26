import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";

export default function Split () {
    return (
        <div className="relative flex flex-col w-[90%] font-Roboto CardBG-Profile rounded-xl p-4">
            <div className="flex items-center text-3xl font-bold tracking-widest mb-2">
                <Link href={"/dashboard"}>
                    <Button className={"bg-[#000] group"}><ArrowLeft size={40} className="hover:-translate-x-2 duration-300 ease-out" /></Button>
                </Link>
                <div className="font-Roboto text-[#B7ACBF] ml-4">Split</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-x-2">
                <Card title="Active Splits" ClassName="relative bg-[#726b7a]">
                    <ul className="w-full">
                        <li className="bg-[#d6d2d9] w-full rounded-lg py-4 px-2 mb-2">ok</li>
                        <li className="bg-[#c0bcc2] w-full rounded-lg py-4 px-2 mb-2">ok</li>
                        <li className="bg-[#d6d2d9] w-full rounded-lg py-4 px-2 mb-2">ok</li>
                        <li className="bg-[#c0bcc2] w-full rounded-lg py-4 px-2 mb-2">ok</li>
                    </ul>
                </Card>
                <Card ClassName="bg-[#271B2C] lg:mt-0 mt-2">
                        <div className="grid grid-cols-2 items-center">
                            <div className="text-xl text-[#e1e1e1]">Total Pending - <span className="text-2xl font-bold italic">{200}</span></div>
                        </div>
                        <Card ClassName="bg-[#e1e1e1] mt-4 flex items-center w-1/2 justify-between">
                            <div className="text-xl">Create Split</div>
                            <Link href={"/split/create-split"}>
                                <Button className={"mx-2 hover:bg-[#13D8AA] bg-[#864CB4] shadow-lg group"}><Plus className="group-hover:scale-125" /></Button>
                            </Link>
                        </Card>
                        <Card ClassName="bg-[#c3bec2] mt-2">
                            <h1 className="text-xl">Previous</h1>
                            <ul className="w-full">
                                <li className="bg-[#d6d2d9] w-full rounded-lg py-4 px-2 mb-2">ok</li>
                                <li className="bg-[#a8a3aa] w-full rounded-lg py-4 px-2 mb-2">ok</li>
                                <li className="bg-[#d6d2d9] w-full rounded-lg py-4 px-2 mb-2">ok</li>
                                <li className="bg-[#a8a3aa] w-full rounded-lg py-4 px-2 mb-2">ok</li>
                            </ul>
                        </Card>
                </Card>
            </div>
        </div>
    )
}