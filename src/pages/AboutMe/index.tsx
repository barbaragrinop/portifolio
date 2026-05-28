import clsn from 'classnames';
import profilePicture from "../../assets/images/profile-picture.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMediaData } from "../../data/social-media";

const HIGHLIGHTS = [
	"Mid-Level Front-End Developer",
	"5 years",
	"React.js",
	"Next.js",
	"TypeScript",
	"C# (.NET)",
	"Spring Boot",
	"Mid-Level developer",
];

function highlightText(text: string) {
	const regex = new RegExp(`(${HIGHLIGHTS.join("|")})`, "g");
	const parts = text.split(regex);
	return parts.map((part, i) =>
		HIGHLIGHTS.includes(part) ? (
			<span key={i} className="text-pink-primary font-medium">
				{part}
			</span>
		) : (
			part
		)
	);
}

const BIO_PARAGRAPHS = [
	"Hi! My name is Barbara Hellen, and I am a Mid-Level Front-End Developer. With over 5 years of immersion in the tech world, my primary focus is building modern and scalable interfaces using the React.js, Next.js, and TypeScript ecosystem. Even though front-end is my greatest passion and specialty, I can also comfortably navigate the back-end, with experience in C# (.NET), ASP.NET MVC, and Spring Boot.",
	"My journey began at ETEC Dra. Ruth Cardoso, where I was first introduced to web development and fell in love with the field. To solidify this foundation, I earned my Associate Degree in Internet Systems from Fatec Baixada Santista.",
	"Over the years, I have grown professionally and built a solid career, advancing from an intern to a Mid-Level developer. This trajectory has allowed me to go beyond just executing tasks; today, I actively participate in architectural planning and take end-to-end responsibility for complex projects.",
	"I am driven by technological challenges, always seeking to apply UI/UX best practices, write clean code, and learn something new every day!",
];

export default function AboutMe() {
	const yearsOfExperience = new Date().getFullYear() - 2020;

	return (
		<section
			id="aboutme"
			className="bg-black-primary/50 py-20 px-5"
		>
			<div className="max-w-5xl mx-auto">

				<div className="flex gap-1 mb-14 justify-center lg:justify-start">
					<span className="text-2xl font-bold text-white">about</span>
					<span className="text-2xl font-bold text-pink-primary">me.</span>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 items-start">
					<div className="flex flex-col items-center gap-5 lg:sticky lg:top-28">

						<div className="relative">
							<div className="w-36 h-36 rounded-full ring-2 ring-pink-primary/40 ring-offset-4 ring-offset-black-primary overflow-hidden">
								<img
									src={profilePicture}
									alt="Barbara Hellen"
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5
                              bg-black-primary border border-white/10 rounded-full px-3 py-1 whitespace-nowrap">
								<span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
								<span className="text-xs text-grey-primary">currently employed</span>
							</div>
						</div>

						<div className="text-center mt-2">
							<p className="text-white font-semibold text-base">Barbara Hellen</p>
							<p className="text-pink-primary text-xs mt-0.5">Frontend Developer · Mid-Level</p>
						</div>

						{/* Social links */}
						<div className="flex gap-2.5">
							{socialMediaData.map(({ title, href, icon }) => (
								<a
									key={title}
									title={title}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="w-9 h-9 bg-white/5 border border-white/8 rounded-lg
									flex items-center justify-center
									hover:bg-pink-primary hover:border-pink-primary
									transition-all duration-200 group"
								>
									<FontAwesomeIcon
										icon={icon}
										className="text-grey-primary group-hover:text-white transition-colors"
										size="sm"
									/>
								</a>
							))}
						</div>

						<div className="w-full border border-white/8 rounded-xl overflow-hidden mt-2">
							{[
								{ label: "Experience", value: `${yearsOfExperience}+ anos` },
								{ label: "Education", value: "Fatec BS" },
								{ label: "Location", value: "Praia Grande, SP" },
							].map(({ label, value }, i) => (
								<div
									key={label}
									className={clsn(
										"flex justify-between px-4 py-3 text-xs", 
										{
											"border-t border-white/8": i > 0,
											"bg-white/2": i <=0
										}
									)}
								>
									<span className="text-grey-primary/60">{label}</span>
									<span className="text-white font-medium">{value}</span>
								</div>
							))}
						</div>

					</div>

					{/* Coluna direita: bio */}
					<div className="flex flex-col gap-5 text-sm text-grey-primary leading-relaxed text-left">
						{BIO_PARAGRAPHS.map((para, i) => (
							<p key={i} className="text-[0.9rem] leading-7">
								{highlightText(para)}
							</p>
						))}

						{/* Download CV */}
						<div className="mt-4 pt-6 border-t border-white/8">
							<a
								// href="/cv-barbara-hellen.pdf"
								// download
								className="inline-flex items-center gap-2 text-xs font-medium
								text-pink-primary border border-pink-primary/30
								px-4 py-2 rounded-lg hover:bg-pink-primary/10
								transition-all duration-200"
								onClick={() => alert("sorry, still working on it ><")}
								rel="noopener noreferrer"
							>
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
									<polyline points="7 10 12 15 17 10" />
									<line x1="12" y1="15" x2="12" y2="3" />
								</svg>
								Download CV
							</a>
						</div>
					</div>

				</div>
			</div>
			{/* <div className="flex flex-col gap-5 mt-4 text-sm">
                <p>Olá! Me chamo Barbara Hellen e atuo como desenvolvedora Front-End Pleno. Tenho mais de 5 anos de imersão no mundo da tecnologia e meu foco principal é a construção de interfaces modernas e escaláveis utilizando o ecossistema React.js, Next.js e TypeScript. Mas, apesar de o front-end ser minha grande paixão e especialidade, também tenho facilidade em transitar pelo back-end, tendo experiência com C# (.NET), ASP.NET MVC e Spring Boot.</p>
                <p>Minha jornada começou na ETEC Dra. Ruth Cardoso, lugar que me apresentou ao desenvolvimento web e me fez apaixonar de vez pela área. Para consolidar essa base, me formei como Tecnóloga em Sistemas para Internet pela Fatec Baixada Santista.</p>
                <p>Ao longo desses anos, amadureci profissionalmente e construí uma carreira sólida, evoluindo de estagiária até o nível Pleno. Essa trajetória me permitiu ir além da execução de tarefas: hoje participo do planejamento de arquiteturas, assumo a responsabilidade de ponta a ponta em projetos complexos.</p>
                <p>Sou movida por desafios tecnológicos, sempre buscando aplicar as melhores práticas em UI/UX, escrever código limpo e aprender algo novo a cada dia!</p>
            </div> */}
		</section>
	);
}
