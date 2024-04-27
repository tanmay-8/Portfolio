import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
const page = () => {
    return (
        <main className="h-full w-full">
            <div className="space-y-20">
                <Hero />    
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
        </main>
    );
};

export default page;
