"use client"
import { useSession } from "next-auth/react";
import { Button } from "./button";

interface Appbar{
  user?: {
    name?: string | null
  },
  onSignin: any,
  onSignout: any,
  LOGO: any
}

export const AppBar = ({ user, onSignin, onSignout, LOGO } : Appbar) => {
  const { data: session, status } = useSession();
      console.log(session, status)
  return (
    <ul className="flex justify-between  px-4 h-[70px] rounded-b-[20px]">
      <li className="text-3xl font-bold text-[#fff] flex flex-col justify-center">
        {/* <img src={LOGO.src} alt="LOGO" className="h-[60px] rounded-xl" /> */}
        CoinWallet
      </li>
      <li className="bg-[#b7acbf] w-[20%] h-[70%] hover:w-[30%] duration-500 text-lg rounded-[90px] flex items-center justify-end m-2 px-10 shadow-lg ">
        {session?.user?.name}
        <div className="bg-[#000] w-[40px] h-[40px] rounded-full mx-6"></div>
      </li>
      <li className="flex flex-col justify-center">
          <Button onClick={user ? onSignin : onSignout} className={"m-2 rounded-[50px] border boxShadow"}>{user ? "Logout" : "Login"}</Button>
      </li>
    </ul>
  );
};
