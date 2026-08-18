"use client";

import { useEffect, useState } from "react";

export default function SectionNav({
  sections,
}: {
  sections: { id: string; label: string }[];
}) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-120px 0px -70% 0px" },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="sticky top-16 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] gap-6 overflow-x-auto px-6 sm:px-10 lg:px-16">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`whitespace-nowrap border-b-2 py-3 text-sm font-medium transition-colors ${
              active === s.id
                ? "border-primary text-primary"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
