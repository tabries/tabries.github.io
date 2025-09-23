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
    name: "Education",
    href: "#education",
  },
  {
    id: 5,
    name: "Awards",
    href: "#awards",
  },
  {
    id: 6,
    name: "Contact",
    href: "#contact",
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
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
      "Engineering from scratch an Electron Desktop Application to support offline activities on the Shipping module of the ERP system for the company tenant user.",
      "Adding features to the NextJS-based ERP and its NodeJS backend with Oracle DB for data storage.",
      "Implementing an Automation feature to different modules of the ERP to execute triggers based on custom conditions.",
    ],
    techStack: [
      "Node.js,",
      "Electron.js,",
      "OracleDB,",
      "SQLite,",
      "React.js",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
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
      "Led the adaptation of the site for mobile devices, enhancing user experience across key pages such as VOD (Video On Demand), streamer profiles, hashtag pages, and the lobby.",
      "Worked on the development from scratch of the new SEO-optimized site using Next.js for server-side rendering and Tailwind for styling, achieving 100% responsiveness.",
      "Added a lot of features, such as the Registration flow, Unlock flow for PPV content with Stripe payments, events for data analytics, and many others.",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "Redux Saga",
      "Redux.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
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
      "Development of innovative features for a Forms Builder web application.",
      "Integration efforts to seamlessly connect the Forms User Interface with the backend, enabling the Dynamic Generation of forms created within the Builder project ensuring intuitive user interaction.",
      "Collaborated closely with cross-functional teams to meet project milestones.",
    ],
    techStack: [
      "TypeScript",
      "Angular",
      "NestJS",
      "Node.js",
      "NgRx",
      "RxJs",
      "HTML",
      "SCSS",
      "CSS",
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
      "Development of innovative features for a Forms Builder web application.",
      "Integration efforts to seamlessly connect the Forms User Interface with the backend, enabling the Dynamic Generation of forms created within the Builder project ensuring intuitive user interaction.",
      "Collaborated closely with cross-functional teams to meet project milestones.",
    ],
    techStack: [
      "Python",
      "Django",
      "Django Rest Framework",
      "Django ORM",
      "Redis",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "ReactJS",
      "Redux",
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
      "Designed, developed, and implemented a wireless sensor network for monitoring soil moisture in uneven vineyard areas for Aguatec Bolivia.",
      "Programmed Atmel Microcontrollers and ESP8266 Wifi modules using C++ language.",
      "Designed and built energy-efficient boards for wireless nodes.",
      "Developed electrical resistance sensors (gypsum blocks) to measure soil moisture.",
      "Created a web server based on Node-RED on Raspberry Pi (Raspbian OS) for real-time data monitoring.",
      "Integrated InfluxDB and Grafana for real-time data visualization.",
    ],
    techStack: [
      "C++",
      "Node.js",
      "Node-RED",
      "JavaScript",
      "Atmel ATMEGA328P",
      "ESP8266",
      "NodeMCU",
      "Raspberry Pi",
    ],
  },
  {
    id: 6,
    title:
      "iProject Partners | Telecel SA - BPM Development Engineer (Backend-focused)",
    duration: "05/2017 - 09/2018",
    iconSource: "/assets/experiences/ippb.png",
    iconClassname: "!max-w-[15rem]",
    iconBgClassname: "from-[#aca6a2] via-[#d4b390] to-[#003d59] blur-[30px]",
    description: [
      "I developed and deployed Business Process Management (BPM) solutions using Microsoft SharePoint, leveraging JavaScript, C#, and the SharePoint REST API. My work included multi-tier enterprise applications for clients like YPFB (ODS Source Loading Tool) and Tigo Bolivia, where I automated key processes such as the management of Tigo Money correspondents and import cost tracking.",
      "I led the creation of critical workflow systems like Concept to Market (C2M) and Digital Voucher (B2C). These efforts involved developing RESTful APIs with .NET, including .NET Core, MVC, and Webforms, and documenting interfaces using Swagger. I also designed relational schemas and performed database operations with MS SQL Server 2012–2016 to support the backend logic.",
      "Beyond development, I conducted internal BPM automation training sessions and collaborated closely with cross-functional teams using DevOps tools like Git, Jira, Confluence, and Jenkins. Additionally, I gained familiarity with messaging queue systems such as Solace to support asynchronous communication needs within complex workflows.",
    ],
    techStack: [
      "C#",
      ".NET",
      ".NET Core",
      "WebForms",
      "JavaScript",
      "jQuery",
      "MS SQL Server",
      "Swagger",
      "Git",
      "Jenkins",
      "Jira",
      "Confluence",
      "Nintex",
      "SharePoint REST API",
      "Solace",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Workout Tracker",
    iconSource: "/assets/projects/workout-tracker.jpg",
    projectUrl: "https://github.com/tabries/django-gymtracker",
    description: [
      "A modern, full-stack gym tracking app built with React, Vite, TypeScript, Material UI, Tailwind CSS, Django REST API, and React Query.A modern, full-stack gym tracking app built with React, Vite, TypeScript, Material UI, Tailwind CSS, Django REST API, and React Query.",
    ],
    techStack: [
      "TypeScript",
      "ReactJS",
      "Python",
      "Django",
    ],
  },
  {
    id: 2,
    title: "ThreeJS Portfolio (this site)",
    iconSource: "/assets/projects/threejs-portfolio.jpg",
    projectUrl: "https://github.com/tabries/tabries.github.io",
    description: [
      "A space to showcase my journey, experiences, and passion for software engineering. From clean UI design to responsive layouts and performance optimization.",
    ],
    techStack: [
      "TypeScript",
      "ReactJS",
      "ThreeJS",
      "GSAP",
      "Motion",
      "Leva",
    ],
  },
  {
    id: 3,
    title: "Dynamic Form Generator",
    iconSource: "/assets/projects/dynamic-form-generator.jpg",
    projectUrl: "https://github.com/tabries/dynamic-form-generator",
    description: [
      "Generates a Multi-Step Dynamic form based on a json file, and also gives the ability to save data from the forms instances.",
    ],
    techStack: [
      "TypeScript",
      "Angular",
      "NodeJS",
      "ExpressJS",
      "CSS"
    ],
  },
]

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
  invert: true,
  focusableElements:
    "[data-blobity], a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
  opacity: 1,
  fontColor: "#08233b",
  zIndex: 1000,
  magnetic: true,
};
