import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import CaseStudyCard from "@/components/CaseStudyCard";
import Reveal from "@/components/motion/Reveal";
import AnimatedStat from "@/components/motion/AnimatedStat";
import { profile, caseStudies } from "@/lib/data";

const readouts = [
  { label: "DIAGNOSTIC LIFT", value: "+18pt" },
  { label: "CLINICIANS STUDIED", value: "28" },
  { label: "PUBLICATIONS", value: "10+" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <Container className="grid grid-cols-1 gap-14 py-20 sm:py-28 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              {profile.title}
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.12] text-foreground sm:text-6xl">
              {profile.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Hi, I&apos;m {profile.name.split(" ")[0]} — a Human Factors
              Scientist and UX Researcher working at the intersection of AI,
              safety, and human decision-making.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-primary-strong"
              >
                View case studies
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-md border border-border bg-surface p-6">
              {readouts.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-baseline justify-between py-4 ${
                    i !== readouts.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-xs tracking-wide text-muted">
                    {stat.label}
                  </span>
                  <span className="font-mono text-xl font-semibold text-primary">
                    <AnimatedStat value={stat.value} />
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Featured work */}
      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-10">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.1}>
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* About teaser */}
      <section className="border-t border-border bg-surface-muted">
        <Container className="py-20">
          <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
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
              className="inline-flex shrink-0 items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              More about me
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
