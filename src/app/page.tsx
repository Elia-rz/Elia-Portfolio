import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import CaseStudyCard from "@/components/CaseStudyCard";
import { profile, caseStudies } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <Container className="flex flex-col gap-8 py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {profile.title}
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-[1.15] text-foreground sm:text-5xl">
            {profile.tagline}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Hi, I&apos;m {profile.name.split(" ")[0]} — a Human Factors Scientist
            and UX Researcher working at the intersection of AI, safety, and
            human decision-making.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-strong"
            >
              View case studies
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted"
            >
              Get in touch
            </Link>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-surface-muted">
        <Container className="grid grid-cols-1 gap-8 py-14 sm:grid-cols-3">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-serif text-4xl text-primary">
                {stat.value}
              </span>
              <span className="text-sm text-muted">{stat.label}</span>
            </div>
          ))}
        </Container>
      </section>

      {/* Featured work */}
      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Featured work
              </p>
              <h2 className="mt-2 font-serif text-3xl text-foreground">
                Research that shapes how AI earns trust
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary"
            >
              All case studies
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Container>
      </section>

      {/* About teaser */}
      <section className="border-t border-border bg-surface-muted">
        <Container className="flex flex-col gap-8 py-20 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              About me
            </p>
            <p className="mt-3 font-serif text-2xl leading-snug text-foreground">
              {profile.bio[0]}
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            More about me
            <ArrowRight size={16} />
          </Link>
        </Container>
      </section>
    </>
  );
}
