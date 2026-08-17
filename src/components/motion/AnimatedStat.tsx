"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function parseValue(raw: string) {
  const match = raw.match(/^([+-]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, sign, number, suffix] = match;
  return {
    sign,
    target: parseFloat(number),
    decimals: number.includes(".") ? number.split(".")[1].length : 0,
    suffix,
  };
}

export default function AnimatedStat({
  value,
  duration = 1200,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(() => {
    const parsed = parseValue(value);
    return parsed ? `${parsed.sign}${parsed.decimals ? "0.00" : "0"}${parsed.suffix}` : value;
  });

  useEffect(() => {
    if (!inView) return;
    const parsed = parseValue(value);
    if (!parsed) {
      setDisplay(value);
      return;
    }

    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = parsed.target * eased;
      const formatted = parsed.decimals
        ? current.toFixed(parsed.decimals)
        : Math.round(current).toString();
      setDisplay(`${parsed.sign}${formatted}${parsed.suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return <span ref={ref}>{display}</span>;
}
