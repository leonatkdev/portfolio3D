import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuMenu, LuX } from "react-icons/lu";

import { navLinks, profile } from "../constants";
import { useActiveSection } from "../../../hooks/useActiveSection";
import ThemeToggle from "../atoms/ThemeToggle";
import ScrollProgress from "../atoms/ScrollProgress";

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = useMemo(() => navLinks.map((link) => link.id), []);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet on Escape and lock the page behind it.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event) => event.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <ScrollProgress />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70]
                   focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm
                   focus:text-accent-contrast"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || menuOpen
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav
          className="container-page flex h-16 items-center justify-between gap-4"
          aria-label="Primary"
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight"
          >
            <span
              className="grid h-8 w-8 place-items-center rounded-lg bg-ink font-mono
                         text-[11px] font-medium text-bg"
            >
              {profile.initials}
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200 ${
                      isActive ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-subtle"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="btn-primary hidden sm:inline-flex">
              Get in touch
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid h-9 w-9 place-items-center rounded-full border border-line
                         bg-surface text-ink md:hidden"
            >
              {menuOpen ? (
                <LuX className="h-4 w-4" />
              ) : (
                <LuMenu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-line bg-bg md:hidden"
            >
              <ul className="container-page flex flex-col py-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setMenuOpen(false)}
                      className={`block border-b border-line/70 py-3.5 text-base transition-colors ${
                        activeId === link.id ? "text-ink" : "text-muted"
                      }`}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
                <li className="pt-4">
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="btn-primary w-full"
                  >
                    Get in touch
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default NavigationBar;
