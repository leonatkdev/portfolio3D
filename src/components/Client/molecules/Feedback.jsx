import { LuQuote } from "react-icons/lu";
import { useReducedMotion } from "framer-motion";

import { testimonials } from "../constants";
import Section from "../atoms/Section";
import Reveal from "../atoms/Reveal";

const Quote = ({ quote, name }) => (
  <figure className="card flex h-full flex-col p-7">
    <LuQuote className="h-5 w-5 text-accent" aria-hidden="true" />

    <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink">
      {quote}
    </blockquote>

    <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
      <span
        className="grid h-9 w-9 place-items-center rounded-full bg-subtle
                   font-mono text-xs text-muted"
        aria-hidden="true"
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
      <span className="text-sm font-medium">{name}</span>
    </figcaption>
  </figure>
);

/* Static fallback: also what everyone saw before the marquee existed.
   A final card left alone on its row is nudged into the middle column. */
const Grid = () => (
  <div
    className="grid gap-5 md:grid-cols-3
               md:[&>*:last-child:nth-child(3n+1)]:col-start-2"
  >
    {testimonials.map((item, index) => (
      <Reveal key={item.name} delay={index * 0.06}>
        <Quote {...item} />
      </Reveal>
    ))}
  </div>
);

/**
 * Desktop shows one continuously scrolling strip, mobile keeps the plain stack.
 * The track holds two identical runs and slides by -50%, so the second run lands
 * exactly where the first started. Two things keep that seam invisible: the
 * trailing padding must match the gap (otherwise the loop drifts by half a gap),
 * and one run has to stay wider than the page container — at 22rem a card that
 * holds as long as there are three or more testimonials.
 */
const Marquee = () => (
  <div className="md:mask-fade-x md:overflow-hidden">
    <div
      className="flex flex-col gap-5
                 md:w-max md:flex-row md:pr-5 md:animate-marquee
                 md:hover:[animation-play-state:paused]
                 md:focus-within:[animation-play-state:paused]"
    >
      {[...testimonials, ...testimonials].map((item, index) => {
        const isClone = index >= testimonials.length;

        return (
          <div
            key={`${item.name}-${index}`}
            aria-hidden={isClone || undefined}
            className={`md:w-[22rem] md:shrink-0 ${isClone ? "hidden md:block" : ""}`}
          >
            <Quote {...item} />
          </div>
        );
      })}
    </div>
  </div>
);

const Feedback = () => {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="testimonials" eyebrow="Kind words" title="What people say">
      {reduceMotion ? (
        <Grid />
      ) : (
        <Reveal>
          <Marquee />
        </Reveal>
      )}
    </Section>
  );
};

export default Feedback;
