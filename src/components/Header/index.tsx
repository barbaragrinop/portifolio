import classNames from "classnames";
import { useState, useEffect } from "react";
import { Container } from "../Container";
import { Logo } from "../Logo";

type MenuItem = {
  name: string;
  link: string;
};

const MENU_ITEMS: MenuItem[] = [
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Detecta scroll para aumentar opacidade do blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detecta seção ativa via IntersectionObserver
  useEffect(() => {
    const sectionIds = MENU_ITEMS.map((item) => item.link.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 z-50 w-full h-16 lg:h-20 transition-all duration-300",
        scrolled
          ? "bg-black-primary/80 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-black-primary/60 backdrop-blur-sm"
      )}
    >
      <Container className="h-full flex items-center justify-between px-5">
        <Logo />

        {/* Navigation Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-light">
            {MENU_ITEMS.map((item) => {
              const sectionId = item.link.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={item.link}>
                  <a
                    href={item.link}
                    className={classNames(
                      "relative pb-1 transition-colors duration-200",
                      "after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all after:duration-300",
                      isActive
                        ? "text-pink-primary after:w-full after:bg-pink-primary"
                        : "text-grey-primary hover:text-pink-primary after:w-0 hover:after:w-full after:bg-pink-primary"
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Hamburguer Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="relative flex flex-col gap-1.5 md:hidden cursor-pointer z-50 focus:outline-none p-1"
        >
          <span
            className={classNames(
              "block w-5 h-0.5 bg-grey-primary transition-all duration-300 origin-center",
              { "rotate-45 translate-y-2": isMenuOpen }
            )}
          />
          <span
            className={classNames(
              "block w-5 h-0.5 bg-grey-primary transition-all duration-300",
              { "opacity-0 scale-x-0": isMenuOpen }
            )}
          />
          <span
            className={classNames(
              "block w-5 h-0.5 bg-grey-primary transition-all duration-300 origin-center",
              { "-rotate-45 -translate-y-2": isMenuOpen }
            )}
          />
        </button>

        {/* Mobile Dropdown */}
        <nav
          className={classNames(
            "fixed top-16 left-0 w-full bg-black-primary/95 backdrop-blur-md",
            "flex flex-col p-6 shadow-xl border-t border-white/5",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 visible pointer-events-auto translate-y-0"
              : "opacity-0 invisible pointer-events-none -translate-y-2"
          )}
        >
          <ul className="flex flex-col gap-5">
            {MENU_ITEMS.map((item) => {
              const sectionId = item.link.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={item.link}>
                  <a
                    href={item.link}
                    onClick={closeMenu}
                    className={classNames(
                      "block text-sm font-light transition-colors",
                      isActive ? "text-pink-primary" : "text-grey-primary hover:text-pink-primary"
                    )}
                  >
                    {isActive && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-primary mr-2 mb-0.5" />
                    )}
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

      </Container>
    </header>
  );
}
