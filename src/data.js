// Profile and experience are based on the owner's 2026 resume.
export const profile = {
  name: "Taras Shevchenko",
  handle: "TaraShevchenko",
  email: "shevchenko.taras.work@gmail.com",
  github: "https://github.com/TaraShevchenko",
  linkedin: "https://www.linkedin.com/in/taras-shevchenko-full-stack/",
};

// Add new work here. Old portfolio entries and screenshots have been removed.
// { slug, title, description: { en, uk }, tags: [], image, url, source? }
export const projects = [];

export const skills = [
  ["HTML", "html5", "#e9652c", "Frontend"],
  ["CSS", "css", "#477cfa", "Frontend"],
  ["SCSS", "sass", "#cf649a", "Frontend"],
  ["Tailwind CSS", "tailwindcss", "#39c5d7", "Frontend"],
  ["JavaScript", "javascript", "#f5d94e", "Frontend"],
  ["TypeScript", "typescript", "#4288d6", "Frontend", true],
  ["React", "react", "#61dafb", "Frontend", true],
  ["Next.js", "nextdotjs", "#eeeeee", "Frontend", true],
  ["TanStack Query", "reactquery", "#ff5367", "Frontend"],
  ["Redux Toolkit", "redux", "#a17add", "Frontend"],
  ["Redux-Saga", "reduxsaga", "#99a99b", "Frontend"],
  ["Zustand", null, "#bd9b83", "Frontend"],
  ["Radix UI", "radixui", "#b8a6ec", "Frontend"],
  ["shadcn/ui", "shadcnui", "#eeeeee", "Frontend"],
  ["WebSockets", null, "#5bbaa3", "Backend"],
  ["Node.js", "nodedotjs", "#74ba62", "Backend"],
  ["tRPC", "trpc", "#489bd4", "Backend"],
  ["NestJS", "nestjs", "#e84e78", "Backend"],
  ["PostgreSQL", "postgresql", "#689dca", "Database", true],
  ["Docker", "docker", "#3da8ef", "Tools"],
  ["Git", "git", "#ed6949", "Tools"],
  ["GitHub Actions", "githubactions", "#599bf3", "Tools"],
  ["Jest", "jest", "#e88497", "Tools"],
  ["Testing Library", "testinglibrary", "#e85c5d", "Tools"],
  ["Storybook", "storybook", "#ff6e9e", "Tools"],
  ["OpenAI API", null, "#86c8b0", "Backend"],
  ["Qwen", null, "#a692ef", "Tools"],
];

export const experience = [
  {
    company: "Extrachain.io",
    initials: "Ex",
    color: "#8580e9",
    role: "Senior Frontend Developer / Full-Stack Engineer",
    dates: { en: "May 2023 — Present", uk: "Травень 2023 — дотепер" },
    domain: {
      en: "Fintech & data-intensive products",
      uk: "Фінтех та продукти з великими обсягами даних",
    },
    details: {
      en: [
        "Migrated React applications to Next.js and established scalable module structure, linting rules, and build configuration.",
        "Designed backend services and database-backed workflows with Next.js, tRPC, NestJS, and PostgreSQL.",
        "Built real-time WebSocket interfaces, trading charts, and external API integrations.",
        "Containerized services with Docker and implemented GitHub Actions CI/CD pipelines.",
      ],
      uk: [
        "Мігрував React-застосунки на Next.js та впровадив модульну структуру, правила лінтингу й конфігурацію збірки.",
        "Розробив серверні сервіси та робочі процеси з базами даних на Next.js, tRPC, NestJS і PostgreSQL.",
        "Створив інтерфейси реального часу з WebSocket, торгові графіки та інтеграції зовнішніх API.",
        "Контейнеризував сервіси з Docker та впровадив CI/CD на GitHub Actions.",
      ],
    },
  },
  {
    company: "Temabit.com",
    initials: "Te",
    color: "#eca06e",
    role: "Middle Frontend Developer",
    dates: { en: "Aug 2021 — May 2023", uk: "Серпень 2021 — травень 2023" },
    domain: {
      en: "E-commerce · Silpo ecosystem",
      uk: "Електронна комерція · екосистема Сільпо",
    },
    details: {
      en: [
        "Delivered React and Next.js features with server-side rendering for one of Ukraine’s largest grocery retailers.",
        "Engineered WebSocket-based asynchronous data flows and complex business logic with Redux-Saga.",
        "Contributed to estimation, code reviews, and frontend technical decisions.",
      ],
      uk: [
        "Розробив функціональність на React і Next.js із серверним рендерингом для одного з найбільших продуктових ритейлерів України.",
        "Реалізував асинхронні потоки даних через WebSocket та складну бізнес-логіку з Redux-Saga.",
        "Брав участь в оцінюванні задач, рев’ю коду та технічних рішеннях фронтенду.",
      ],
    },
  },
  {
    company: "Merehead.com",
    initials: "Me",
    color: "#66bfb3",
    role: "Frontend Developer",
    dates: { en: "2022 — 2023", uk: "2022 — 2023" },
    domain: {
      en: "Blockchain · Short-term engagement",
      uk: "Блокчейн · короткострокова співпраця",
    },
    details: {
      en: [
        "Delivered frontend features for a blockchain-related web application.",
      ],
      uk: [
        "Розробив фронтенд-функціональність вебзастосунку у сфері блокчейну.",
      ],
    },
  },
  {
    company: "Softpro.ua",
    initials: "Sp",
    color: "#7da7e2",
    role: "Junior Frontend Developer",
    dates: { en: "Aug 2020 — Aug 2021", uk: "Серпень 2020 — серпень 2021" },
    domain: { en: "Geoportals", uk: "Геопортали" },
    details: {
      en: [
        "Built accessible HTML/CSS geoportals with multilingual and multi-theme support.",
      ],
      uk: [
        "Створив доступні геопортали на HTML/CSS із підтримкою кількох мов і тем.",
      ],
    },
  },
  {
    company: "BizRaise",
    initials: "Br",
    color: "#bd98d6",
    role: "Trainee Frontend Developer",
    dates: { en: "Jun 2019 — Jul 2020", uk: "Червень 2019 — липень 2020" },
    domain: { en: "CRM products", uk: "CRM-продукти" },
    details: {
      en: ["Built and adapted CRM interfaces using HTML, CSS, and JavaScript."],
      uk: ["Створював і адаптував CRM-інтерфейси на HTML, CSS та JavaScript."],
    },
  },
];
