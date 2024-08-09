"use client"
import { Button } from "@repo/ui/button"

export default function () {
    return <div className="flex justify-center items-center w-[70%] h-[50vh] font-Roboto CardBG-Error rounded-xl">
        <h1 className="text-2xl">Can't find transaction</h1>
        <Button>Retry</Button>
    </div>
}