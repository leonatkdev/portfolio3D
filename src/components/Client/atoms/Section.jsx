import Reveal from "./Reveal";

/** Shared section shell: consistent rhythm, anchor target and heading block. */
const Section = ({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  align = "left",
}) => (
  <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
    <div className="container-page">
      {(eyebrow || title) && (
        <Reveal className={align === "center" ? "text-center" : ""}>
          <div
            className={`flex items-center gap-3 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            <span className="h-px w-8 bg-line" aria-hidden="true" />
            <p className="eyebrow">{eyebrow}</p>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl">{title}</h2>

          {description && (
            <p
              className={`mt-4 max-w-2xl text-base leading-relaxed text-muted ${
                align === "center" ? "mx-auto" : ""
              }`}
            >
              {description}
            </p>
          )}
        </Reveal>
      )}

      <div className={eyebrow || title ? "mt-12 sm:mt-16" : ""}>{children}</div>
    </div>
  </section>
);

export default Section;
