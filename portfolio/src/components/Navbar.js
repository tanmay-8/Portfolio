"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { HamIcon, MenuIcon, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        document
            .getElementById("nav-drawer")
            .classList.toggle("-translate-y-[400px]");
        let prev = isMenuOpen;
        setIsMenuOpen(!prev);
    };
    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView(true,{behavior:'smooth',block:"end"})
    };
    return (
        <motion.div initial="hidden" animate="visible">
            <motion.div className="w-full py-5 px-6 fixed top-0 shadow-md shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 md:px-6 lg:px-20">
                <div className="hidden md:flex items-center justify-center  md:space-x-16 lg:space-x-36 text-white text-lg">
                    <motion.div
                        variants={slideInFromTop}
                        onClick={() => {
                            scrollTo("aboutMe");
                        }}
                    >
                        <span className="text-slate-300 hover:text-indigo-500 transition-all cursor-pointer font-medium">
                            About me
                        </span>
                    </motion.div>
                    <motion.div
                        variants={slideInFromTop}
                        onClick={() => {
                            scrollTo("skills");
                        }}
                    >
                        <span className="text-slate-300 hover:text-indigo-500 transition-all cursor-pointer font-medium">
                            Skills
                        </span>
                    </motion.div>
                    <motion.div
                        className="font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,#2A0E61,theme(colors.indigo.400),theme(colors.indigo.800),theme(colors.purple.800))] bg-[length:200%_auto] animate-gradient font-logo text-5xl drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-[#4e387c]"
                        variants={slideInFromTop}
                    >
                        <span className="">T</span>
                        <span className="-ml-3 -mb-3">S</span>
                    </motion.div>
                    <motion.div
                        variants={slideInFromTop}
                        onClick={() => {
                            scrollTo("projects");
                        }}
                    >
                        <span className="text-slate-300 hover:text-indigo-500 transition-all cursor-pointer font-medium">
                            Projects
                        </span>
                    </motion.div>
                    <motion.div
                        variants={slideInFromTop}
                        onClick={() => {
                            scrollTo("contact");
                        }}
                    >
                        <span className="text-slate-300 hover:text-indigo-500 transition-all cursor-pointer font-medium">
                            Contact
                        </span>
                    </motion.div>
                </div>
                <div className="md:hidden flex justify-between items-center">
                    <motion.div
                        className="font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,#2A0E61,theme(colors.indigo.400),theme(colors.indigo.800),theme(colors.purple.800))] bg-[length:200%_auto] animate-gradient font-logo text-5xl drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-[#4e387c]"
                        variants={slideInFromTop}
                    >
                        <span className="">T</span>
                        <span className="-ml-3 -mb-3">S</span>
                    </motion.div>
                    <motion.div
                        className="w-fit h-full flex justify-center items-center cursor-pointer transition-all"
                        variants={slideInFromTop}
                        onClick={() => {
                            toggleMenu();
                        }}
                    >
                        {!isMenuOpen ? (
                            <MenuIcon size={40} color="#461f99" />
                        ) : (
                            <X size={40} color="#461f99" />
                        )}
                    </motion.div>
                </div>
            </motion.div>

            <div
                id="nav-drawer"
                className="transition-all duration-400 text-white fixed w-full bg-[#03001417] 
                backdrop-blur-[10px] z-50 top-[5.5rem] left-0 p-6 text-center space-y-6 text-lg shadow-md shadow-[#2A0E61]/50 -translate-y-[400px]"
            >
                <div
                    variants={slideInFromTop}
                    onClick={() => {
                        scrollTo("aboutMe");
                    }}
                >
                    <span className="text-slate-300 hover:text-indigo-500 transition-all cursor-pointer font-medium">
                        About me
                    </span>
                </div>
                <div
                    variants={slideInFromTop}
                    onClick={() => {
                        scrollTo("skills");
                    }}
                >
                    <span className="text-slate-300 hover:text-indigo-500 transition-all cursor-pointer font-medium">
                        Skills
                    </span>
                </div>
                <div
                    variants={slideInFromTop}
                    onClick={() => {
                        scrollTo("projects");
                    }}
                >
                    <span className="text-slate-300 hover:text-indigo-500 transition-all cursor-pointer font-medium">
                        Projects
                    </span>
                </div>
                <div
                    variants={slideInFromTop}
                    onClick={() => {
                        scrollTo("contact");
                    }}
                >
                    <span className="text-slate-300 hover:text-indigo-500 transition-all cursor-pointer font-medium">
                        Contact
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default Navbar;
