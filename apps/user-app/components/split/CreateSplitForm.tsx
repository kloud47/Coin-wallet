"use client"
import { Button } from "@repo/ui/button";
import axios from "axios";
import { useState } from "react";
import { CreateSplit } from "../../app/lib/actions/SplitFunc";

export default function CreateSplitForm ({ memberData }: { memberData: {
    givenName: string | null;
    ContactPhone: string;
    contactProfile: string | null;
}[] 
}) {
    const [formState, setFormState] = useState<{ 
        inputAmt: string, 
        inputTitle: string, 
        inputContent: string, 
        inputMembers: string[]
    }>({
        inputAmt: "",
        inputTitle: "",
        inputContent: "",
        inputMembers: []
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

        memberData.map(data => formState.inputMembers.push(data.givenName!))

        // const response = await axios.post("/createSplit", formState)
        const response = await CreateSplit(formState);

        // if (response.status == 200) {
        //     console.log(response.data)
        // } else {
        //     console.log("not ok")
        // }

        // console.log(formState);

        console.log(response);

        setFormState({inputAmt: "", inputTitle: "", inputContent: "", inputMembers: []})
    }

    return (
        <form onSubmit={handleSubmit} className="text-black mx-2 bg-[#d1c4da] p-4 rounded-lg">
            {/* <label htmlFor="inputTitle" className="block text-[#655284] text-lg">Title</label> */}
            <input 
                type="text" name="inputTitle"
                placeholder="title here.."
                className="w-[80%] text-xl capitalize placeholder-[#271B2C] rounded-bl-lg outline-none px-2 bg-transparent border-b-2 border-l-2 border-[#9787b1] font-thin"
                value={formState.inputTitle}
                onChange={handleChange}
            />

            <div className="my-4">
                <h3 className="text-[#271B2C] text-lg">Members</h3>
                <ul className="flex">
                    {memberData.map(member => <li className="mx-1 bg-[#b5a4c1] py-1 px-2 rounded-lg shadow-md">{member.givenName}</li>)}
                </ul>
            </div>

            <div className="flex justify-center my-4 bg-[#f7f0fc] rounded-3xl py-2 mx-4 shadow-md">
                <label htmlFor="inputAmt" className="text-4xl text-[#655284]">&#8377;</label>
                <input
                    name="inputAmt"
                    type="text" placeholder="0" className="text-3xl text-[#655284] outline-none placeholder:text-[#7d767d] text-center bg-transparent" 
                    value={formState.inputAmt}
                    onChange={handleChange}
                    style={{ width: `${formState.inputAmt.length + 1}ch` }}
                />
            </div>

            <label htmlFor="inputContent" className="block text-[#271B2C] text-lg">Content</label>
            <textarea 
                name="inputContent"
                className="w-full rounded-lg bg-transparent border-b-2 border-[#9787b1] h-[150px] text-lg outline-none px-2 font-thin placeholder:text-[#fff]"
                placeholder="Type here..."
                value={formState.inputContent}
                onChange={handleChange}
            />
            
            <Button className={"mt-5 px-10 hover:bg-[#13D8AA] bg-[#271B2C] shadow-lg mx-auto"}>Create</Button>
        </form>
    )
}