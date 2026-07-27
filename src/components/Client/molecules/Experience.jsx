import { experiences, profile } from "../constants";
import Section from "../atoms/Section";
import Reveal from "../atoms/Reveal";

const Experience = () => (
  <Section
    id="work"
    eyebrow="Experience"
    title="Where I've worked"
    description={`${profile.yearsExperience} years of shipping product — from client work and internal tooling to running my own marketplace and leading an internship programme.`}
  >
    <ol className="relative border-l border-line pl-6 sm:pl-10">
      {experiences.map((job, index) => (
        <Reveal
          as="li"
          key={`${job.company}-${job.period}`}
          delay={index * 0.06}
          className="relative pb-14 last:pb-0"
        >
          <span
            className={`absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-bg sm:-left-[calc(2.5rem+5px)] ${
              job.current ? "bg-accent" : "bg-line"
            }`}
            aria-hidden="true"
          />

          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-xs text-muted">{job.period}</p>
            {job.current && (
              <span
                className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px]
                           uppercase tracking-[0.14em] text-accent"
              >
                Current
              </span>
            )}
          </div>

          <div className="mt-3 flex items-start gap-4">
            <span
              className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden
                         rounded-xl border border-line bg-white p-1.5"
            >
              <img
                src={job.logo}
                alt=""
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </span>

            <div className="min-w-0">
              <h3 className="text-lg sm:text-xl">{job.role}</h3>
              <p className="mt-0.5 text-sm text-muted">
                {job.company} · {job.summary}
              </p>
            </div>
          </div>

          <ul className="mt-5 space-y-2.5 sm:pl-[3.75rem]">
            {job.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed text-muted"
              >
                <span
                  className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-faint"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </ol>
  </Section>
);

export default Experience;
