"use client"
import { Button } from "@repo/ui/button";
import { Suspense, useState } from "react";
import AddContactModal from "./AddContactModal";
import AllContact from "./AllContact";


export default function () {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="w-full p-4">
            {openModal && <AddContactModal open={openModal} close={() => setOpenModal(false)} />}
            <div className="flex mb-2">
                <input type="text" placeholder="Search for contacts" className="rounded-full bg-[#aaa1af] placeholder:text-[#000] w-[30%] px-4 mx-2 focus:outline-none focus:border-b-[3px] focus:border-b-[#9959C6]"/>
                <Button onClick={() => setOpenModal(true)}
                    className={"bg-[#9959C6] mx-7 hover:bg-[#13D8AA] popBtn"}>
                    <AddUser />
                </Button>
                <div className="bg-[#000] text-[70%] popup flex justify-center rounded-md border h-[30px] items-center w-[100px]">Add new Contact</div>
            </div>
            <AllContact />
        </div>
    );
}

function AddUser () {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
    </svg>

}