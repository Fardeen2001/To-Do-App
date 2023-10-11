"use client";
import NavBar from "@/Components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "../ReduxStore/Provider";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "To-Do App",
  description: "To-Do App to track your daily todo's",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
