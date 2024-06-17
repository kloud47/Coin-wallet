"use client"
import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className="border p-4 bg-[#bababa] rounded-b-[55px] shadow-md hover:scale-y-[1.03] hover:translate-y-[5px] duration-500"
    >
      <h1 className="text-xl border-b pb-2 font-bold">
        {title}
      </h1>
      {children}
    </div>
  );
}