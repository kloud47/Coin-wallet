"use client"
import { Card } from "@repo/ui/card"
import { Button } from "@repo/ui/button"
import { PayContactUser } from "../../app/lib/actions/contactFunc";

export default function ({ phone, fromId } : { phone?: string, fromId: number }) {
    

    async function handlePayment (e:any) {
        const formData = new FormData(e.currentTarget);
        const amt = formData.get("name");
        const result = await PayContactUser(String(phone))
        
    }


    return <Card>
                <form action="">
                    <label htmlFor="amount" className="" >Amount</label>
                    <input type="text" name="amount" />
                    <Button  onClick={handlePayment}
                        className={"mt-[40px] mb-[10px] border w-[80%] border-[#35aab9] hover:bg-[#35aab9] hover:text-[#fff] text-[#35aab9]"}>
                    Pay</Button>
                </form>                    
            </Card>
}