"use client"
import { useSession } from "next-auth/react";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { useState } from "react";

interface Appbar{
  user?: {
    name?: string | null
  },
  onSignin: any,
  onSignout: any,
  avatar?: string | undefined | null
}

export const AppBar = ({ user, onSignin, onSignout, avatar } : Appbar) => {
  const { data: session, status } = useSession();
  // const [open, setOpen] = useState(false);
  const username = session?.user?.name;
  const router = useRouter()
      // console.log(session, status)
  const handleProfile = () => {
    return router.push("/profile")
  }

  return (
    <>
    <ul className="flex  justify-between w-screen px-3 h-[70px] fixed z-50">
      <li className="text-3xl font-black text-[#fff] flex flex-col justify-center text-[#cac4ce]">
        <Link href={"/"}>CoinWallet</Link>
      </li>
      <li className="bg-[#b7acbf] w-[18%] h-[70%] zindex-100 hover:w-[30%] duration-700 font-bold text-lg rounded-[90px] flex items-center justify-end m-2 px-5 shadow-xl">
        {username && <div className="hover:scale-110 mr-5">
          <Bell />
        </div>}
        {username?.split(' ').at(0)}
        {/* {!username && <RotatingWords />} */}
        {!username && <div className="italic">Welcome</div>}
        {username && <div className="bg-[#000] w-[40px] h-[40px] rounded-full ml-4 hover:cursor-pointer" onClick={handleProfile}>
          {avatar && username && <img src={String(avatar)} alt="image" className="rounded-full border h-full w-full hover:scale-110 duration-200 border-[#000]" />}
          {!avatar && username && <div className="bg-[#ec3232] flex items-center justify-center text-lg p-1 h-full w-full border-2 text-[#fff] border-[#fff] rounded-full">{username?.substring(0, 2)}</div>}
        </div>}
      </li>
      <li className="flex justify-center">
          {!username && <Button onClick={() => router.push("/signin")}>Login</Button>}
          <Button onClick={user ? onSignin : onSignout} className={"m-2 rounded-[50px] border-2 boxShadow"}>{user ? "Logout" : "Register"}</Button>
      </li>
    </ul>
    {/* {open && <ul className="bg-[#000] absolute z-50 h-[20vh] w-[15vw] right-0 mt-10 mr-10 rounded-lg flex flex-col items-center justify-center space-y-2">
      <li className="text-[#fff]">Options</li>
      <li className="text-[#fff]">Logout</li>
    </ul>} */}
    </>
  );
};

function RotatingWords () {
  return <div className="Words">
    <span>Register</span>
    <span>Login</span>
    <span>New User</span>
    <span>😊</span>
    <span>😀</span>
  </div>
}

function Bell () {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
  </svg>
}
