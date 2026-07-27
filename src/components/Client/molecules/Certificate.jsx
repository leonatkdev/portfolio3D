import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuMaximize2, LuX } from "react-icons/lu";

import { certificates } from "../constants";
import Section from "../atoms/Section";
import Reveal from "../atoms/Reveal";

const Certificate = () => {
  const [selected, setSelected] = useState(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event) => event.key === "Escape" && close();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected, close]);

  return (
    <Section
      id="certificates"
      eyebrow="2018 — Present"
      title="Certificates & training"
      description="Courses, bootcamps and hackathons that shaped how I work. Select one to view it full size."
    >
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {certificates.map((cert, index) => (
          <Reveal as="li" key={cert.name} delay={(index % 4) * 0.05}>
            <button
              type="button"
              onClick={() => setSelected(cert)}
              className="card group w-full overflow-hidden p-2 text-left hover:border-ink/20"
            >
              <span className="relative block overflow-hidden rounded-xl bg-subtle">
                <img
                  src={cert.image}
                  alt={`${cert.name} certificate`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform
                             duration-500 group-hover:scale-[1.04]"
                />
                <span
                  className="absolute inset-0 grid place-items-center bg-ink/45 opacity-0
                             backdrop-blur-[2px] transition-opacity duration-300
                             group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <LuMaximize2 className="h-5 w-5 text-white" />
                </span>
              </span>

              <span className="flex items-center justify-between gap-2 px-2 py-3">
                <span className="truncate text-sm font-medium">{cert.name}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </ul>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.name} certificate`}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-3xl"
            >
              <button
                type="button"
                onClick={close}
                autoFocus
                aria-label="Close"
                className="absolute -top-12 right-0 grid h-9 w-9 place-items-center
                           rounded-full bg-white/10 text-white transition-colors
                           hover:bg-white/20"
              >
                <LuX className="h-4 w-4" />
              </button>

              <img
                src={selected.image}
                alt={`${selected.name} certificate`}
                className="max-h-[75vh] w-full rounded-2xl object-contain"
              />
              <p className="mt-4 text-center text-sm text-white/80">
                {selected.name}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Certificate;
