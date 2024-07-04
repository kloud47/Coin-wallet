"use client"
import { Card } from "@repo/ui/card"
import { useSession } from "next-auth/react";
import QR from "../../public/QRcode.png"
import { useEffect, useState } from "react";
import { FetchProfile } from "../../lib/actions/ProfileFunc";
import { useRouter } from "next/navigation"
import { ModalProfile } from "../../../components/ProfileModal";

export default function () {
    const session = useSession();
    const phoneNo = session?.data?.user?.phone;
    const username = session?.data?.user?.name;
    const [imageUrl, setImageUrl] = useState<string | null | undefined>("")
    const [pop, setPop] = useState(false)
    const [openModal, setOpenModal] = useState(false);
    // console.log(session)
    useEffect(() => {
        const urlData = async () => {
            const data = await FetchProfile()
            console.log(data)
            setImageUrl(data)
        }
        urlData()
    }, [])
    console.log(imageUrl)
    const handleCopy = async () => {
        navigator.clipboard.writeText(String(phoneNo))
        setPop(true)
        setTimeout(() => {
            setPop(false)
        }, 1000);
    }
    // console.log(imageUrl)

    return (
        <div className="w-[80%]">
            {openModal && <ModalProfile user={username} imageUrl={imageUrl} Open={openModal} close={() => setOpenModal(false)}/>}
            <div className=" text-[#fff] pb-3 CardBG-Profile p-10 rounded-[50px] duration-500 shadow-lg">
                <div className="grid grid-cols-2 gap-x-4  gap-y-4">
                    <Card ClassName="bg-[#a89eaf] hover:translate-y-0 z-10">
                        <div className="flex flex-col items-center w-full">
                        {!imageUrl && <div className="bg-[#ec3232] flex items-center justify-center text-[80px] border-[5px] border-[#fff] rounded-full h-[200px] w-[200px]">{username?.substring(0, 2)}</div>}
                        {imageUrl && <img src={String(imageUrl)} alt="" className="border-[5px] border-[#fff] rounded-full h-[200px] w-[200px]"/>}
                        <button onClick={() => setOpenModal(true)}
                            className="bg-[#fff] h-[35px] relative bottom-[15px] w-[35px] text-[#000] rounded-full p-1 border-2 border-pink-400 hover:bg-slate-300">
                                <EditPic />
                        </button> 

                            <div className="flex flex-col items-center font-black text-2xl p-4">
                                <h1>{username}</h1>
                                <h2 className="flex items-center text-teal-900 ">
                                    CID - @{phoneNo} 
                                    <div className="text-teal-300">
                                        <button onClick={handleCopy}><Copy /></button>
                                    </div>
                                    {pop && <div className="mx-5 bg-teal-900 text-teal-300 p-1 rounded-md text-thin text-sm">Copied</div>}
                                </h2>
                            </div>
                        </div>
                    </Card>
                    <Card ClassName="bg-[#dde9f0] z-10">
                        <div className="flex flex-col items-center w-full">
                            <img src={QR.src} alt="QRcode" className="rounded-2xl h-[200px] w-[200px]" />
                            <button className="text-slate-600 border hover:bg-[#ccc6d1] border-teal-400 rounded-full p-2 mt-3">Share QR code</button>
                            <button className="text-slate-600 border hover:bg-[#ccc6d1] border-teal-400 rounded-full p-2 mt-3">Download QR</button>
                        </div>
                    </Card>
                    <Card ClassName="bg-[#f2f1f1] w-full col-span-2 z-10">
                        <div className="flex w-full border-white items-center justify-between pb-3 px-4">
                            <button className="text-slate-600 border-2 hover:bg-[#ccc6d1] border-teal-400 rounded-full w-[200px] p-2 mr-2 mt-3">Add Bank Account</button>
                            <button className="text-slate-600 border-2 hover:bg-[#ccc6d1] border-teal-400 rounded-full w-[200px] p-2 mt-3">Reset UPI Pin</button>
                            <button className="text-slate-600 border-2 hover:bg-[#ccc6d1] border-teal-400 rounded-full w-[200px] p-2 mt-3">Change UPI ID</button>
                            <button className="text-slate-600 border-2 hover:bg-[#ccc6d1] border-teal-400 rounded-full w-[200px] p-2 mt-3">Change Language</button>
                        </div>
                    </Card>
                </div>
                <div className="grid grid-cols-4 gap-x-4  gap-y-4 mt-3 z-10">
                    <Card ClassName="bg-[#fff] w-full rounded-lg hover:translate-y-[2px]">
                        <div className="flex flex-col w-full border-white gap-2 items-center pb-3 px-4 text-[#000]">
                            <Help />
                            <h1>Help & Support</h1>
                            <p className="text-xs text-slate-400 text-center">
                                Customer Support, Your Queries, Frequently Asked Questions
                            </p>
                        </div>
                    </Card>
                    <Card ClassName="bg-[#fff] w-full rounded-lg z-10 hover:translate-y-[2px]">
                        <div className="flex flex-col w-full border-white gap-2 items-center pb-3 px-4 text-[#000]">
                            <UPISetting />
                            <h1 className="text-center">UPI & Payments Settings</h1>
                            <p className="text-xs text-slate-400 text-center">
                                Customer Support, Your Queries, Frequently Asked Questions
                            </p>
                        </div>
                    </Card>
                    <Card ClassName="bg-[#fff] w-full rounded-lg z-10 hover:translate-y-[2px]">
                        <div className="flex flex-col w-full border-white gap-2 items-center pb-3 px-4 text-[#000]">
                            <WalletSetting />
                            <h1>Wallet Options</h1>
                            <p className="text-xs text-slate-400 text-center">
                                Customer Support, Your Queries, Frequently Asked Questions
                            </p>
                        </div>
                    </Card>
                    <Card ClassName="bg-[#fff] w-full rounded-lg z-10 hover:translate-y-[2px]">
                        <div className="flex flex-col w-full border-white gap-2 items-center pb-3 px-4 text-[#000]">
                            <ProfileChange />
                            <h1>Profile Settings</h1>
                            <p className="text-xs text-slate-400 text-center">
                                Customer Support, Your Queries, Frequently Asked Questions
                            </p>
                        </div>
                    </Card>
                </div>
                    <div className="text-[#718183] font-thin text-center m-10">
                        Terms & Conditions, Privacy policy,
                        Grievance, Redressal Mechanism, 
                        <a href="#" className="text-[#5ea0f0]">See all policies</a>
                    </div>
            </div>
        </div>
    )
}


function ProfileChange () {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
}

function Help () {
    return<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>  
}

function Guide () {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>  
}

function UPISetting () {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg> 
}

function WalletSetting () {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
    </svg>  
}

function Copy () {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
    </svg> 
}

function EditPic () {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
    </svg>   
}