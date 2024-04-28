import { Github, Globe } from "lucide-react";
import Image from "next/image";
import React from "react";

const Project = ({ project }) => {
    return (
        <div className="flex flex-col w-[330px] mx-auto p-6 border-2 rounded-[10px] z-[40] bg-white/5 border-purple-800 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#8a2be2,0_0_10px_#8a2be2,0_0_20px_#8a2be2]">
            <Image src={project.image} alt={project.title} className=""></Image>
            <div className="relative py-4">
                <h1 className="text-2xl font-semibold text-white">
                    {project.title}
                </h1>
                <p className="mt-2 text-gray-300">
                    Stack : {project.techStack.join(", ")}
                </p>
                <p className="mt-2 text-gray-300">{project.description}</p>
            </div>
            <div className="flex gap-6">
                <a href={project.githubLink} target="_blank">
                    <Github
                        size={32}
                        color="white"
                        className="cursor-pointer transition-all hover:scale-105"
                    />
                </a>
                <a href={project.liveLink} target="_blank">
                    <Globe
                        size={32}
                        color="white"
                        className="cursor-pointer transition-all hover:scale-105"
                    />
                </a>
            </div>
        </div>
    );
};

export default Project;
