"use client"
import Link from "next/link";
import { useSession } from "next-auth/react"
import { WavyBackground } from "../components/ui/wavy-background";
import { Button } from "@repo/ui/button";
import { ExternalLinkIcon, GithubIcon, Instagram, Twitter } from "lucide-react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";


export default function Page() {
  const words = [
    {
      text: "Your",
      className: "text-6xl font-bold text-[#f6cafc]"
    },
    {
      text: "trusted",
      className: "text-6xl font-bold text-[#f6cafc]"
    },
    {
      text: "Wallet",
      className: "font-black text-6xl text-[#e2d2a5]"
    }
  ]

  const session = useSession();
  // if (session?.user) {
  //   redirect('/dashboard')
  // } else {
  //   redirect('/api/auth/signin')
  // }
  return (
    <div className="h-screen w-screen">
        {/* <p className=" mx-auto text-[#bdbdbd] text-lg w-[30%] text-start font-thin">
          For fast wallet transactions and Keepiing track of expenditure, to loaning & splitting of bill.
          <span className="text-2xl font-medium text-[#ffe23c] block">Everything in one place.</span> 
        </p> */}
        <WavyBackground className="flex flex-col justify-center">
          <div className="mx-auto">
            {/* <h1 className="text-6xl font-bold text-[#f6cafc]">Your trusted <span className="font-black text-[#e2d2a5]">Wallet</span></h1> */}
            <TypewriterEffectSmooth words={words} />

          </div>
          <div className="flex items-center justify-center space-x-8">
            <Link href={`${session.data?.user ? "/dashboard" : "/signup"}`} className="scale-110 w-[200px] translate-y-[10vh] inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="px-5 py-2.5 w-full text-center text-lg lg:text-xl transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Go to Dash
              </span>
            </Link>
            <Button className={"z-10 bg-[#B752E3] hover:bg-[#773593] rounded-lg translate-y-[10vh]"}>Learn More<ExternalLinkIcon className="mx-1" /></Button>
          </div>
        </WavyBackground>
        <ul className="flex space-x-3 text-white absolute bottom-0 m-10">
          <li className="hover:scale-110 duration-200 cursor-pointer"><Instagram /></li>
          <li className="hover:scale-110 duration-200 cursor-pointer"><Twitter /></li>
          <li className="hover:scale-110 duration-200 cursor-pointer"><Link href={"https://github.com/kloud47/Coin-wallet"}><GithubIcon fill="white"/></Link></li>
        </ul>
        <div className="absolute bottom-0 text-center w-full mb-4 text-md font-thin text-[#fae3fa]"><span>Desigend & developed by - </span><span>Priyanshu Shukla</span></div>
      </div>
  )
  
}