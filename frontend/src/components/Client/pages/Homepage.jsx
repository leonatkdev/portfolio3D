import { useState } from "react";
import {
  Hero,
  NavigationBar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  Certificate,
  StarsCanvas,
} from "../../index";
import { IoClose } from "react-icons/io5";
import { Helmet } from "react-helmet";

const Homepage = () => {
  const [certificateModal, setCertificateModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (cert) => {
    setSelectedCertificate(cert);
    setCertificateModal(true);
  };

  const closeModal = () => {
    setCertificateModal(false);
    setSelectedCertificate(null);
  };

  const schema = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Leonat Krasniqi",
    url: "https://leonat.dev",
    image: "https://leonat.dev/logo.svg", // Replace with actual profile image URL
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "StarLabs",
      description:
        "Web Developer and Team Leader in the StarLabs Internship Program.",
      sameAs: "https://www.linkedin.com/in/leonat-krasniqi", // Replace with your LinkedIn or StarLabs profile
    },
    description:
      "Specializing in TypeScript, JavaScript, React Native, and Node.js for developing mobile and web applications. Experienced in leading and mentoring teams, and passionate about creating efficient, user-friendly applications.",
    knowsAbout: ["TypeScript", "JavaScript", "React Native", "Node.js"],
    sameAs: [
      "https://www.linkedin.com/in/leonat-krasniqi-6b59a0223/",
      "https://github.com/leonatkdev",
      "https://www.instagram.com/leonatk_1/",
      "https://open.spotify.com/user/31eozv4vnjfxxusxcz3673uzjgii",
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Leonat Krasniqi - Full Stack Developer Specializing in Mobile and Web
          Applications
        </title>
        <meta
          name="description"
          content="Leonat Krasniqi, a Full Stack Developer with expertise in TypeScript, JavaScript, React Native, and Node.js. Specializing in developing dynamic, efficient, and scalable mobile and web applications. Explore my portfolio to see my work on innovative projects like DesignSuite(Google extension), Folder VScode(Visual studion extension), Loggerv2(Npm libary)."
        />
        <meta
          name="keywords"
          content="Leonat Krasniqi, Full Stack Developer, Mobile App Development, Web Development, React Native, Node.js, TypeScript, JavaScript, Portfolio"
        />
        <link rel="canonical" href="https://leonat.dev/" />
        {/* Social Media Meta Tags */}
        <meta
          property="og:title"
          content="Leonat Krasniqi - Full Stack Developer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leonat.dev/" />
        <meta property="og:image" content="" />
        <meta
          property="og:description"
          content="Explore the portfolio of Leonat Krasniqi, a Full Stack Developer with a focus on mobile and web application development. Featuring projects like DesignSuite(Google extension), Folder VScode(Visual studion extension), Loggerv2(Npm libary)."
        />
        <meta property="og:site_name" content="Leonat Krasniqi Portfolio" />
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Leonat Krasniqi - Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Discover the work of Leonat Krasniqi, from mobile apps to web development projects. Specializing in React Native, Node.js, and more."
        />
        <meta name="twitter:image" content="https://leonat.dev/logo.svg" />
        {/* Schema Markup */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover">
          <NavigationBar />
          <Hero />
        </div>
        <About />
        <Works />
        <Tech />
        <Experience />
        <Certificate openModal={openModal} />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        {certificateModal && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-75"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-lg p-4"
              onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing when clicking inside
            >
                <button
                  className="absolute flex items-center justify-center top-6 right-6 text-white text-2xl bg-[#915eff] rounded-full w-8 h-8"
                  onClick={closeModal}
                >
            <IoClose />
                </button>

              <img
                src={selectedCertificate?.imagesrc}
                alt={selectedCertificate?.name}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg font-semibold">
                {selectedCertificate?.name}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Homepage;
