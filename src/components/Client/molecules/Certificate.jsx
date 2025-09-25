import React, { useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../../utils/motion";
import { SectionWrapper } from "../../../hoc";
import { styles } from "../../../style";

import CertificateSharp from "../../../assets/certificates/csharp.webp";
import CertificateFrontend from "../../../assets/certificates/frontend.webp";
import CertificateHackathon from "../../../assets/certificates/hackathon.webp";
import CertificateIckJava from "../../../assets/certificates/ickJava.webp";
import CertificateJava from "../../../assets/certificates/java.webp";
import CertificateJuniorit from "../../../assets/certificates/juniorit.webp";
import CertificateReactNative from "../../../assets/certificates/reactNative.webp";
import CertificateWebdev from "../../../assets/certificates/webdev.webp";

const certificate = [
  { name: "React Native", imagesrc: CertificateReactNative },
  { name: "ICK Java", imagesrc: CertificateIckJava },
  { name: "Java", imagesrc: CertificateJava },
  { name: "C#", imagesrc: CertificateSharp },
  { name: "Frontend", imagesrc: CertificateFrontend },
  { name: "Web Development", imagesrc: CertificateWebdev },
  { name: "Hackathon", imagesrc: CertificateHackathon },
  { name: "Junior IT", imagesrc: CertificateJuniorit },
];

const Certificate = ({openModal}) => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>2018 - Present</p>
        <h2 className={styles.sectionHeadText}>Certificates</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certificate?.map((cert) => (
          <div
            key={cert.name}
            className="sm:w-[250px] sm:h-[350px] rounded-lg overflow-hidden relative group cursor-pointer"
            onClick={() => openModal(cert)}
          >
            <img
              src={cert?.imagesrc}
              alt={cert?.name}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute top-0 h-full flex items-center justify-center w-full p-2 bg-gradient-to-t from-purple-700 via-purple-600/70 to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-0">
              <p className="text-white text-sm font-semibold">{cert?.name}</p>
            </div>
            <div className="absolute bottom-0 w-full p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white text-sm font-semibold text-center">{cert?.name}</p>
            </div>
          </div>
        ))}
      </div>

    
    </>
  );
};

export default SectionWrapper(Certificate, "certificates");
