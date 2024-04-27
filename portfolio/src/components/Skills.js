"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { revealVariant } from "@/utils/motion";
import skills from "@/utils/SkillData";
import Image from "next/image";

const Skills = () => {
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
            variants={revealVariant}
            initial="hidden"
            animate={control}
            className="w-5/6  lg:w-4/6 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 z-[50] gap-12 md:gap-20 py-32"
            id="skills"
        >
            {skills.map((skill) => (
                <div
                    className="bg-white/10
                backdrop-blur-[10px]  mx-auto p-4 items-center justify-center flex w-28 h-28 md:w-32 md:h-32  border-2 rounded-full border-purple-800 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#8a2be2,0_0_15px_#8a2be2,0_0_30px_#8a2be2]"
                >
                    <Image
                        height={70}
                        src={skill.img}
                        alt={skill.label}
                    ></Image>
                </div>
            ))}
        </motion.div>
    );
};

export default Skills;
