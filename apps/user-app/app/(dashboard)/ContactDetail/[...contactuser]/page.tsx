"use server"
import { Button } from "@repo/ui/button";
import PayContact from "../../../../components/Contacts/PayContact";
import { DeleteContact, FetchContact } from "../../../lib/actions/contactFunc";
import LendMoney from "../../../../components/Contacts/LendMoney";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default async function ({ params } : {params: {contactuser: string}} ) {
    const name = params.contactuser[0]
    const contactData: any = await FetchContact(String(name))
    
    async function deleteContact (data: FormData) {
        "use server"// need to explicity mark it as server component for it to work inn form client component 
        const ok = data.get("itemId") 
        const datadelete = await DeleteContact(contactData?.ContactPhone)
    }
    
    return (
        <div className="relative flex w-[90%] text-[#e0dfdf] pb-3 CardBG-Profile py-5 rounded-md duration-500 shadow-lg">
            <Link href={"/dashboard"} className="ml-4">
                    <Button className={"bg-[#000] group"}><ArrowLeft size={40} className="group-hover:-translate-x-2 duration-300 ease-out" /></Button>
            </Link>
            <div className="flex flex-col w-[55%] items-center border-r-2 border-[#635D68]">
                <div className="w-[250px] h-[250px] rounded-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)]">
                    {!contactData?.contactProfile ? <div className="bg-[#ec3232] flex items-center justify-center text-[8rem] p-1 h-[250px] w-[250px] shadow-lg text-[#fff] rounded-full">
                    {name?.substring(0, 2)}
                    </div> :
                    <img src={String(contactData?.contactProfile)}
                    className="w-[250px] h-[250px] rounded-full"
                    alt="" />}
                </div>
                <div className="flex flex-col w-[100%] items-center">
                    <div className="flex flex-col items-center font-black text-3xl p-4 space-y-6 mt-6 w-full">
                        <h1 className="flex flex-col text-center">
                            {name}
                            <div className="text-lg text-slate-500 italic">{contactData?.contactName}</div>
                        </h1>
                        <div className="flex items-center text-[rgb(45,45,45)] w-[95%] rounded-lg p-4 bg-[#635d68] justify-between py-8">
                            <div className="flex font-thin text-2xl">
                                CID - @{contactData?.ContactPhone} 
                            </div>
                            <div className="text-xl font-thin">
                                {contactData?.Created.toDateString()}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center w-full px-5 space-x-5">
                    <form action={deleteContact} className="w-[40%]">
                        <input className="hidden" name="itemId" />
                        <Button
                            className={"mt-[40px] mb-[10px] border-2 w-full border-[#b9355c] hover:bg-[#b9355c] hover:text-[#fff] text-[#35aab9]"}>
                            Delete
                        </Button>
                    </form>
                    <Button  className={"mt-[40px] mb-[10px] border-2 w-[40%] border-[#35aab9] hover:bg-[#35aab9] hover:text-[#fff] text-[#35aab9]"}>Edit</Button>
                    </div>
                </div>
            </div>
            <div className="w-[45%] pl-2 flex flex-col items-center justify-between">
                <LendMoney />
                <PayContact  phone={contactData?.ContactPhone} fromId={Number(contactData?.userID)}  />
            </div>
        </div>
    )
}