import {
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
    carrent,
    jobit,
    tripguide,
    threejs,
    starLabs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },

  ];
  
  // const experiences = [
  //   {
  //     title: "Frontend developer",
  //     company_name: "StarLabs",
  //     icon: starLabs,
  //     iconBg: "#383E56",
  //     date: "August 2021", // - April 2021",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "React Native Developer",
  //     company_name: "StarLabs",
  //     icon: starLabs,
  //     iconBg: "#E6DEDD",
  //     // date: "Jan 2021 - Feb 2022",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "StarLabs",
  //     icon: starLabs,
  //     iconBg: "#E6DEDD",
  //     date: "March 2024 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  // ];

  const experiences = [
    {
      title: "Web Developer",
      company_name: "StarLabs",
      icon: starLabs, // Replace with actual icon variable
      iconBg: "#383E56", // Example background color, adjust as needed
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
      iconBg: "#E6DEDD", // Example background color, adjust as needed
      // date: "Date when you started this role - Present", // Fill in the specific dates
      points: [
        "Guided and mentored interns through comprehensive 3-month development cycles, with a focus on real-world application of development skills.",
        "Promoted a collaborative learning environment, ensuring project milestones were met and facilitating a productive internship experience.",
      ],
    },
    {
      title: "Mobile App Developer",
      company_name: "Personal Projects",
     
      icon: starLabs, // Replace with actual icon variable for your personal projects
      iconBg: "#C2EDEC", // Example background color, adjust as needed
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
        "I thought it was impossible to make a website as beautiful as our product, but Leo proved me wrong.",
      name: "Eduarti",
      // designation: "CFO",
      // company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Leo does.",
      name: "Enes",
      // designation: "Developer",
      // company: "",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Leonat optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Erion",
      // designation: "IT",
      // company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  