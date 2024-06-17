"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { TextInput } from "@repo/ui/text-input";
import { useState } from "react";
import Doller from "../public/dollar.png"
import { createRampTransaction } from "../app/lib/actions/createOnRampTransaction";

const SUPPORTED_BANKS = [
    {
        name: "HDFC Bank",
        redirectUrl: "https://netbanking.hdfcbank.com"
    },
    {
        name: "Axis Bank",
        redirectUrl: "https://www.axisbank.com/"
    }
]

export const AddMoney = () => {
    // console.log(Doller);
    const [amt, setAmt] = useState("")
    const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    return (
        <Card title="Add Money">
            <div className="w-full">
                <TextInput placeholder="Amount" label="Amount" onChange={(val) => {setAmt(val)}} value={amt} />
                <div className="py-4 text-left">
                    Bank
                </div>
                <Select onSelect={value => {
                    setProvider(value)
                    setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl)
                }} options={SUPPORTED_BANKS.map(x => ({
                    key: x.name,
                    value: x.name
                }))} />
                <div className="flex justify-center mt-6">
                    <Button
                        onClick={async () => {
                            await createRampTransaction(provider, amt)
                            setAmt("")
                            // window.location.href = redirectUrl || "";
                        }}
                        className={"text-white bg-gray-800 hover:bg-[#13d8aa] flex rounded-3xl justify-center items-center"}>
                        <p>Add</p>
                        <img className="m-2 h-auto w-[30px]" src={Doller.src} alt="Doller" />
                    </Button>
                </div>
            </div>
        </Card>
    );
}


function Tick() {
    return  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
}
