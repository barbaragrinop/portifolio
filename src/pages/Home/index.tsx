import myselfImage from "../../assets/myself-pixelart.svg?url";

import { skills } from "../../data/skills";
export default function Home() {
    return (
        <section className="h-screen relative w-full ">
            <div className="absolute top-0 right-0 w-108 h-80 rounded-b-full bg-grey-primary"></div>
            <div className="flex  pt-32 justify-evenly gap-28 ">
               <div className="flex flex-col gap-10">
                     <div className="pl-10 relative z-20">
                        <p className="font-open-sans text-4xl text-pink-primary font-bold">Software Engineer</p>
                        <p className="font-open-sans font-bold text-4xl">based in São Paulo.</p>
                    </div>
                    <div className="flex gap-20 z-30">
                        <div className="grid grid-cols-12 pl-10 gap-y-4 gap-x-2 mt-10">
                            {skills.map((skill) => (
                                <a href={skill.link} target="_blank" rel="noopener noreferrer" className="col-span-2 bg-grey-primary cursor-pointer rounded-lg flex items-center justify-center h-14 w-14">
                                    <img src={skill.icon} alt={skill.name} className="w-10" />
                                </a>
                            ))}
                        </div>
                    </div>
               </div>
               <div>
                    <img  src={myselfImage} alt="myself" className="w-60 z-20 relative" />
               </div>
            </div>
        </section>
    )
}