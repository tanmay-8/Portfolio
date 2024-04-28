"use client";
import React from "react";
import projectData from "@/utils/ProjectData";
import Project from "./Project";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { revealVariant } from "@/utils/motion";

const Projects = () => {
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
            className="z-[50] py-40 pt-40 grid grid-cols-1 grid-flow-row-dense md:grid-cols-2 lg:grid-cols-2 gap-20 place-content-center mx-auto"
            id="projects"
        >
            {projectData.map((project) => {
                return <Project key={project.title} project={project} />;
            })}
        </motion.div>
    );
};

export default Projects;
