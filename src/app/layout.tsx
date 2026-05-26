import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background3D from "@/components/Background3D";

import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Creative Developer | Portfolio",
  description: "A high-end scrollytelling personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative md:cursor-none">
        <CustomCursor />
        <Background3D />
        {children}
      </body>
    </html>
  );
}
