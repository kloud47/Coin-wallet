"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import CreateSplitForm from "../../../../components/split/CreateSplitForm";
import SelectContact from "../../../../components/split/SelectContact";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ContactCard } from "../../../../components/split/ContactCard";

export default function CreateSplit () {
    const [onSelectData, setSelectData] =  useState<{ givenName: string | null; ContactPhone: string; contactProfile: string | null; }[]>([{
        givenName: "",
        contactProfile: "",
        ContactPhone: ""
    }]);

    const [search, setSearch] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    // const debounce = (cb: () => void , delay = 1000) => {
    //     let timeout;
    //     return (...args) => 
    //     clearTimeout(timeout);
    //     timeout = setTimeout(() => {
    //         cb(...args)
    //     }, delay);
    // }
    const handleChange = async (e:any) => {
        setSearch(e.target.value)
        // debounce(() => {
        //     setSearchTerm(e.target.value)
        // })
    }


    const memData = onSelectData.slice(1);

    const seen = new Set();
    const uniqueData = memData.filter(dataObj => {
        const duplicate = seen.has(dataObj.ContactPhone)
        seen.add(dataObj.ContactPhone);
        return !duplicate
    })

    // console.log(onSelectData);

    return (
        <div className="flex flex-col w-[90%] font-Roboto CardBG-Profile rounded-xl p-4">
            <div className="text-3xl font-bold tracking-widest flex items-center">
                <Link href={"/split"}>
                    <Button className={"bg-[#000] group"}><ArrowLeft size={40} className="hover:-translate-x-2 duration-300 ease-out" /></Button>
                </Link>
                <div className="font-Roboto text-[#B7ACBF] ml-4">Create Split</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                <div className=" text-[#fff]">
                    <div className="w-full p-4">

                        {/* ----------------------------(Debounce Searching)---------------------------------------------*/}
                        <div className="flex mb-2">
                            <input type="text" placeholder="Search for contacts" className="rounded-lg bg-[#aaa1af] text-[#000] placeholder:text-[#000] w-[50%] p-2 focus:outline-none focus:border-b-[3px] focus:border-b-[#9959C6]"
                                onChange={handleChange}
                                value={search}
                            />
                        </div>
                        {/*--------------------------------------------------------------------------------------------------*/}


                        <div className="flex flex-wrap bg-[#8a8290] rounded-t-lg border-b-2 border-black p-2">
                            {uniqueData.map((data,i) => <ContactCard  del={true} CardClass={"bg-[#a19fa1] group hover:bg-[#a15f73]"} name={data.givenName!} imgUrl={data.contactProfile!}
                            deleteFunc={() => {
                                onSelectData.splice(i,1)
                                console.log(onSelectData)
                                setSelectData([...onSelectData])
                            }}
                            >
                                {data.givenName}
                            </ContactCard>)}
                        </div>
                        <SelectContact searchTerm={searchTerm} data={onSelectData!} setFunc={setSelectData} />
                    </div>
                </div>
                <Card title="fill details" ClassName="bg-[#271b2c] text-[#e8e2f2] lg:mt-0 mt-2">
                    <CreateSplitForm  memberData={uniqueData} />
                </Card>
            </div>
        </div>
    )
}