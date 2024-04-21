import React from 'react'
import {
    Hero,
    NavigationBar,
    About,
    Tech,
    Experience,
    Works,
    Feedbacks,
    Contact,
    StarsCanvas
  } from "../../index";
  import { Helmet } from 'react-helmet';

const Homepage = () => {
  const schema = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Leonat Krasniqi",
    "url": "https://leonat.dev",
    "image": "URL_TO_YOUR_PROFILE_IMAGE",
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "StarLabs",
      "description": "Web Developer and Team Leader in the StarLabs Internship Program.",
      "sameAs": "URL_TO_STARLABS_OR_YOUR_LINKEDIN_PROFILE"
    },
    "description": "Specializing in TypeScript, JavaScript, React Native, and Node.js for developing mobile and web applications. Experienced in leading and mentoring teams, and passionate about creating efficient, user-friendly applications.",
    "knowsAbout": ["TypeScript", "JavaScript", "React Native", "Node.js"],
    "sameAs": [
      "YOUR_FACEBOOK_PROFILE",
      "YOUR_TWITTER_PROFILE",
      "YOUR_LINKEDIN_PROFILE",
      "OTHER_SOCIAL_PROFILE"
    ]
  };
  return (
    <>
    <Helmet>
        <title>Leonat Krasniqi - Full Stack Developer Specializing in Mobile and Web Applications</title>
        <meta name="description" content="Leonat Krasniqi, a proficient Full Stack Developer with expertise in TypeScript, JavaScript, React Native, and Node.js. Specializing in developing dynamic, efficient, and scalable mobile and web applications. Explore my portfolio to see my work on innovative projects like Car Rent, Job IT, and Trip Guide."/>
        <meta name="keywords" content="Leonat Krasniqi, Full Stack Developer, Mobile App Development, Web Development, React Native, Node.js, TypeScript, JavaScript, Portfolio"/>
        <link rel="canonical" href="https://leonat.dev/"/>
        {/* Social Media Meta Tags */}
        <meta property="og:title" content="Leonat Krasniqi - Full Stack Developer"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://leonat.dev/"/>
        <meta property="og:image" content="https://leonat.dev/logo.svg"/>
        <meta property="og:description" content="Explore the portfolio of Leonat Krasniqi, a Full Stack Developer with a focus on mobile and web application development. Featuring projects like Car Rent, Job IT, and Trip Guide."/>
        <meta property="og:site_name" content="Leonat Krasniqi Portfolio"/>
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Leonat Krasniqi - Full Stack Developer"/>
        <meta name="twitter:description" content="Discover the work of Leonat Krasniqi, from mobile apps to web development projects. Specializing in React Native, Node.js, and more."/>
        <meta name="twitter:image" content="https://leonat.dev/logo.svg"/>
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
    <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover">
    <NavigationBar />
     <Hero />
    </div>
     <About />
     <Experience />
     <Tech />
     <Works />
     <Feedbacks />
     <div className="relative z-0"> 
     <Contact />
     <StarsCanvas />
     </div>
  </div></>
  )
}

export default Homepage