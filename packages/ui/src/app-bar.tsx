"use client"
import { Button } from "./button";

interface Appbar{
  user?: {
    name?: string | null
  },
  onSignin: any,
  onSignout: any
}

export const AppBar = ({ user, onSignin, onSignout } : Appbar) => {
  return (
    <ul className="flex justify-between border-b px-4 h-[70px]">
      <li className="text-2xl font-bold text-sky-600 flex flex-col justify-center">Coin</li>
      <li className="flex flex-col justify-center">
        <Button onClick={user ? onSignin : onSignout} className={"p-2"}>{user ? "Logout" : "Login"}</Button>
      </li>
    </ul>
  );
};
