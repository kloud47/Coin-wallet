"use client"
import { RecoilRoot } from "recoil"
import { SessionProvider } from "next-auth/react"
import React from "react"

export default function  Providers({ children }: {children : React.ReactNode} ) {
    return (
        <RecoilRoot>
            <SessionProvider>
                {children}
            </SessionProvider>
        </RecoilRoot>
    )
}