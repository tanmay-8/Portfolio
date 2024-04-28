"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { revealVariant } from "@/utils/motion";
import skills from "@/utils/SkillData";
import Image from "next/image";
import Skill from "./Skill";

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
                <div key={skill.label}>
                    <Skill skill={skill}/>
                </div>
            ))}
        </motion.div>
    );
};

export default Skills;
