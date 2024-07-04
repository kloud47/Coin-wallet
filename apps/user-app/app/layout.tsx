import type { Metadata } from "next";
import "./globals.css";
import Providers  from "../provider";
import AppbarClient from "../AppbarClient";
import { Inter, Poppins, Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: "--roboto",
  style: "normal",
  weight: ["500", "700", "900"]
})

const inter = Inter({
  subsets: ['latin'],
  variable: "--inter"
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: "--poppins",
  weight: ["400", "600", "700"]
})

export const metadata: Metadata = {
  title: "CoinWallet",
  description: "Fast and reliable transactions",
  icons: {
    icon: "./favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable, poppins.variable, roboto.variable} min-w-screen min-h-screen backgroundApp no-scrollbar`}>
        <Providers>
          <AppbarClient />
          <div id="portal"></div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
