import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMediaData } from "../../data/social-media";

export default function AboutMe() {
    return (
        <section id="aboutme" className="flex flex-col gap-5 text-center px-8 border bg-black-primary/50 p-5 rounded-lg">
            <div className="flex flex-col gap-4 items-center">
                <div className="flex gap-1 justify-center-center">
                    <span className="text-2xl font-bold">about</span>
                    <span className="text-2xl font-bold text-pink-primary">me.</span>
                </div>
                <div className="w-28 h-2w-28 bg-white rounded-full flex items-center justify-center">
                    <img src="./src/assets/images/profile-picture.png" alt="Barbara Hellen - Profile Picture" className="h-full rounded-full border" />
                </div>
                <div className="flex gap-3 mt-5">
                    {socialMediaData.map(({title, href, icon}) => (
                        <a title={title} href={href} target="_blank" rel="noopener noreferrer">
                            <div className="w-8 h-8 bg-pink-primary rounded-lg flex items-center justify-center">
                                <FontAwesomeIcon icon={icon} color="#24252a" size="xl"/>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-5 mt-4 text-sm">
                <p>Olá! Me chamo Barbara Hellen e atuo como desenvolvedora Front-End Pleno. Tenho mais de 5 anos de imersão no mundo da tecnologia e meu foco principal é a construção de interfaces modernas e escaláveis utilizando o ecossistema React.js, Next.js e TypeScript. Mas, apesar de o front-end ser minha grande paixão e especialidade, também tenho facilidade em transitar pelo back-end, tendo experiência com C# (.NET), ASP.NET MVC e Spring Boot.</p>
                <p>Minha jornada começou na ETEC Dra. Ruth Cardoso, lugar que me apresentou ao desenvolvimento web e me fez apaixonar de vez pela área. Para consolidar essa base, me formei como Tecnóloga em Sistemas para Internet pela Fatec Baixada Santista.</p>
                <p>Ao longo desses anos, amadureci profissionalmente e construí uma carreira sólida, evoluindo de estagiária até o nível Pleno. Essa trajetória me permitiu ir além da execução de tarefas: hoje participo do planejamento de arquiteturas, assumo a responsabilidade de ponta a ponta em projetos complexos.</p>
                <p>Sou movida por desafios tecnológicos, sempre buscando aplicar as melhores práticas em UI/UX, escrever código limpo e aprender algo novo a cada dia!</p>
            </div>
        </section>
    )
}
