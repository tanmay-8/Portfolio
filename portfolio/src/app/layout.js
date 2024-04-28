import { Inter } from "next/font/google";
import "./globals.css";
import StarBgCanvas from "@/components/StarBg";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Tanmay Shingde | Web Developer",
    description: "I'm a web developer based in India. I build websites and web applications. I specialize in MERN, Next.js, and Tailwind CSS . Also good in competitive programming and problem solving.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} overflow-y-scroll overflow-x-hidden bg-[#030014]`}
            >
                <StarBgCanvas />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
