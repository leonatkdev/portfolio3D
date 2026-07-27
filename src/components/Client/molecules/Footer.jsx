import { LuArrowUp } from "react-icons/lu";

import { navLinks, profile } from "../constants";
import SocialLinks from "../atoms/SocialLinks";

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-line">
    <div
      className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-60"
      aria-hidden="true"
    />

    <div className="container-page py-14">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <span
              className="grid h-8 w-8 place-items-center rounded-lg bg-ink font-mono
                         text-[11px] font-medium text-bg"
            >
              {profile.initials}
            </span>
            <span className="text-sm font-semibold">{profile.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {profile.role} building web and mobile products. Currently at{" "}
            {profile.currentCompany} and open to interesting work.
          </p>
          <SocialLinks className="mt-6" size="sm" />
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm sm:grid-cols-3 md:grid-cols-2">
            {[...navLinks, { id: "contact", title: "Contact" }].map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-12 flex flex-col-reverse items-start gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite
          and Tailwind CSS.
        </p>

        <a
          href="#top"
          className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-ink"
        >
          Back to top
          <span className="grid h-7 w-7 place-items-center rounded-full border border-line">
            <LuArrowUp className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
