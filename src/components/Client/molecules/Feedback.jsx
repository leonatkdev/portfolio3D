import { LuQuote } from "react-icons/lu";

import { testimonials } from "../constants";
import Section from "../atoms/Section";
import Reveal from "../atoms/Reveal";

const Feedback = () => (
  <Section id="testimonials" eyebrow="Kind words" title="What people say">
    <div className="grid gap-5 md:grid-cols-3">
      {testimonials.map((item, index) => (
        <Reveal key={item.name} delay={index * 0.06}>
          <figure className="card flex h-full flex-col p-7">
            <LuQuote className="h-5 w-5 text-accent" aria-hidden="true" />

            <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink">
              {item.quote}
            </blockquote>

            <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
              <span
                className="grid h-9 w-9 place-items-center rounded-full bg-subtle
                           font-mono text-xs text-muted"
                aria-hidden="true"
              >
                {item.name.slice(0, 2).toUpperCase()}
              </span>
              <span className="text-sm font-medium">{item.name}</span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Feedback;
