import {
  logo,
  logoBlack,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  designSuite,
  foldvscode,
  loggers,
  // github,
  discord,
  pokemonGame,
  threejs,
  starLabs,
} from "../../../assets";

// export const navLinks = [
//   {
//     id: "about",
//     type: "section",
//     title: "About",
//   },
//   {
//     id: "projects",
//     type: "section",
//     title: "Projects",
//   },
//   {
//     id: "work",
//     type: "section",
//     title: "Work",
//   },
//   {
//     id: "certificates",
//     type: "section",
//     title: "Certificates",
//   },
//   {
//     id: "contact",
//     type: "section",
//     title: "Contact",
//   },
//   // {
//   //   id: "blogs",
//   //   type: "page",
//   //   title: "Blogs",
//   // },
//   // {
//   //   id: "dashboard",
//   //   type: "page",
//   //   title: "Dashboard",
//   // },
// ];

export const navLinks = [
  {
    id: "about",
    type: "section",
    title: "About Me",
  },
  {
    id: "projects",
    type: "section",
    title: "Projects",
  },
  {
    id: "work",
    type: "section",
    title: "Work",
  },
  {
    id: "certificates",
    type: "section",
    title: "Certificates",
  },
  {
    id: "contact",
    type: "section",
    title: "Get in Touch",
  },
];


const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "StarLabs",
    icon: starLabs, // Replace with actual icon variable
    iconBg: "#fff", // Example background color, adjust as needed
    date: "August 2021 - Present",
    points: [
      "Initiated career focusing on web development with React.js and Gatsby.js, continuously enhancing both frontend and backend capabilities.",
      "Developed mobile apps for personal learning and exploration outside of StarLabs responsibilities, focusing on React Native for mobile app development.",
    ],
  },
  {
    title: "Team Leader - StarLabs Internship Program",
    company_name: "StarLabs",
    icon: starLabs, // Replace with actual icon variable
    iconBg: "#fff", // Example background color, adjust as needed
    // date: "Date when you started this role - Present", // Fill in the specific dates
    points: [
      "Guided and mentored interns through comprehensive 3-month development cycles, with a focus on real-world application of development skills.",
      "Promoted a collaborative learning environment, ensuring project milestones were met and facilitating a productive internship experience.",
    ],
  },
  {
    title: "Mobile App Developer",
    company_name: "Personal Projects",

    icon: logoBlack, // Replace with actual icon variable for your personal projects
    iconBg: "#fff", // Example background color, adjust as needed
    date: " Present", // Fill in the specific dates
    points: [
      "Focused on creating mobile apps for learning, using React Native to understand mobile app functionalities and development processes.",
      "Applied knowledge gained from web development to build and enhance mobile applications, improving skills in cross-platform development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Leonat was a game-changer. Our app runs faster and looks stunning, thanks to his expertise.",
    name: "Mehmet",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    testimonial:
      "Leonat's attention to detail and ability to solve complex problems is unmatched. Highly recommended!",
    name: "Enes",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    testimonial:
      "The website Leonat built for us not only looks amazing but also boosted our engagement significantly.",
    name: "Dafina",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];


const projects = [
  {
    name: "DesignSuite",
    description:
      "DesignSuite is a Chrome extension that streamlines graphic design workflows, offering tools for quick edits, inspiration, and project organization in one place.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: designSuite,
    source_code_link:
      "https://chromewebstore.google.com/detail/designsuite/jcadgngfdgcjoebncmimnhhgofocpeeh",
    github_repo_link: "https://github.com/leonatkdev/Tools-google-extension"
  },
  {
    name: "Fold VSCode",
    description:
      "Fold is a VS Code extension that enhances code readability by allowing users to easily collapse, expand, and manage code blocks for better focus and navigation.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: foldvscode,
    source_code_link:
      "https://marketplace.visualstudio.com/items?itemName=LeonatKrasniqi.foldvscode",
      github_repo_link: 'https://github.com/leonatkdev/Fold-vscode-extension',
  },
  {
    name: "Loggerv2",
    description:
      "LoggerV2 is an NPM library for streamlined logging, offering customizable formats, log levels, and easy integration for efficient debugging.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: loggers,
    source_code_link: "https://www.npmjs.com/package/loggerv2",
    github_repo_link: 'https://github.com/leonatkdev/LoggerV2'
  },
  {
    name: "Encar Scrapper with(Discord)",
    description:
      "Scrapper for Encar is a Node.js tool using Puppeteer and Discord.js to automate data extraction from Encar, with seamless reporting to Discord channels.",
    tags: [
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },
      {
        name: "Puppeteer",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: discord,
    // source_code_link: "https://github.com/leonatkdev/node-js-scrapping",
     github_repo_link:"https://github.com/leonatkdev/node-js-scrapping"
  },
  {
    name: "Pokemon base Game",
    description:
      "Simple Pokémon game built with JavaScript, featuring basic gameplay mechanics like capturing, battling, and leveling up Pokémon in a text-based environment.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: pokemonGame,
    github_repo_link: "https://github.com/leonatkdev/node-js-scrapping",
    // source_code_link: "https://github.com/leonatkdev/node-js-scrapping",
  },
  {
    name: "This Portfolio",
    description:
      "My Portfolio 😄. Initially considered WordPress, but opted for a custom dashboard I built myself to better showcase my skills.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Node js ",
        color: "green-text-gradient",
      },
      {
        name: "Three Js",
        color: "pink-text-gradient",
      },
    ],
    image: logo,
    source_code_link: "https://leonat.dev/",
    github_repo_link: "https://github.com/leonatkdev/portfolio3D"
  },
];

export { services, technologies, experiences, testimonials, projects };
