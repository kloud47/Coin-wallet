"use client"
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
  return (
    <ul className="flex bg-[#fff] justify-between border-b shadow-md px-4 h-[70px] rounded-b-[20px]">
      <li className="text-2xl font-bold text-sky-600 flex flex-col justify-center">
        <img src={LOGO.src} alt="LOGO" className="h-[60px] rounded-xl" />
      </li>
      <li className="flex flex-col justify-center">
        <Button onClick={user ? onSignin : onSignout} className={"p-2 hover:text-white hover:bg-gray-800"}>{user ? "Logout" : "Login"}</Button>
      </li>
    </ul>
  );
};
