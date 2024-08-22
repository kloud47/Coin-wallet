"use client"
import { Button } from "@repo/ui/button";
import axios from "axios";
import { useState } from "react";

export default function CreateSplitForm () {
    const [formState, setFormState] = useState({
        inputAmt: "",
        inputTitle: "",
        inputContent: "",
        inputMembers: ""
    });

    const handleChange = (e: any) => {
        setFormState(perv => ({
            ...perv,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        console.log(formState);
        setFormState({inputAmt: "", inputTitle: "", inputContent: "", inputMembers: ""})

        // const response = await axios()
    }

    return (
        <form onSubmit={handleSubmit} className="text-black mx-2 border-2 bg-[#d1c4da] border-[#9787b1] p-4 rounded-lg">
            {/* <label htmlFor="inputTitle" className="block text-[#655284] text-lg">Title</label> */}
            <input 
                type="text" name="inputTitle"
                placeholder="title here.."
                className="w-[80%] text-lg placeholder-[#655284] outline-none px-2 bg-transparent border-b-2 border-l-2 border-[#9787b1] font-thin"
                value={formState.inputTitle}
                onChange={handleChange}
            />

            <div className="my-4">
                <h3 className="text-[#655284] text-lg">Members</h3>
                <div>

                </div>
            </div>

            <div className="flex justify-center my-4 bg-[#f7f0fc] rounded-3xl py-2 mx-4">
                <label htmlFor="inputAmt" className="text-4xl text-[#655284]">&#8377;</label>
                <input
                    name="inputAmt"
                    type="text" placeholder="0" className="text-3xl text-[#655284] outline-none placeholder:text-[#7d767d] text-center bg-transparent" 
                    value={formState.inputAmt}
                    onChange={handleChange}
                    style={{ width: `${formState.inputAmt.length + 1}ch` }}
                />
            </div>

            <label htmlFor="inputContent" className="block text-[#655284] text-lg">Content</label>
            <textarea 
                name="inputContent"
                className="w-full rounded-lg bg-[#e2d5eb] h-[150px] text-lg outline-none px-2 font-thin"
                placeholder="Type here..."
                value={formState.inputContent}
                onChange={handleChange}
            />
            
            <Button className={"mt-5 px-10 hover:bg-[#13D8AA] bg-[#864CB4] shadow-lg mx-auto"}>Create</Button>
        </form>
    )
}