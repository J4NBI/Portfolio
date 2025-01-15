import type { Metadata } from "next";
import {Inter, Calistoga, Poppins, IBM_Plex_Serif } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import "./globals.css";

const inter = Inter({subsets: ['latin'], variable: "--font-sans"})
const ibm = IBM_Plex_Serif({subsets: ['latin'], variable: '--font-serif', weight:['600']}) 

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" e>
      <body className={twMerge(inter.variable, ibm.variable, "bg-gray-900 text-white antialiased font-sans")}>
        {children}
      </body>
    </html>
  );
}
