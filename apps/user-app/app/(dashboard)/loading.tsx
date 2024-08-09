"use client"
import Load from "../public/LoadingMain2.json"
import Lottie from "lottie-react";

export default function () {
    return <div className="flex items-center translate-x-[-50px] h-full justify-center w-full text-4xl text-[#ffff]">
        <Lottie loop={true} animationData={Load} />
    </div>
}