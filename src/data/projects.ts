import { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: "sgp",
    title: "SGP",
    description: "Sistema fullstack de gerenciamento de periódicos acadêmicos com backend próprio em Node.js, formulários validados, reCAPTCHA, carousel e envio de e-mails.",
    longDescription:
      "Plataforma web completa desenvolvida com Next.js 13 e TypeScript. O backend roda em Express dentro da própria aplicação com nodemailer e integração SMTP para envio de e-mails. Conta com formulários validados por React Hook Form + Yup, máscara de inputs, validação de CPF/CNPJ, proteção com Google reCAPTCHA, seleção customizada com React Select, carousel com react-spring-carousel, notificações com React Toastify, e estilização com Sass. Arquitetura separada em components, pages, resources e typings.",
    type: "Web App",
    status: "production",
    year: "2023",
    tags: ["Next.js 13", "TypeScript", "React", "Express", "Node.js", "React Hook Form", "Yup", "Sass", "Axios", "Nodemailer", "reCAPTCHA"],
    liveUrl: "https://sgp-seven.vercel.app",
    githubUrl: "https://github.com/barbaragrinop/sgp",
  },
  {
    id: "buffet",
    title: "Buffet Cicareli",
    description: "Site institucional para buffet com mais de 50 anos de história, focado em eventos gourmet, sociais e corporativos.",
    longDescription:
      "Site institucional desenvolvido para o Buffet Cicareli, empresa com mais de 50 anos no mercado de eventos. Apresenta a história da empresa, seção de gastronomia, formulário de orçamento e integração com redes sociais. Design elegante alinhado à identidade da marca, com foco em conversão e facilidade de contato.",
    type: "Site Institucional",
    status: "production",
    year: "2023",
    tags: ["Webflow", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://www.buffetcicareli.com.br",
    githubUrl: "https://github.com/barbaragrinop/site-buffet-cicareli",
  },
  {
    id: "franschultz",
    title: "FranSchultz.films",
    description: "Landing page de curso online de pilotagem e filmagem com drone, com foco em conversão e apresentação da instrutora.",
    longDescription:
      "Landing page desenvolvida como projeto final acadêmico, para a produtora audiovisual Fran Schultz. A página apresenta os módulos do curso de drone, depoimentos de alunos, perfil da instrutora, seção de público-alvo e CTAs de compra. Construída com HTML e CSS puros, com atenção a hierarquia visual, responsividade e fluxo de conversão.",
    type: "Landing Page",
    status: "production",
    year: "2022",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://projeto-pd-ppsi.vercel.app",
    githubUrl: "https://github.com/barbaragrinop/projeto-pd-ppsi",
  },
];