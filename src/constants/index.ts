export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 4,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    name: "Education",
    href: "#education",
  },
  {
    id: 6,
    name: "Awards",
    href: "#awards",
  },
  {
    id: 7,
    name: "Contact",
    href: "#contact",
  },
];

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean
) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.12,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -10.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],

    perspectiveCameraPosition: isSmall
      ? [-0.75, -0.45, 18.25]
      : isMobile
        ? [-0.75, -0.45, 18.25]
        : isTablet
          ? [-0.75, -0.45, 18.25]
          : [0, 0, 30],
    perspectiveCameraRotation: isSmall
      ? [0, 0, -1.57]
      : isMobile
        ? [0, 0, -1.57]
        : isTablet
          ? [0, 0, -1.57]
          : [0, 0, 0],

    heroCameraPosition: isSmall
      ? [-1.9, -16.8, -10.0]
      : isMobile
        ? [-1.9, -16.2, -8.0]
        : isTablet
          ? [-1.9, -16.2, -2.0]
          : [-2, -16.9, 0],

    heroCameraPositionOffset: isSmall
      ? [0.015, -0.024, 0.025]
      : isMobile
        ? [0.015, -0.02, 0.025]
        : isTablet
          ? [0.015, -0.023, 0.025]
          : [0, -0.005, 0.02],
    heroCameraRotationOffset: isSmall
      ? [0.0005, -0.00001, -0.00187]
      : isMobile
        ? [0.0005, -0.00001, -0.00187]
        : isTablet
          ? [0.0005, -0.00001, -0.00187]
          : [0, 0.0008, 0],
  };
};

export const workExperiences = [
  {
    id: 1,
    title: "Cynergy US - Remote - Senior Software Engineer (Backend-focused)",
    duration: "08/2025 - Present",
    iconSource: "/assets/experiences/cynergy.png",
    iconClassname: "!max-w-[15rem]",
    iconBgClassname: "from-[#aca6a2] via-[#d4b390] to-[#003d59] blur-[30px]",
    description: [
      "Architected a Turborepo monorepo (web, API, desktop) with 5 shared packages, enabling code reuse across platforms; built an offline-first Electron desktop app with bidirectional SQLite-to-Oracle sync — version-based conflict detection, and exponential backoff retry mirroring 12+ Oracle tables.",
      "Contributed to a full-featured enterprise ERP portal and a multi-tenant REST API with dynamic Oracle/PostgreSQL connection pool routing per organization and Keycloak RBAC.",
      "Led Oracle PL/SQL to Node.js migration for carrier-specific ZPL label generation (Google, AT&T, Verizon, Sprint, Comcast) with SSCC barcode generation and direct thermal printer control.",
      "Established full observability: OpenTelemetry + Azure Monitor exporters, and 6 GitHub Actions CI/CD workflows (Azure deploy, SonarQube, PR previews). Deployed via Docker and Kubernetes.",
    ],
    techStack: [
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Electron",
      "Turborepo",
      "Oracle DB",
      "PostgreSQL",
      "SQLite",
      "Keycloak",
      "TailwindCSS",
      "OpenTelemetry",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Jest",
      "Vitest",
      "Playwright",
    ],
  },
  {
    id: 2,
    title: "Caffeine.tv - Remote - Senior Software Engineer (Frontend-focused)",
    iconSource: "/assets/experiences/caffeineicon.png",
    iconClassname: "!max-w-[18rem]",
    iconBgClassname: "from-[#0000cf] via-[#0188ff] to-[#0000d2] blur-[25px]",
    duration: "05/2022 - 07/2024",
    description: [
      "Led mobile responsiveness adaptation of the main streaming platform (332 components, 38 feature modules); contributed to a next-generation Next.js platform with JSON-LD structured data, prerender SSR, and dynamic OG/Twitter meta tags for SEO.",
      "Implemented Stripe payment system (credit card processing, digital currency flows) and a pay-per-view unlock system; developed user auth suite with MFA, social account linking, and CAPTCHA.",
      "Architected a real-time WebSocket manager with auto-reconnect and exponential backoff using Redux-Saga; contributed to RBAC admin dashboard; integrated Sentry, LogRocket, Datadog, and Mux observability stack; containerized services with Docker and deployed via Kubernetes through CircleCI.",
    ],
    techStack: [
      "React",
      "Next.js",
      "Redux-Saga",
      "TypeScript",
      "GraphQL",
      "Apollo",
      "Stripe",
      "WebRTC",
      "HLS.js",
      "AWS (EC2, S3, Lambda)",
      "Cypress",
      "Jest",
      "CircleCI",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    id: 3,
    title:
      "Digital Harbor International - Remote - Software Engineer (Backend-focused)",
    duration: "06/2021 - 03/2022",
    iconSource: "/assets/experiences/digital_harbor.png",
    iconClassname: "!max-w-[15rem]",
    iconBgClassname: "from-[#b5106a] via-[#e1505a] to-[#e9754a] blur-[50px]",
    description: [
      "Contributed to Social Form (Set-forms), an enterprise multi-tenant conversational platform replacing 100+ page paper applications across Healthcare, Financial Services and Government.",
      "Built a drag-and-drop Angular Forms Builder (20+ field types, form versioning) and a Dynamic Form Generation engine converting 100+ field forms into guided conversational flows with intelligent branching.",
      "Built and integrated 6+ NestJS microservices (form schemas, field-type registry, multi-tenant accounts, document storage) via Kafka; introduced Cypress E2E test suites, reducing manual QA cycles. Containerized with Docker and Kubernetes.",
    ],
    techStack: [
      "NestJS",
      "Node.js",
      "MongoDB",
      "Angular",
      "NgRx",
      "TypeScript",
      "Jest",
      "Cypress",
      "Kafka",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    id: 4,
    title:
      "tuGerente.com - Santa Cruz, Bolivia - Full-Stack Developer (Backend-focused)",
    duration: "03/2020 - 03/2021",
    iconSource: "/assets/experiences/tu_gerente.png",
    iconBgClassname: "from-[#941a23] via-[#a61a23] to-[#e3535b] blur-[30px]",
    description: [
      "Designed 8-service microservices architecture (auth, ERP, POS, integrations, payments) communicating via REST, JWT, Socket.IO, and AWS SQS; containerized all services with Docker and managed deployments via Jenkins.",
      "Built ERP backend (Django REST Framework); led end-to-end restaurant ordering system — React PWA POS, real-time Kitchen Display (Socket.IO), and ERP frontend.",
      "Implemented bidirectional e-commerce sync for WooCommerce and Shopify with webhooks; 3 payment gateway integrations (Stripe, Ebanx, Click QR/OpenPGP); government SOAP API for Bolivia's electronic invoicing system (SIAT).",
    ],
    techStack: [
      "Python",
      "Django",
      "Node.js",
      "React",
      "Redux",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "AWS (S3, SQS)",
      "Socket.IO",
      "Shopify API",
      "WooCommerce API",
      "Stripe",
      "Docker",
      "Jenkins",
    ],
  },
  {
    id: 5,
    title:
      "Aguatec Bolivia Company - Bolivia - Electronic and Software Engineer",
    duration: "09/2018 - 09/2019",
    iconSource: "/assets/experiences/aguatecd.png",
    iconClassname: "!max-w-[15rem]",
    iconBgClassname: "from-[#019bd2] via-[#6ee157] to-[#003d59] blur-[30px]",
    description: [
      "Engineered a self-healing wireless Mesh IoT network (20+ nodes across 5 vineyard zones) using Atmel ATMEGA328P and ESP8266 in C++ — multi-hop routing, automatic failover, and fault-tolerant coverage with no single point of failure.",
      "Built a real-time pipeline (Node-RED + Node.js) feeding InfluxDB with readings from 20+ nodes every 5 minutes; Grafana dashboards tracked 8+ metrics (moisture, signal strength, battery health), enabling data-driven irrigation decisions.",
    ],
    techStack: [
      "C++",
      "Node.js",
      "Node-RED",
      "InfluxDB",
      "Grafana",
      "ESP8266",
      "Atmel ATMEGA328P",
      "Raspberry Pi",
    ],
  },
  {
    id: 6,
    title:
      "iProject Partners | Tigo Bolivia - Santa Cruz, Bolivia - BPM Development Engineer",
    duration: "05/2017 - 09/2018",
    iconSource: "/assets/experiences/ippb.png",
    iconClassname: "!max-w-[15rem]",
    iconBgClassname: "from-[#aca6a2] via-[#d4b390] to-[#003d59] blur-[30px]",
    description: [
      "Designed and deployed 10+ SharePoint BPM automation systems for Tigo Bolivia (telecom), serving Commercial, Operations, Finance, Audit, and HR with multi-step approval workflows.",
      "Built C2M (Concept-to-Market): a 5-phase stage-gate product lifecycle platform (40+ tracked requirements, XML state machine, visual progress bars); developed Digital Voucher B2C with digital signature capture, cross-list validation, and IMEI verification.",
      "Created an Excel-to-Oracle data loader for YPFB (Bolivia's state oil company) with dynamic column mapping, Factory pattern auth; built .NET Core RESTful APIs documented via Swagger.",
    ],
    techStack: [
      "C#",
      ".NET",
      ".NET Core",
      "ASP.NET",
      "JavaScript",
      "jQuery",
      "SharePoint 2013",
      "Nintex",
      "MS SQL Server",
      "Oracle DB",
      "Swagger",
      "Jenkins",
      "Jira",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Climate Tracker",
    iconSource: "/assets/projects/climate-tracker-collage.jpg",
    projectUrl: "https://github.com/tabries/climate-tracker",
    description: [
      "An interactive dashboard for visualizing global climate data in real time, combining 2D interactive maps with 3D Three.js visualization. Targeted at climate analysts to understand climate risks, environmental data, and their impact.",
    ],
    techStack: ["Node.js", "ReactJS", "TypeScript", "Docker", "Redis", "InfluxDB", "Grafana"],
  },
  {
    id: 2,
    title: "Workout Tracker",
    iconSource: "/assets/projects/workout-tracker.jpg",
    projectUrl: "https://github.com/tabries/django-gymtracker",
    description: [
      "A modern, full-stack gym tracking app built with React, Vite, TypeScript, Material UI, Tailwind CSS, Django REST API, and React Query.",
    ],
    techStack: ["TypeScript", "ReactJS", "Python", "Django"],
  },
  {
    id: 3,
    title: "ThreeJS Portfolio (this site)",
    iconSource: "/assets/projects/threejs-portfolio.jpg",
    projectUrl: "https://github.com/tabries/tabries.github.io",
    description: [
      "A space to showcase my journey, experiences, and passion for software engineering. From clean UI design to responsive layouts and performance optimization.",
    ],
    techStack: ["TypeScript", "ReactJS", "ThreeJS", "GSAP", "Motion", "Leva"],
  },
  {
    id: 4,
    title: "Dynamic Form Generator",
    iconSource: "/assets/projects/dynamic-form-generator.jpg",
    projectUrl: "https://github.com/tabries/dynamic-form-generator",
    description: [
      "Generates a Multi-Step Dynamic form based on a json file, and also gives the ability to save data from the forms instances.",
    ],
    techStack: ["TypeScript", "Angular", "NodeJS", "ExpressJS", "CSS"],
  },
];

export const education = [
  {
    id: 1,
    institution: "Gabriel René Moreno Autonomous University",
    location: "Santa Cruz, Bolivia",
    title: "Bs. Networking and telecommunications",
  },
];

export const awards = [
  {
    id: 1,
    institution: "Gabriel René Moreno Autonomous University",
    location: "Santa Cruz, Bolivia",
    title: " Exceptional qualification in the graduation project",
  },
];

export const contact = [
  {
    id: 1,
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gabriel-martinez-ayala/",
  },
  {
    id: 2,
    name: "Github",
    icon: "github",
    link: "https://github.com/tabries",
  },
  {
    id: 3,
    name: "Gmail",
    icon: "gmail",
    link: "mailto:gamartinezayala@gmail.com?Subject=Job%20Oportunity",
  },
];

export const initialBlobityOptions = {
  licenseKey: "opensource",
  focusableElementsOffsetX: 12,
  focusableElementsOffsetY: 2,
  invert: false,
  focusableElements:
    "[data-blobity], a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
  opacity: 0.10,
  fontColor: "#08233b",
  zIndex: 1000,
  magnetic: true,
  // color: "#F97068",
  dotColor: "#fff",
};
