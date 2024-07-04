"use client"
import { Button } from "@repo/ui/button";
import ReactDom from "react-dom";
import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function ({open, close}: {open: boolean, close: () => void}) {
    const [error, setError] = useState<string>();
    const session = useSession();

    async function handleSubmitContact (e:any) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        data.append("id", String(session.data?.user.id))
        try{
            const result = await axios.post("http://localhost:3001/api/contact" , data);
            setError(result.data.msg)
        } catch(error: any) {
            console.log(error.response.data)
        }
        // console.log(error)
    }

    // console.log("open")
    if (!open) return null;
    return ReactDom.createPortal(
        <>
            <div className="bg-[#000] opacity-70 fixed w-screen h-screen z-50" />
            <div className="bg-[#2d2934] w-[30vw] z-50 flex flex-col items-end h-[60vh] center rounded-lg shadow-xl">
                <button className="flex items-center justify-center rounded-r-md rounded-b-[0px] p-1 hover:bg-[#4c3242] w-[7%] h-[5vh] text-[#fff]" onClick={close}><Cross /></button>
                <div className="mx-auto text-[#fff] font-bold h-[10vh] text-4xl mb-3">Add Contact</div>
                <form action="" onSubmit={handleSubmitContact} className="h-[45vh] flex flex-col w-full p-5 bg-[#342F39]">
                    <div className="text-[#f72c2c] w-full">{error}</div>
                    {/* <label htmlFor="phone">Phone No.</label>
                    <input type="text" name="phone" />
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                    <Button>Save</Button> */}
                    <label htmlFor="phone" className="pl-2 text-[#a7a5a5]">Phone</label>
                    <input type="text" name="phone" className=" outline-none opacity-50 z-10 p-1 text-[#fff] placeholder:text-slate-500 rounded-full mb-3 bg-[#53455f]"
                        required/>

                    <label htmlFor="name" className="pl-2 text-[#a7a5a5]">Name</label>
                    <input type="text" name="name" className="outline-none opacity-50 rounded-full p-1 text-[#fff] placeholder:text-slate-500 mb-3 bg-[#53455f]"  
                        required/>

                        <Button  className={"mt-10 mx-3 border border-[#35aab9] hover:bg-[#35aab9] hover:text-[#fff] text-[#35aab9]"}>Save</Button>
                </form>
            </div>
        </>,
        document.querySelector("#portal")!
    )
}

function Cross () {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>

}