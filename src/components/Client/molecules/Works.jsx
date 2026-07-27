import { LuArrowUpRight, LuGithub } from "react-icons/lu";

import { projects } from "../constants";
import Section from "../atoms/Section";
import Reveal from "../atoms/Reveal";

const ProjectMedia = ({ project, className = "" }) => (
  <div
    className={`relative overflow-hidden bg-subtle ${className}`}
    aria-hidden="true"
  >
    {project.art === "icon" ? (
      <div className="grid h-full w-full place-items-center grid-bg p-8">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="h-24 w-24 rounded-2xl bg-white object-contain shadow-lift"
        />
      </div>
    ) : (
      <img
        src={project.image}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform
                   duration-500 group-hover:scale-[1.03]"
      />
    )}
  </div>
);

const ProjectMeta = ({ project }) => (
  <>
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="eyebrow">{project.category}</p>
        <h3 className="mt-2 text-xl">{project.name}</h3>
        {project.status && (
          <p className="mt-2.5 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {project.status}
          </p>
        )}
      </div>
      {project.live && (
        <span
          className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border
                     border-line text-muted transition-all duration-300
                     group-hover:border-transparent group-hover:bg-accent
                     group-hover:text-accent-contrast"
          aria-hidden="true"
        >
          <LuArrowUpRight className="h-4 w-4" />
        </span>
      )}
    </div>

    <p className="mt-3 text-sm leading-relaxed text-muted">
      {project.description}
    </p>

    <ul className="mt-5 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>

    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-medium text-ink
                     underline-offset-4 hover:text-accent hover:underline"
        >
          Visit
          <LuArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-muted
                     underline-offset-4 hover:text-ink hover:underline"
        >
          <LuGithub className="h-3.5 w-3.5" />
          Source
        </a>
      )}
    </div>
  </>
);

const Works = () => (
  <Section
    id="projects"
    eyebrow="Selected work"
    title="Things I've built and shipped"
    description="Extensions, libraries and web apps — each one solved a problem I actually ran into. Live demos and source are linked where available."
  >
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project, index) => {
        if (project.featured) {
          return (
            <Reveal
              key={project.name}
              delay={index * 0.05}
              className="md:col-span-2"
            >
              <article className="card group h-full overflow-hidden hover:border-ink/20">
                <div className="grid md:grid-cols-2">
                  <ProjectMedia
                    project={project}
                    className={`aspect-[16/10] md:aspect-auto md:min-h-[320px] ${
                      index % 2 === 0 ? "md:order-last" : ""
                    }`}
                  />
                  <div className="flex flex-col justify-center p-7 sm:p-9">
                    <ProjectMeta project={project} />
                  </div>
                </div>
              </article>
            </Reveal>
          );
        }

        return (
          <Reveal key={project.name} delay={index * 0.05}>
            <article className="card group flex h-full flex-col overflow-hidden hover:border-ink/20">
              <ProjectMedia project={project} className="aspect-[16/10]" />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <ProjectMeta project={project} />
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>

    <Reveal delay={0.1} className="mt-10 text-center">
      <a
        href="https://github.com/leonatkdev"
        target="_blank"
        rel="noreferrer"
        className="btn-secondary"
      >
        <LuGithub className="h-4 w-4" />
        More on GitHub
      </a>
    </Reveal>
  </Section>
);

export default Works;
