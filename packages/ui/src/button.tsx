"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode
  className: any
  onClick: any
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="hover:text-white hover:bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
