import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function AboutMe() {
    const age = new Date().getFullYear() - new Date('2001-05-15').getFullYear();
    return (
        <section id="aboutme" className="border bg-black-primary/50 p-5 rounded-lg">
            <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <img src="./src/assets/images/profile-picture.png" alt="Barbara Hellen - Profile Picture" className="h-full rounded-full border" />
                </div>
                <div className="flex flex-col justify-center-center">
                    <p className="text-xl font-bold">About Me</p>
                <small>{age} anos</small>
                </div>
            </div>
            <div className="flex flex-col gap-5 mt-4 text-sm">
                <p>Olá! Me chamo Barbara Hellen e atuo como desenvolvedora Front-End Pleno. Tenho mais de 5 anos de imersão no mundo da tecnologia e meu foco principal é a construção de interfaces modernas e escaláveis utilizando o ecossistema React.js, Next.js e TypeScript. Mas, apesar de o front-end ser minha grande paixão e especialidade, também tenho facilidade em transitar pelo back-end, tendo experiência com C# (.NET), ASP.NET MVC e Spring Boot.</p>
                <p>Minha jornada começou na ETEC Dra. Ruth Cardoso, lugar que me apresentou ao desenvolvimento web e me fez apaixonar de vez pela área. Para consolidar essa base, me formei como Tecnóloga em Sistemas para Internet pela Fatec Baixada Santista.</p>
                <p>Ao longo desses anos, amadureci profissionalmente e construí uma carreira sólida, evoluindo de estagiária até o nível Pleno. Essa trajetória me permitiu ir além da execução de tarefas: hoje participo do planejamento de arquiteturas, assumo a responsabilidade de ponta a ponta em projetos complexos.</p>
                <p>Sou movida por desafios tecnológicos, sempre buscando aplicar as melhores práticas em UI/UX, escrever código limpo e aprender algo novo a cada dia!</p>
            </div>
            <div className="flex gap-3 mt-5">
                <a title="Linkedin" href="https://www.linkedin.com/in/barbara-hellen-2a0864161/" target="_blank" rel="noopener noreferrer">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-6 "/>
                    </div>
                </a>
                <a title="GitHub" href="https://github.com/barbaragrinop" target="_blank" rel="noopener noreferrer">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center ">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-6 "/>
                    </div>
                </a>
                <a title="E-mail: dev.barbarahellen@gmail.com" href="mailto:dev.barbarahellen@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <FontAwesomeIcon icon={faEnvelope} color="#24252a" size="lg"/>
                    </div>
                </a>
                
            </div>
        </section>
    )
}
