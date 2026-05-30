import { WorkExperience } from "../types/WorkExperience";

export const EXPERIENCES: WorkExperience[] = [
  {
    id: "icaro",
    role: "Analista de Desenvolvimento Pleno",
    company: "Icaro Tech",
    period: "jul 2023 — presente",
    duration: "2 anos 11 meses",
    location: "Campinas, SP · Remoto",
    current: true,
    description: [
      "Atuação como desenvolvedora front-end pleno em projetos de grande escala, liderando a construção e evolução de interfaces modernas com foco em performance e escalabilidade.",
      "Desenvolvimento de aplicações com ASP.NET MVC integrado a stacks front-end modernas.",
      "Participação ativa em decisões de arquitetura e código, colaborando diretamente com times de produto e design.",
    ],
    tags: ["React", "ASP.NET MVC", "Styled-components", "TypeScript", "Figma", "HTML", "CSS", "Kendo UI", "Scrum", "SASS", "Story Book", "WebSocket", "ESLint", "Usability", "Kanban", "C#", "JIRA", "SQL Server", ".NET Framework", "Jenkins", "JavaScript", "Responsiveness", "MobX", "WCAG", "Azure DevOps", "Telerik", "JQuery", "Redux"],
  },
  {
    id: "hexagon-pleno",
    role: "Desenvolvedora Front-End Pleno",
    company: "Hexagon Pro",
    period: "jan 2022 — jun 2023",
    duration: "1 ano 6 meses",
    location: "Híbrido",
    description: [
      "Desenvolvimento e manutenção de interfaces com React, TailwindCSS, TypeScript e JavaScript, entregando experiências fluidas e acessíveis.",
      "Responsabilidade total por um projeto e início de outro, atuando como referência técnica para decisões de front-end.",
      "Mentoria de estagiários, compartilhando boas práticas de código, versionamento e arquitetura.",
      "Colaboração ativa em testes automatizados (integração e E2E) com Jest e Cypress.",
      "Participação no planejamento de arquitetura em squads ágeis com Scrum e Kanban.",
    ],
    tags: [
      "Next.js", "React", "TypeScript", "TailwindCSS", "Cypress", "Jest", "Storybook", "Azure DevOps", "CSS", "Web Design Responsivo", "Scrum", "SASS", "GitFlow", "ESLint", "Usability", "Kanban", "Git", "JavaScript", "HTML5", "Responsiveness"
    ]
  },
  {
    id: "hexagon-junior",
    role: "Desenvolvedora Front-End Junior",
    company: "Hexagon Pro",
    period: "out 2021 — jan 2022",
    duration: "4 meses",
    location: "Híbrido",
    description: [
      "Início da trajetória na Hexagon, contribuindo para projetos internos e aprendendo as bases da cultura de desenvolvimento da empresa.",
      "Construção de telas e componentes com Next.js e CSS sob orientação do sênior.",
    ],
    tags: ["Next.js", "CSS", "React", "TypeScript", "TailwindCSS", "Jenkins", "Figma", "Storybook", "GitLab", "BEM"],
  },
  {
    id: "modalgr-analista",
    role: "Analista Júnior de Sistemas",
    company: "MODALGR",
    period: "jun 2021 — out 2021",
    duration: "5 meses",
    location: "Presencial",
    description: [
      "Análise e manutenção de sistemas internos e desenvolvimento de interfaces. Manutenção no banco de dados e construção de queries SQL.",
      "Contato prático com SGBD e CSS, desenvolvendo soluções para demandas internas da empresa.",
    ],
    tags: ["SQL Server", ".NET", "Angular 7", "Typescript", "HTML", "CSS"],
  },
  {
    id: "modalgr-estagio",
    role: "Estagiária de Desenvolvimento",
    company: "MODALGR",
    period: "dez 2020 — out 2021",
    duration: "11 meses",
    location: "Presencial",
    description: [
      "Primeiro contato profissional com desenvolvimento de software, atuando em suporte a sistemas e desenvolvimento de pequenas features.",
      "Aprendizado de fundamentos de banco de dados relacional, CSS e lógica de programação aplicada a projetos reais da empresa. E integração com sistemas externos via APIs.",
    ],
    tags: ["SQL Server", ".NET", "Angular 7", "Typescript", "HTML", "CSS"],
  },
];