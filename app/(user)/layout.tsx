"use client";
import { Inter } from "next/font/google";
import Sidebar from "@/app/(user)/components/Sidebar";
import PrelineScript from "@/app/components/PrelineScript";
import { StoreProvider } from "../components/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Sidebar />
          {children}
        </StoreProvider>
      </body>
      <PrelineScript />
    </html>
  );
}
