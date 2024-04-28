"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import HeroImg from "@/assets/hero.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { revealVariant2 } from "@/utils/motion";
import { GithubIcon, Linkedin, Mail } from "lucide-react";

const HeroContent = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);
    return (
        <motion.div
            ref={ref}
            variants={revealVariant2}
            initial="hidden"
            animate={control}
            // initial="hidden"
            // animate="visible"
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
                    variants={slideInFromLeft(0.4)}
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
                    variants={slideInFromLeft(0.6)}
                    className="text-lg text-gray-400 my-2 ml-3 max-w-[600px]"
                >
                    Hello, I'm a Full Stack Web Developer with experience in
                    building websites from start to finish. Dive into my
                    portfolio to explore my expertise in website development and
                    everything in between.
                </motion.p>

                <motion.div
                    variants={slideInFromLeft(0.6)}
                    className="flex space-x-8 justify-center md:justify-start px-4"
                >
                    <a
                        className="bg-white/10 p-4 rounded-full cursor-pointer tansition-all duration-200 ease-in-out hover:bg-white/15 hover:border-purple-800 hover:shadow-[0_0_2px_#fff,inset_0_0_1px_#fff,0_0_3px_#8a2be2,0_0_5px_#8a2be2,0_0_10px_#8a2be2]"
                        href="https://github.com/tanmay-8"
                        target="_blank"
                    >
                        <GithubIcon size={28} color="white" />
                    </a>
                    <a
                        className="bg-white/10 p-4 rounded-full cursor-pointer tansition-all duration-200 ease-in-out hover:bg-white/15 hover:border-purple-800 hover:shadow-[0_0_2px_#fff,inset_0_0_1px_#fff,0_0_3px_#8a2be2,0_0_5px_#8a2be2,0_0_10px_#8a2be2]"
                        href="https://www.linkedin.com/in/tanmay-shingde-6084ab250/"
                        target="_blank"
                    >
                        <Linkedin size={28} color="white" />
                    </a>
                    <a
                        className="bg-white/10 p-4 rounded-full cursor-pointer tansition-all duration-200 ease-in-out hover:bg-white/15 hover:border-purple-800 hover:shadow-[0_0_2px_#fff,inset_0_0_1px_#fff,0_0_3px_#8a2be2,0_0_5px_#8a2be2,0_0_10px_#8a2be2]"
                        href="mailto:tanmayshingde8@gmail.com"
                        target="_blank"
                    >
                        <Mail size={28} color="white" />
                    </a>
                </motion.div>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
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
