import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Student attendance Management",
  description: "Student attendance management ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200/50">
        {children}
      </body>
    </html>
  );
}
