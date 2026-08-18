"use client";

import { motion } from "framer-motion";
import AnimatedStat from "./motion/AnimatedStat";

export default function BarChart({
  title,
  unit,
  bars,
}: {
  title: string;
  unit: string;
  bars: { label: string; value: number }[];
}) {
  const max = Math.max(...bars.map((b) => b.value));

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <p className="text-xs font-medium uppercase tracking-wide text-muted">
        {title}
      </p>
      <div className="mt-8 flex items-end gap-3 sm:gap-5">
        {bars.map((bar, i) => (
          <div key={bar.label} className="flex flex-1 flex-col items-center gap-3">
            <span className="font-serif text-lg text-primary sm:text-xl">
              <AnimatedStat value={`${bar.value}${unit}`} />
            </span>
            <div className="flex h-40 w-full items-end rounded-md bg-surface-muted">
              <motion.div
                className="w-full rounded-md bg-primary"
                initial={{ height: 0 }}
                whileInView={{ height: `${(bar.value / max) * 100}%` }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <span className="text-center text-[11px] leading-tight text-muted">
              {bar.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
