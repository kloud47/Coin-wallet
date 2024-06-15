"use client"
import { AppBar } from "@repo/ui/app-bar"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AppbarClient(): JSX.Element {
    const session = useSession();
    const router = useRouter();
    return (
        <div className="text-2xl">
            <AppBar onSignin={signIn} onSignout={async () => {
                await signOut()
                router.push("/api/auth/signin")
            }} user={session.data?.user}></AppBar>
        </div>
    );
}