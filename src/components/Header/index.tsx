import classNames from "classnames";
import { useState } from "react";

type MenuItem = {
  name: string;
  link: string;
}

const menuItens: MenuItem[] = [
    {
      name: "home",
      link: "#about"
    }, 
    {
      name: "about me",
      link: "#aboutme"
    }, 
    {
      name: "works",
      link: "#works", 
    },
    {
      name: "projects",
      link: "#projects"
    },  
    {
      name: "contact me",
      link: "#contact"
    }
]


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className="py-2 fixed shadow-2xs z-50 top-0 left-0 bg-grey-primary px-5 flex flex-row w-full items-center justify-between" >
      <strong className="font-lato text-grey-tertiary text-lg ">bhellen</strong>
      <div className="hidden w-100 text-black-primary font-light gap-7 font-roboto-condensed
       text-sm items-center">
        {menuItens.map((item, index) => (
          <div className="" key={index}>
            <a href={item.link}>{item.name}</a>
          </div>
        ))}
      </div>
      {/* menu mobile */}
      <div className={`fixed top-10 left-0 w-full bg-grey-primary flex flex-col gap-4 p-5 transition-all ${isMenuOpen ? "block" : "hidden"}`}>
        {menuItens.map((item, index) => (
          <div key={index}>
            <a href={item.link} onClick={closeMenu} className="text-black-primary font-light text-sm">
              {item.name}
            </a>
          </div>
        ))}
      </div>
      {/* menu hamburger com efeito */}
      <div onClick={toggleMenu} className="relative md:hidden cursor-pointer flex flex-col gap-1 z-50">
        <div className={classNames(
          "w-5 h-0.5 bg-grey-tertiary transition-all duration-300",
          {
            "rotate-45 translate-y-1.5": isMenuOpen,
          }
        )}></div>
        
        <div className={classNames(
          "w-5 h-0.5 bg-grey-tertiary transition-all duration-300",
          {
            "opacity-0": isMenuOpen, 
          }
        )}></div>
        
        <div className={classNames(
          "w-5 h-0.5 bg-grey-tertiary transition-all duration-300",
          {            
            "-rotate-45 -translate-y-1.5": isMenuOpen,
          }
        )}></div>
      </div>
    </div>
  )
}
