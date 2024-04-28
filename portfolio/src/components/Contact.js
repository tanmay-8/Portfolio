"use client";
import React from "react";
import Footer from "./Footer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { revealVariant } from "@/utils/motion";

const Contact = () => {
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
            className="pt-20 pb-8 px-6 md:px-20 z-[50]"
        >
            <Footer />
        </motion.div>
    );
};

export default Contact;
