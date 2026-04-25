import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myselfImage from "../../assets/myself-pixelart.svg?url";

import { skills } from "../../data/skills";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
    return (
        <section className="h-screen relative ">
            <div className="absolute top-0 right-0 w-108 h-80 rounded-b-full bg-grey-primary"></div>
            <div className="flex px-5 pt-28 justify-evenly gap-28 ">
               <div className="flex flex-col gap-10">
                     <div className=" relative z-20">
                        <p className="font-open-sans text-1xl text-[#676565bd] font-bold">I'm Barbara </p>
                        <p className="font-open-sans text-3xl text-pink-primary font-bold">Frontend Developer</p>
                        <p className="font-open-sans font-bold text-[#676565bd] text-1xl">with back-end experience </p>
                    </div>
                    <div className="gap-20 z-30 hidden">
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
                    <img  src={myselfImage} alt="myself" className="w-60 z-20 hidden" />
               </div>
            </div>
            
            <i className="animate-bounce absolute bottom-20 left-1/2 transform -translate-x-1/2 text-2xl rounded-full ">
                <a href="#aboutme" className=" duration-300 text-pink-primary">
                    <FontAwesomeIcon icon={faArrowAltCircleDown} size="xl" />
                </a>
            </i>

        </section>
    )
}