import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Infinite Maya Labs",
  description: "Created by highly motivated Game developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="logo flex items-center select-none sticky">
              <Image src="/images/logo.png" width={100} height={100} ></Image>
              <a className="text-xl w-20 text-center font-bold resize items-center brand" href="/">Infinite Maya Labs</a>
            </div>
            <nav>
              <a href="/" className="px-4 rotating-border">Home</a>
              <a href="/games" className="px-4">Games</a>
              <a href="/about" className="px-4">About</a>
              <a href="/contact" className="px-1">Contact</a>
            </nav>
          </div>
        </header>
        {children}</body>
    </html>
  );
}
