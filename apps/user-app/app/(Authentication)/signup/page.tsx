"use client"
import { SpecialButton } from "@repo/ui/special-button"
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function () {
    const router = useRouter();
    const [phone, setPhone] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [name, setName] = useState<string>();
    const [error, setError] = useState<string>();

    async function handleSubmit (e: any) {
        e.preventDefault();

        console.log(phone, password, name)
        try {
            await signIn("credentials", {
                phone,
                password,
                name,
                redirect: false
            })
            router.push("/")
        } catch (e) {
            setError("In valid credentials")
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="h-[65vh] flex w-[60vw] bg-[#000] rounded-xl shadow-2xl">
                <div className="w-[50%] bg-[#3c3146] rounded-l-xl p-6">
                    <h1 className="font-black text-[#d161c2] text-3xl text-center border-b border-[#9d7b9c] pb-5">Register</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col pt-3">
                        <label htmlFor="phone" className="pl-2">Phone</label>
                        <input type="number" name="phone" className=" outline-none opacity-50 z-10 p-1 text-[#fff] placeholder:text-slate-500 rounded-full mb-3 bg-[#53455f]"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            required/>

                        <label htmlFor="password" className="pl-2">Password</label>
                        <input type="password" name="password" className="outline-none opacity-50 rounded-full p-1 text-[#fff] placeholder:text-slate-500 mb-3 bg-[#53455f]"  
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required/>

                        <label htmlFor="name" className="pl-2">Username</label>
                        <input type="name" name="name" className="outline-none opacity-50 p-1 text-[#fff] placeholder:text-slate-500 rounded-full mb-3 bg-[#53455f]"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                />

                        <SpecialButton>SignUp</SpecialButton>
                    <div className="text-[#9e8faa] mt-8 text-center">
                        Already signed in?<Link href={"/signin"} className="text-[#6e98d8]">Signin</Link>
                    </div>
                    </form>
                </div>
                <div className="w-[50%] text-[#fff] italic bg-[#B7ACBF] rounded-r-xl font-black text-[30px] flex flex-col justify-center">
                    <div className="ml-10">
                    <h1>Welcome to</h1>
                    <h1>The payments App</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}