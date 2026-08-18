"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";

type QuoteItem = { text: string; attribution: string };

export default function QuoteCarousel({ quotes }: { quotes: QuoteItem[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || quotes.length <= 1) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused, quotes.length]);

  if (quotes.length === 0) return null;

  return (
    <div
      className="flex flex-col gap-6 rounded-2xl border border-border bg-surface-muted p-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Quote size={24} className="text-primary-soft" />
      <div className="min-h-[7rem] sm:min-h-[5.5rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-serif text-xl italic leading-snug text-foreground sm:text-2xl">
              "{quotes[index].text}"
            </p>
            <p className="mt-3 text-sm text-muted">
              {quotes[index].attribution}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {quotes.length > 1 && (
        <div className="flex gap-2">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show quote ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
