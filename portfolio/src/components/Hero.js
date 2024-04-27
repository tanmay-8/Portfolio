import React from "react";
import HeroContent from "./HeroContent";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full min-h-screen  px-10 md:px-20 py-32 pt-48 z-[20]" id="aboutMe">
            <HeroContent />
        </div>
    );
};

export default Hero;
