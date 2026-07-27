import {
  logoBlack,
  DevKit,
  foldvscode,
  loggers,
  discord,
  pokemonGame,
  starLabs,
  realestate,
  hellocareicon,
  gopuna,
  gopunaIcon,
} from "../../../assets";

import certReactNative from "../../../assets/certificates/reactNative.webp";
import certIckJava from "../../../assets/certificates/ickJava.webp";
import certJava from "../../../assets/certificates/java.webp";
import certCsharp from "../../../assets/certificates/csharp.webp";
import certFrontend from "../../../assets/certificates/frontend.webp";
import certWebdev from "../../../assets/certificates/webdev.webp";
import certHackathon from "../../../assets/certificates/hackathon.webp";
import certJuniorit from "../../../assets/certificates/juniorit.webp";

/** Career started at Starlabs in August 2021. */
const CAREER_START = new Date(2021, 7, 1);

/**
 * Years of experience, rounded to the nearest whole year so the number keeps
 * itself current instead of needing an edit every August.
 */
const yearsSince = (start) =>
  Math.round((Date.now() - start.getTime()) / 31_557_600_000);

export const profile = {
  name: "Leonat Krasniqi",
  initials: "LK",
  role: "Software Engineer",
  roleLong: "Front-End Focused Full-Stack Developer",
  currentCompany: "HelloCare.ai",
  currentCompanyFull: "HelloCare.ai by Solaborate",
  location: "Prishtina, Kosova",
  email: "leonatkdev@gmail.com",
  // Also on the CV: +383 45 270 501 — left off the site to avoid spam calls.
  cv: "/cv/LeonatKrasniqi-CV.pdf",
  available: true,
  availabilityLabel: "Open to new opportunities",
  languages: "Albanian (native) · English (professional)",
  headline: "I build fast, accessible web and mobile products.",
  intro:
    "Software engineer with 5+ years building scalable web and mobile products — front-end focused, full-stack capable. I build the telehealth front end at HelloCare.ai and run Gopuna, my own local services marketplace.",
  yearsExperience: `${yearsSince(CAREER_START)}`,
};

/** The product I own and build end to end. */
export const product = {
  name: "Gopuna",
  url: "https://gopuna.com/",
  icon: gopunaIcon,
  tagline: "Local services marketplace",
  description:
    "Gopuna connects people in Kosova with verified local professionals — childcare, cleaning, repairs, gardening and more. Post a request, receive offers, pick your pro.",
  status: "Web live · iOS & Android in build",
};

export const socials = [
  {
    name: "GitHub",
    handle: "@leonatkdev",
    url: "https://github.com/leonatkdev",
    icon: "github",
  },
  {
    name: "LinkedIn",
    handle: "leonat-krasniqi",
    url: "https://www.linkedin.com/in/leonat-krasniqi-6b59a0223/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    handle: "@leonatk_1",
    url: "https://www.instagram.com/leonatk_1/",
    icon: "instagram",
  },
  {
    name: "Spotify",
    handle: "What I code to",
    url: "https://open.spotify.com/user/31eozv4vnjfxxusxcz3673uzjgii",
    icon: "spotify",
  },
];

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "stack", title: "Stack" },
  { id: "certificates", title: "Certificates" },
];

/** Icon keys map to react-icons components inside `About.jsx`. */
export const focusAreas = [
  {
    title: "Front-end engineering",
    icon: "layout",
    description:
      "Reusable component systems and accessible, high-performance UIs in React, Next.js and Gatsby.js.",
  },
  {
    title: "Backend & APIs",
    icon: "server",
    description:
      "Node.js and Express services over REST and GraphQL, backed by PostgreSQL or MongoDB.",
  },
  {
    title: "Mobile apps",
    icon: "smartphone",
    description:
      "One React Native and Expo codebase shipping to both iOS and Android.",
  },
  {
    title: "Product ownership",
    icon: "terminal",
    description:
      "Taking Gopuna from idea to production — architecture, localisation, SEO and release.",
  },
];

export const stack = [
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "Gatsby.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SASS / SCSS",
      "Tailwind CSS",
      "Three.js",
    ],
  },
  {
    group: "State & UI",
    items: ["Redux", "Zustand", "React Hooks", "React Router", "Storybook"],
  },
  {
    group: "Mobile",
    items: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    group: "Backend & APIs",
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MongoDB", "Mongoose", "Oracle"],
  },
  {
    group: "Testing",
    items: ["Jest", "Cypress (E2E)"],
  },
  {
    group: "DevOps & CI/CD",
    items: ["Git", "GitLab CI", "CI/CD pipelines", "Linux CLI"],
  },
  {
    group: "Design",
    items: ["Figma", "Adobe XD"],
  },
];

export const experiences = [
  {
    role: "Software Developer",
    company: "HelloCare.ai by Solaborate",
    logo: hellocareicon,
    period: "Aug 2025 — Present",
    current: true,
    summary: "Telehealth platform used in clinical environments.",
    points: [
      "Build and maintain front-end infrastructure for a telehealth platform used in clinical environments.",
      "Implement responsive, accessible and user-friendly interfaces with product, design and backend teams.",
      "Contribute to technical decisions and ensure scalable, maintainable front-end solutions.",
    ],
  },
  {
    role: "Founder & Full-Stack Developer",
    company: "Gopuna",
    logo: gopunaIcon,
    period: "2025 — Present",
    current: true,
    summary: "Local services marketplace — gopuna.com.",
    points: [
      "Founded and built Gopuna, where users post requests and receive offers from verified local professionals — childcare, cleaning, repairs, gardening and more.",
      "Designed and developed the full web platform end to end — front end, back end and database — including the request/offer flow and provider verification.",
      "Currently building the Gopuna mobile app in React Native, shipping a single codebase for both iOS and Android.",
      "Implemented multilingual localisation (Albanian, English, German) across the UI and legal pages, plus SEO and social sharing metadata.",
    ],
  },
  {
    role: "Software Developer",
    company: "Starlabs",
    logo: starLabs,
    period: "Aug 2021 — Aug 2025",
    summary: "Four years of production client work and front-end architecture.",
    points: [
      "Developed production-grade websites with Gatsby.js and Next.js, focused on performance and SEO.",
      "Led static and SSR application implementation and owned front-end architecture, building scalable, reusable component systems.",
      "Collaborated with cross-functional teams to deliver client projects from design to production.",
      "Led 5 internship programmes (2023–2024), each 3 months, mentoring junior developers and reviewing their project work.",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Independent",
    logo: logoBlack,
    period: "Ongoing",
    summary: "Client projects and published developer tools.",
    points: [
      "Delivered web projects with responsiveness and cross-platform compatibility verified through testing and optimisation.",
      "Published DevKit to the Chrome Web Store and Fold to the VS Code Marketplace.",
      "Released LoggerV2 on npm for configurable, level-based logging.",
    ],
  },
];

export const projects = [
  {
    name: "Gopuna",
    category: "My Product · Marketplace",
    status: product.status,
    description:
      "A two-sided marketplace connecting people in Kosova with verified local professionals for childcare, cleaning, repairs and gardening. Customers post a request, pros send offers. I own it end to end — front end, back end and database — with localisation in Albanian, English and German. The web platform is live; the React Native apps for iOS and Android are in development.",
    tags: ["React", "React Native", "Node.js", "TypeScript"],
    image: gopuna,
    art: "shot",
    featured: true,
    live: "https://gopuna.com/",
  },
  {
    name: "DevKit",
    category: "Chrome Extension",
    description:
      "A Chrome extension that streamlines graphic design workflows — quick edits, inspiration and project organisation in a single panel.",
    tags: ["JavaScript", "HTML", "CSS", "Chrome API"],
    image: DevKit,
    art: "shot",
    featured: true,
    live: "https://chromewebstore.google.com/detail/DevKit/jcadgngfdgcjoebncmimnhhgofocpeeh",
    repo: "https://github.com/leonatkdev/Tools-google-extension",
  },
  {
    name: "Fold",
    category: "VS Code Extension",
    description:
      "Collapse, expand and manage code blocks from one place so large files stay navigable.",
    tags: ["TypeScript", "VS Code API"],
    image: foldvscode,
    art: "icon",
    live: "https://marketplace.visualstudio.com/items?itemName=LeonatKrasniqi.foldvscode",
    repo: "https://github.com/leonatkdev/Fold-vscode-extension",
  },
  {
    name: "LoggerV2",
    category: "npm Package",
    description:
      "A logging library with customisable formats and levels that drops into any Node project.",
    tags: ["JavaScript", "Node.js", "npm"],
    image: loggers,
    art: "icon",
    live: "https://www.npmjs.com/package/loggerv2",
    repo: "https://github.com/leonatkdev/LoggerV2",
  },
  {
    name: "Estate",
    category: "Web App",
    description:
      "A real-estate front end built from a Figma Community design, focused on layout precision and responsive detail.",
    tags: ["Next.js", "React", "Tailwind"],
    image: realestate,
    art: "shot",
    live: "https://next-js-estate.vercel.app/",
  },
  {
    name: "Encar Scraper",
    category: "Automation",
    description:
      "Puppeteer scraper that extracts listing data and reports results straight into Discord channels.",
    tags: ["Node.js", "Puppeteer", "Discord.js"],
    image: discord,
    art: "icon",
    repo: "https://github.com/leonatkdev/node-js-scrapping",
  },
  {
    name: "Pokémon Battle",
    category: "Game",
    description:
      "A browser game covering capture, battle and levelling mechanics — built to practise game state handling.",
    tags: ["JavaScript"],
    image: pokemonGame,
    art: "shot",
    repo: "https://github.com/leonatkdev/node-js-scrapping",
  },
  {
    name: "This Portfolio",
    category: "Web",
    description:
      "Designed and built from scratch with React, Vite and Tailwind — light and dark themes included.",
    tags: ["React", "Vite", "Tailwind"],
    image: logoBlack,
    art: "icon",
    live: "https://leonatk.dev/",
    repo: "https://github.com/leonatkdev/portfolio3D",
  },
];

export const certificates = [
  { name: "React Native", image: certReactNative },
  { name: "Frontend Development", image: certFrontend },
  { name: "Web Development", image: certWebdev },
  { name: "Java", image: certJava },
  { name: "ICK Java", image: certIckJava },
  { name: "C#", image: certCsharp },
  { name: "Hackathon", image: certHackathon },
  { name: "Junior IT", image: certJuniorit },
];

export const testimonials = [
  {
    quote:
      "Working with Leonat was a game-changer. Our app runs faster and looks stunning, thanks to his expertise.",
    name: "Mehmet",
  },
  {
    quote:
      "Leonat's attention to detail and ability to solve complex problems is unmatched. Highly recommended.",
    name: "Enes",
  },
  {
    quote:
      "The website Leonat built for us not only looks amazing but also boosted our engagement significantly.",
    name: "Dafina",
  },
  {
    quote:
      "Having Leo as a teammate made me envision my approaches differently, couldn't have been luckier.",
    name: "Saimir",
  },
];

export const stats = [
  { value: `${profile.yearsExperience}+`, label: "Years shipping software" },
  { value: `${projects.length}`, label: "Projects & tools released" },
  { value: "5", label: "Internship programmes led" },
];
