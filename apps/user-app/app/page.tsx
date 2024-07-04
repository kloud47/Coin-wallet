"use client"
import Link from "next/link";
import { useSession } from "next-auth/react"


export default function Page() {
  const session = useSession();
  // if (session?.user) {
  //   redirect('/dashboard')
  // } else {
  //   redirect('/api/auth/signin')
  // }
  return (
    <div className="h-screen w-screen">
        Hello
        {/* <Button className={" bg-[#FFF] w-[100px]"}>Get Started</Button> */}
        <Link href={`${session.data?.user ? "/dashboard" : "/signup"}`} className="translate-y-[55vh] translate-x-[44vw] inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Go to Dash
          </span>
        </Link>
      </div>
  )
  
}