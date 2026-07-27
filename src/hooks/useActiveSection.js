import { useEffect, useState } from "react";

/**
 * Highlights the nav item for whichever section currently owns the upper
 * third of the viewport.
 */
export const useActiveSection = (ids) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -66% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};
