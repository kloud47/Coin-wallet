"use client"
import React from "react";

export function Card({
  title,
  children,
  ClassName
}: {
  title?: string;
  children?: React.ReactNode;
  ClassName?: string
}): JSX.Element {
  return (
    <div
      className={`${ClassName} p-4 rounded-[55px] shadow-lg duration-500`}
    >
      <h1 className="text-2xl pl-2 pb-2 font-bold uppercase">
        {title}
      </h1>
      {children}
    </div>
  );
}