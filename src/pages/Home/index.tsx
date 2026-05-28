import myselfImage from "../../assets/myself-pixelart.svg?url";
import { skills } from "../../data/skills";
import { Container } from "../../components/Container";

export default function Home() {
  return (
    <section id="home" className="min-h-screen relative bg-black-primary flex flex-col">
      <Container className="flex-1 flex flex-col justify-center pt-20 pb-16 px-5">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* texto + skills + CTAs */}
          <div className="flex flex-col gap-8 text-center lg:text-left order-2 lg:order-1">

            {/* título */}
            <div className="space-y-2">
              <p className="text-grey-primary font-light text-sm tracking-widest uppercase">
                welcome, I'm Barbara
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-pink-primary font-bold leading-tight">
                Frontend<br className="hidden lg:block" /> Developer
              </h1>
              <p className="text-grey-primary text-sm md:text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
                Crafting modern, scalable interfaces with React, Next.js &amp; TypeScript.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-pink-primary text-white text-sm font-medium rounded-lg
                           hover:bg-pink-primary/80 transition-all duration-200 hover:-translate-y-0.5"
              >
                Ver projetos
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 border border-pink-primary/40 text-pink-primary text-sm font-medium rounded-lg
                           hover:bg-pink-primary/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                Fale comigo
              </a>
            </div>

            {/* Tech stack */}
            <div>
              <p className="text-xs text-grey-primary/50 uppercase tracking-widest mb-3 text-center lg:text-left">
                tech stack
              </p>
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                {skills.map((skill) => (
                  <a
                    key={skill.name}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={skill.name}
                    className="bg-grey-primary/10 border border-white/5 rounded-lg
                               flex items-center justify-center h-11 w-11
                               hover:scale-110 hover:border-pink-primary/30 hover:bg-pink-primary/5
                               transition-all duration-200"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Direita: avatar */}
          <div className="flex items-end justify-center order-1 lg:order-2 relative">
            {/* Halo decorativo atrás do avatar */}
            <div className="absolute bottom-0 w-64 h-64 rounded-full bg-pink-primary/25 blur-lg" />
            <img
              src={myselfImage}
              alt="Barbara Hellen — pixel art"
              className="relative w-56 md:w-72 lg:w-80 object-contain drop-shadow-xl"
            />
          </div>

        </div>
      </Container>

      {/* Scroll hint */}
      <div className="pb-8 flex justify-center">
        <a
          href="#aboutme"
          aria-label="Scroll para About me"
          className="animate-bounce text-pink-primary hover:opacity-70 transition-opacity"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l4 4 4-4" />
          </svg>
        </a>
      </div>
    </section>
  );
}
