"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode
  className?: any
  onClick?: any
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button className={`${className} ease:in duration-300 focus:outline-none font-medium text-[#fff] flex rounded-[50px] justify-center items-center text-xl px-5 py-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
