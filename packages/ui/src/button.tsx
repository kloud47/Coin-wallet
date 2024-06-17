"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode
  className?: any
  onClick: any
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button className={`${className} ease:in duration-500 focus:outline-none font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
