"use client"
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export const SidebarItem = ({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname()
    const selected = pathname === href

    return <div className={`flex ${selected ? "text-[#f2b202] font-bold" : " text-purple-300"} w-[70%] mx-auto hover:bg-[#3E1D43] duration-300 rounded-full cursor-pointer  p-2 items-center`} onClick={() => {
        router.push(href);
    }}>
        <div className="mx-auto py-2">
            {icon}
        </div>
    </div>
}