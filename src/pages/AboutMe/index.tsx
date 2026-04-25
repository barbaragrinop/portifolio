import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function AboutMe() {
  return (
    <section id="aboutme" className="border bg-black-primary/50 p-5 rounded-lg">
        <div className="flex gap-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/en/5/5c/Mario_by_Shigehisa_Nakaue.png" alt="Mario" className="h-8" />
            </div>
            <span className="text-xl font-bold">About Me</span>
        </div>
        <div className="flex flex-col gap-5 mt-4 text-sm">
            <p>Olá! Me chamo Barbara Hellen e atuo como desenvolvedora Front-End Pleno. Tenho mais de 5 anos de imersão no mundo da tecnologia e meu foco principal é a construção de interfaces modernas e escaláveis utilizando o ecossistema React.js, Next.js e TypeScript. Mas, apesar de o front-end ser minha grande paixão e especialidade, também tenho facilidade em transitar pelo back-end, tendo experiência com C# (.NET), ASP.NET MVC e Spring Boot.</p>
            <p>Minha jornada começou na ETEC Dra. Ruth Cardoso, lugar que me apresentou ao desenvolvimento web e me fez apaixonar de vez pela área. Para consolidar essa base, me formei como Tecnóloga em Sistemas para Internet pela Fatec Baixada Santista.</p>
            <p>Ao longo desses anos, amadureci profissionalmente e construí uma carreira sólida, evoluindo de estagiária até o nível Pleno. Essa trajetória me permitiu ir além da execução de tarefas: hoje participo do planejamento de arquiteturas, assumo a responsabilidade de ponta a ponta em projetos complexos.</p>
            <p>Sou movida por desafios tecnológicos, sempre buscando aplicar as melhores práticas em UI/UX, escrever código limpo e aprender algo novo a cada dia!</p>
        </div>
        <div className="flex gap-3 mt-5">
            <a title="Linkedin" href="http://https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-6 "/>
                </div>
            </a>
            <a title="GitHub" href="http://https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center ">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-6 "/>
                </div>
            </a>
            <a title="E-mail" href="http://https://cdn.jsdelivr.net/gh/devicons/devicon/icons/email/email-original.svg" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} color="#24252a" size="lg"/>
                </div>
            </a>
        </div>
    </section>
  )
}
