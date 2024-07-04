"use client"
import { AppBar } from "@repo/ui/app-bar"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FetchProfile } from "./app/lib/actions/ProfileFunc";
import { browser } from "process";

export default function AppbarClient(): JSX.Element {
    const session = useSession();
    const username = session.data?.user
    const router = useRouter();

    const [imageUrl, setImageUrl] = useState<string | null | undefined>()
    // console.log(session)
    useEffect(() => {
        const urlData = async () => {
            const data = await FetchProfile()
            console.log(data)
            setImageUrl(data)
        }
        urlData()
    }, [username])

    return (
        <div className="text-2xl">
            <AppBar avatar={imageUrl}
                onSignin={signIn} onSignout={async () => {
                await signOut()
                router.push("/api/auth/signin")
            }} user={username}></AppBar>
        </div>
    );
}