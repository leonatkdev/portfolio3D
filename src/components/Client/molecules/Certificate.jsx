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

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {certificate?.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true, margin: "-30px" }}
            className="relative group cursor-pointer"
            onClick={() => openModal(cert)}
          >
            <div className="bg-gradient-to-br from-tertiary/80 to-tertiary/40 rounded-2xl p-2 backdrop-blur-sm border border-[#915eff]/20 hover:border-[#915eff]/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#915eff]/20">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={cert?.imagesrc}
                  alt={cert?.name}
                  className="w-full h-[300px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <p className="text-white text-sm font-semibold text-center">{cert?.name}</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <p className="text-white text-sm font-semibold text-center">{cert?.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    
    </>
  );
};

export default SectionWrapper(Certificate, "certificates");
