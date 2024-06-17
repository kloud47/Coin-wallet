"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/text-input";
import { useState } from "react";

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");

    return(
        <Center>
            <Card title="Send">
                <div className="min-w-72 pt-2">
                    <TextInput placeholder={"Number"} label="Number" onChange={(value) => {
                        setNumber(value)
                    }} value={number} />
                    <TextInput placeholder={"Amount"} label="Amount" onChange={(value) => {
                        setAmount(value)
                    }} value={amount} />
                    <div className="pt-4 flex justify-center">
                        <Button  className={"text-white bg-gray-800 hover:bg-[#13d8aa] flex rounded-3xl justify-center items-center"}
                            onClick={() => {

                            }}>
                            Send
                        </Button>
                    </div>
                </div>
            </Card>
        </Center>
    )
}