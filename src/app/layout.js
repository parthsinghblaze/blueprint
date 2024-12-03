import localFont from "next/font/local";
import "./globals.css";
import {NavLinks} from "./ui/nav-links";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <div className="flex h-screen">
            <NavLinks/>
            <div className="flex-1 bg-gray-100 p-8">
                {children}
            </div>
        </div>
        </body>
        </html>
    );
}
