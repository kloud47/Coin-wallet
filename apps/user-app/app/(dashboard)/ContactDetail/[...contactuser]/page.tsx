import { Card } from "@repo/ui/card";
import { Button } from "@repo/ui/button";
import Avatar from "../../../public/Avatar.jpeg";
import { FetchContact } from "../../../lib/actions/contactFunc";
import PayContact from "../../../../components/Contacts/PayContact";
// import { useEffect } from "react";


export default async function ({ params } : {params: {slug: string}} ) {
    const name = params.contactuser[0]
    const contactData = await FetchContact(name)

    // function
    
    return (
        <div className="flex w-[90%] text-[#fff] pb-3 CardBG-Profile py-5 rounded-md duration-500 shadow-lg">
            <div className="flex flex-col w-[55%] items-center border-r">
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
                                Created - 12/02/24
                            </div>
                        </div>
                    </div>
                    <Button  className={"mt-[40px] mb-[10px] border w-[70%] border-[#35aab9] hover:bg-[#35aab9] hover:text-[#fff] text-[#35aab9]"}>Edit</Button>
                </div>
            </div>
            <div className="w-[40%] pl-2 flex flex-col items-center justify-between">
                <Card ClassName="flex flex-col items-center w-full bg-[#fff]">
                    <Button  className={"mt-[40px] mb-[10px] border w-[70%] border-[#35aab9] hover:bg-[#35aab9] hover:text-[#fff] text-[#35aab9]"}>Lend Money</Button>
                </Card>
                <PayContact  phone={contactData?.ContactPhone} fromId={Number(contactData?.userID)}  />
            </div>
        </div>
    )
}