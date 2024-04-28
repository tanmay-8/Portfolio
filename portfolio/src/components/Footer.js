import { Github, Linkedin, Mail, TwitterIcon } from "lucide-react";
import React from "react";


const Footer = () => {


    return (
        <div className="w-full h-full bg-white/5 rounded-lg text-gray-200 shadow-lg p-[15px] z-[40]">
            <div className="py-4 pt-8 text-[15px] text-center">
                &copy; Tanmay Shingde {new Date().getFullYear()} Inc. All rights
                reserved
            </div>
        </div>
    );
};

export default Footer;
