import type { Metadata } from "next";
import "./globals.css";
import Providers  from "../provider";
import AppbarClient from "../AppbarClient";

export const metadata: Metadata = {
  title: "CoinWallet",
  description: "Fast and reliable transactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-w-screen min-h-screen bg-[#3C3C3C]">
        <Providers>
          <AppbarClient />
          {children}
        </Providers>
      </body>
    </html>
  );
}
