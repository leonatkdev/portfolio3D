import { stack } from "../constants";
import Section from "../atoms/Section";
import Reveal from "../atoms/Reveal";

const Tech = () => (
  <Section
    id="stack"
    eyebrow="Toolkit"
    title="Technologies I work with"
    description="The tools I reach for day to day — chosen for what they let me ship, not for the logo collection."
  >
    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {stack.map((group, index) => (
        <Reveal key={group.group} delay={(index % 3) * 0.06}>
          <h3 className="eyebrow border-b border-line pb-3">{group.group}</h3>

          <ul className="mt-5 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-surface px-3 py-1.5
                           text-sm text-ink transition-colors duration-200
                           hover:border-accent hover:text-accent"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Tech;
