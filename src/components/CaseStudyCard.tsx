import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CaseStudy } from "@/lib/data";
import Tag from "./Tag";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group flex flex-col justify-between gap-6 rounded-2xl border border-border bg-surface p-8 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">
            {study.timeline}
          </span>
          {study.status === "ongoing" && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              In progress
            </span>
          )}
        </div>
        <h3 className="font-serif text-2xl leading-snug text-foreground">
          {study.title}
        </h3>
        <p className="text-[15px] leading-relaxed text-muted">
          {study.subtitle}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {study.tools.slice(0, 3).map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
          Read case study
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
