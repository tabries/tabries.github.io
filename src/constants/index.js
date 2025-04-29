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
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
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
    title: "Self-Employed - Algorithmic Trading Developer",
    duration: "08/2024 - 03/2025",
    description: [
      "Implemented algorithmic trading strategies on Freqtrade for cryptocurrencies, using custom indicators such as RSI, MACD, and Bollinger Bands.",
      "Used hyperparameterization with Bayesian Optimization to maximize profitability of strategies.",
      "Deployed bots on Linux servers with Docker and Freqtrade, ensuring 24/7 execution without interruptions.",
      "Configured connectors with Binance, KuCoin, and Bybit using CCXT to obtain real-time market data.",
      "Implemented Dynamic Stop-Loss and Trailing Stop strategies to minimize losses in volatile markets.",
      "Developed a position sizing system based on the Kelly Criterion method and percentage risk per trade.",
      "Report automation with Telegram API and real-time notifications on trading signals.",
    ],
    techStack: ["Python", "Freqtrade", "Pandas", "NumPy", "CCXT", "Binance API", "Docker"]
  },
  {
    id: 2,
    title: "Caffeine.tv - Remote - Frontend Developer",
    duration: "05/2022 - 07/2024",
    description: [
      "Led the adaptation of the site for mobile devices, enhancing user experience across key pages such as VOD (Video On Demand), streamer profiles, hashtag pages, and the lobby.",
      "Worked on the development from scratch of the new SEO-optimized site using Next.js for server-side rendering and Tailwind for styling, achieving 100% responsiveness.",
      "Added a lot of features, such as the Registration flow, Unlock flow for PPV content with Stripe payments, events for data analytics, and many others."
    ],
    techStack: ["React.js", "Next.js", "Redux Saga", "Redux.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 3,
    title: "Digital Harbor International - Remote - Full-Stack Developer",
    duration: "06/2021 - 03/2022",
    description: [
      "Development of innovative features for a Forms Builder web application.",
      "Integration efforts to seamlessly connect the Forms User Interface with the backend, enabling the Dynamic Generation of forms created within the Builder project ensuring intuitive user interaction.",
      "Collaborated closely with cross-functional teams to meet project milestones."
    ],
    techStack: ["TypeScript", "Angular", "NestJS", "NgRx", "RxJs", "JavaScript", "HTML", "SCSS", "CSS"]
  },
  {
    id: 4,
    title: "tuGerente.com - Santa Cruz, Bolivia - Full-Stack Developer",
    duration: "03/2020 - 03/2021",
    description: [
      "Development of innovative features for a Forms Builder web application.",
      "Integration efforts to seamlessly connect the Forms User Interface with the backend, enabling the Dynamic Generation of forms created within the Builder project ensuring intuitive user interaction.",
      "Collaborated closely with cross-functional teams to meet project milestones."
    ],
    techStack: ["Python", "Django", "Django Rest Framework", "Django ORM", "Redis", "NodeJS", "PostgreSQL", "MySQL",
                "ReactJS", "Redux"]
  },
  {
    id: 5,
    title: "Aguatec Bolivia Company - Bolivia - Electronic and Software Engineer",
    duration: "09/2018 - 09/2019",
    description: [
      "Designed, developed, and implemented a wireless sensor network for monitoring soil moisture in uneven vineyard areas for Aguatec Bolivia.",
      "Programmed Atmel Microcontrollers and ESP8266 Wifi modules using C++ language.",
      "Designed and built energy-efficient boards for wireless nodes.",
      "Developed electrical resistance sensors (gypsum blocks) to measure soil moisture.",
      "Created a web server based on Node-RED on Raspberry Pi (Raspbian OS) for real-time data monitoring.",
      "Integrated InfluxDB and Grafana for real-time data visualization."
    ],
    techStack: ["C++", "Atmel ATMEGA328P", "ESP8266", "NodeMCU", "Raspberry Pi", "Node-RED", "Node.js", "JavaScript"]
  },
  {
    id: 6,
    title: "iProject Partners | Telecel SA - BPM Development Engineer",
    duration: "05/2017 - 09/2018",
    description: [
      "Implemented Business Process Management (BPM) solutions across different organizations, mostly with front-end technologies.",
      "Shared my expertise through teaching and conducting training sessions on BPM automation."
    ],
    techStack: ["JavaScript", "HTML", "CSS", "jQuery", "Nintex Forms", "Nintex Workflows"]
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
