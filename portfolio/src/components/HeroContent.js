"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import HeroImg from "@/assets/hero.png";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col-reverse md:flex-row items-center justify-center w gap-5"
        >
            <div className="h-full text-center w-full flex flex-col gap-5 justify-center m-auto md:text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="py-[8px] px-[10px] w-fit bg-slate-50/10 rounded-[30px] border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0"
                >
                    <h1 className="text-slate-50 text-[13px]">
                        Fullstack Web Developer
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(1)}
                    className="flex flex-col gap-6 mt-3 text-4xl md:text-6xl font-bold text-white w-auto h-auto"
                >
                    <span>
                        Bridging
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            creativity and functionality{" "}
                        </span>
                        through web development
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(1.2)}
                    className="text-lg text-gray-400 my-2 ml-3 max-w-[600px]"
                >
                    Hello, I'm a Full Stack Web Developer with experience in
                    building websites from start to finish. Dive into my
                    portfolio to explore my expertise in website development and
                    everything in between.
                </motion.p>
            </div>

            <motion.div
                variants={slideInFromRight(1.5)}
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src={HeroImg}
                    alt="work icons"
                    height={550}
                    width={550}
                    className=" duration-100"
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
