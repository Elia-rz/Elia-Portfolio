"use client";

import { motion } from "framer-motion";

type Theme = { name: string; subthemes: string[] };
type Category = {
  tone: "accent" | "primary-soft" | "primary";
  name: string;
  themes: Theme[];
};

const HEADER_TONE: Record<Category["tone"], string> = {
  accent: "border-accent bg-accent-soft",
  "primary-soft": "border-primary-soft bg-primary-soft/15",
  primary: "border-primary bg-surface-muted",
};

const BAR_TONE: Record<Category["tone"], string> = {
  accent: "border-l-accent",
  "primary-soft": "border-l-primary-soft",
  primary: "border-l-primary",
};

export default function ThemeFrameworkDiagram({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {categories.map((category, ci) => (
        <motion.div
          key={category.name}
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: ci * 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className={`rounded-xl border-b-2 px-4 py-3 text-center text-sm font-semibold text-foreground ${HEADER_TONE[category.tone]}`}
          >
            {category.name}
          </div>

          <div className="flex flex-col gap-3">
            {category.themes.map((theme, ti) => (
              <motion.div
                key={theme.name}
                className={`rounded-lg border border-border border-l-4 bg-surface p-3.5 ${BAR_TONE[category.tone]}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.4,
                  delay: ci * 0.15 + ti * 0.08 + 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <h4 className="text-sm font-semibold text-foreground">
                  {theme.name}
                </h4>
                {theme.subthemes.length > 0 && (
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    {theme.subthemes.join(" · ")}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
