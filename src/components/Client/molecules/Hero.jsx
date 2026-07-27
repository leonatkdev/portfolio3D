import { motion, useReducedMotion } from "framer-motion";
import { LuArrowDown, LuArrowUpRight, LuFileText, LuMail } from "react-icons/lu";

import { product, profile, stats } from "../constants";
import avatar from "../../../assets/leoavatar.png";
import SocialLinks from "../atoms/SocialLinks";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const rise = (delay) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div
        className="pointer-events-none absolute inset-0 -z-10 grid-bg mask-fade-b"
        aria-hidden="true"
      />

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div {...rise(0)}>
              <span
                className="inline-flex items-center gap-2 rounded-full border border-line
                           bg-surface px-3 py-1.5 text-xs text-muted"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {profile.availabilityLabel}
              </span>
            </motion.div>

            <motion.p {...rise(0.06)} className="eyebrow mt-8">
              {profile.name} — {profile.role}
            </motion.p>

            <motion.h1
              {...rise(0.12)}
              className="mt-4 text-display-sm sm:text-display lg:text-display-lg"
            >
              I build fast, accessible{" "}
              <span className="text-accent">web &amp; mobile</span> products.
            </motion.h1>

            <motion.p
              {...rise(0.18)}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.intro}
            </motion.p>

            <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <LuFileText className="h-4 w-4" />
                View CV
              </a>
              <a href="#contact" className="btn-secondary">
                <LuMail className="h-4 w-4" />
                Get in touch
              </a>
              <SocialLinks className="ml-1" />
            </motion.div>

            <motion.dl
              {...rise(0.3)}
              className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-mono text-2xl text-ink sm:text-3xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1.5 text-xs leading-snug text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            {...rise(0.2)}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                className="absolute -inset-6 -z-10 rounded-[3rem] bg-accent/10 blur-2xl"
                aria-hidden="true"
              />

              <div className="card overflow-hidden rounded-4xl shadow-soft">
                <div className="relative grid-bg bg-subtle px-6 pt-8">
                  <img
                    src={avatar}
                    alt={`${profile.name} avatar`}
                    width="420"
                    height="420"
                    loading="eager"
                    className="mx-auto w-full max-w-[300px] drop-shadow-2xl"
                  />
                </div>

                <div className="flex items-center gap-3 border-t border-line px-5 py-4">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">
                      Currently at {profile.currentCompany}
                    </p>
                    <p className="truncate text-xs text-muted">
                      Software Developer · Telehealth
                    </p>
                  </div>
                </div>

                <a
                  href={product.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 border-t border-line px-5 py-4
                             transition-colors hover:bg-subtle"
                >
                  <img
                    src={product.icon}
                    alt=""
                    className="h-8 w-8 shrink-0 rounded-lg"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">
                      Building {product.name}
                    </span>
                    <span className="block truncate text-xs text-muted">
                      {product.tagline}
                    </span>
                  </span>
                  <LuArrowUpRight
                    className="h-4 w-4 shrink-0 text-muted"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          {...rise(0.4)}
          href="#about"
          className="mt-20 inline-flex items-center gap-2 pb-16 text-xs text-muted
                     transition-colors hover:text-ink sm:mt-24"
        >
          <LuArrowDown className="h-3.5 w-3.5" />
          Scroll to explore
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
