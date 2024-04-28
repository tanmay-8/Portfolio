import React from "react";
import Image from "next/image";

const Skill = ({skill}) => {
    return (
        <div
            className="bg-white/10
                backdrop-blur-[10px]  mx-auto p-4 items-center justify-center flex w-28 h-28 md:w-32 md:h-32  border-2 rounded-full border-purple-800 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#8a2be2,0_0_15px_#8a2be2,0_0_30px_#8a2be2]"
            key={skill.label}
        >
            <Image height={70} src={skill.img} alt={skill.label}></Image>
        </div>
    );
};

export default Skill;
