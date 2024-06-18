"use client"
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SidebarItem = ({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname()
    const selected = pathname === href

    return <div className={`flex ${selected ? "text-[#fcf00f]" : "text-[#fff]"} hover:bg-[#000] duration-500 hover:scale-110 duration-500 rounded-r-xl cursor-pointer  p-2 pl-8 flex items-center`} onClick={() => {
        router.push(href);
    }}>
        <div className="p-2 ">
            {icon}
        </div>
        <div className={`font-bold ${selected ? "text-[#fcf00f]" : "text-[#fff]"} duration-500 hover:opacity-100 opacity-0 ml-2`}>
            {title}
        </div>
    </div>
}