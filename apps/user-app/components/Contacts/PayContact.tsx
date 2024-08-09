"use client"
import { Card } from "@repo/ui/card"
import { Button } from "@repo/ui/button"
import { PayContactUser } from "../../app/lib/actions/contactFunc";
import { useState } from "react";

export default function ({ phone, fromId } : { phone?: string, fromId: number }) {
    const [err, setErr] = useState<string | undefined>();
    // const amt = useRef();
    // const msg = useRef();

    async function handlePayment (e:any) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const amt = formData.get("amount");
        const msg = formData.get("message");
        const result = await PayContactUser(String(phone), String(msg), Number(amt)*100, fromId)
        setErr(result?.message);
    }


    return <Card ClassName="bg-[#231B28] w-[80%] h-[35%] flex flex-col items-center justify-center">
                <div className="text-red-500 text-center text-lg">{err}</div>
                <form  onSubmit={handlePayment} className="flex flex-col w-[75%]">
                    <label htmlFor="amount" className="block text-[#828282]" >Amount</label>
                    <input  type="text" name="amount" className="w-full bg-[#493a52] rounded-full p-1 focus:outline-none focus:border-b focus:border-[#35AAB9]" />

                    <label htmlFor="message" className="block text-[#828282]" >Message</label>
                    <input type="text" name="message" className="w-full bg-[#493a52] rounded-full p-1 focus:outline-none focus:border-b focus:border-[#35AAB9]" />
                    <Button
                        className={"mt-[15px] mb-[10px] w-[50%] border-2 mx-auto border-[#35aab9] hover:bg-[#35aab9] hover:text-[#fff] text-[#35aab9]"}>
                    Pay</Button>
                </form>                    
            </Card>
}