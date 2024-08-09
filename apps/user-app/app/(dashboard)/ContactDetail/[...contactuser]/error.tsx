"use client"
import { Button } from "@repo/ui/button"
import { useRouter } from "next/navigation"

export default function () {
    const router = useRouter()
    return (
        <div className="flex w-[90%] h-[50vh] text-[#e0dfdf] pb-3 CardBG-Error py-5 rounded-[50px] duration-500 shadow-lg">
            <div className="flex flex-col w-[90%] justify-center items-center">
            <h1 className="text-4xl font-bold">Can't find contact</h1>
            <Button onClick={(() => router.refresh())}
                className={"border w-[40%] border-[#35aab9] m-6 hover:bg-[#35aab9] hover:text-[#fff] text-[#35aab9]"}>Retry</Button>
            </div>
        </div>
    )
}