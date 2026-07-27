import {
  LuLayoutDashboard,
  LuServer,
  LuSmartphone,
  LuTerminal,
} from "react-icons/lu";

import { focusAreas, product, profile } from "../constants";
import Section from "../atoms/Section";
import Reveal from "../atoms/Reveal";

const icons = {
  layout: LuLayoutDashboard,
  server: LuServer,
  smartphone: LuSmartphone,
  terminal: LuTerminal,
};

const About = () => (
  <Section
    id="about"
    eyebrow="About"
    title="A developer who cares how it feels to use."
  >
    <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted">
          <p>
            I&apos;m {profile.name.split(" ")[0]}, a software engineer in{" "}
            {profile.location} with {profile.yearsExperience}+ years of
            hands-on full-stack experience, primarily focused on front-end
            engineering. I build scalable, high-performance web and mobile apps
            with TypeScript, React, Next.js, Gatsby.js and React Native.
          </p>
          <p>
            I care about the details that decide whether software feels good:
            clean architecture, fast first loads, interfaces that work with a
            keyboard, and reusable component systems the next person can read.
            At Starlabs I led five internship programmes, which taught me how
            much clarity matters — in code and in conversation.
          </p>
          <p>
            Today I build the front end of a telehealth platform at{" "}
            {profile.currentCompanyFull}. Alongside that I run{" "}
            <a
              href={product.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-ink underline decoration-accent
                         decoration-2 underline-offset-4 hover:text-accent"
            >
              {product.name}
            </a>
            , my own {product.tagline.toLowerCase()} — front end, back end and
            database, localised in Albanian, English and German. The web
            platform is live and the React Native apps for iOS and Android are
            in development.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-8 text-sm">
            {[
              ["Role", profile.roleLong],
              ["Based in", profile.location],
              ["Currently", profile.currentCompanyFull],
              ["Also building", product.name],
              ["Languages", profile.languages],
              ["Availability", profile.available ? "Open to work" : "Booked"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="eyebrow">{label}</dt>
                <dd className="mt-1.5 text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="lg:col-span-7">
        <div className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map((area, index) => {
            const Icon = icons[area.icon];
            return (
              <Reveal key={area.title} delay={index * 0.06}>
                <article className="card group h-full p-6 hover:border-ink/20">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-xl bg-subtle
                               text-ink transition-colors duration-300
                               group-hover:bg-accent group-hover:text-accent-contrast"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <h3 className="mt-5 text-base">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  </Section>
);

export default About;
