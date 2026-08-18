import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Container from "@/components/Container";
import Tag from "@/components/Tag";
import Reveal from "@/components/motion/Reveal";
import AnimatedStat from "@/components/motion/AnimatedStat";
import { caseStudies } from "@/lib/data";

function Figure({
  figure,
}: {
  figure: { src: string; alt: string; caption: string };
}) {
  return (
    <Reveal className="flex flex-col gap-3">
      <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-white">
        <Image
          src={figure.src}
          alt={figure.alt}
          width={1700}
          height={2200}
          sizes="(min-width: 1024px) 800px, 100vw"
          className="h-auto w-full"
        />
      </div>
      <p className="text-sm text-muted">{figure.caption}</p>
    </Reveal>
  );
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} — Elia Rezaeian`,
    description: study.subtitle,
  };
}

const metaFields = (study: (typeof caseStudies)[number]) => [
  { label: "Timeline", value: study.timeline },
  { label: "Team", value: study.team },
  { label: "Role", value: study.role },
  { label: "Audience", value: study.audience },
];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((s) => s.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <section className="border-b border-border bg-surface-muted">
        <Container className="py-16 sm:py-20">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft size={15} />
            All case studies
          </Link>

          <Reveal delay={0.05} className="mt-6 flex flex-col gap-5">
            {study.status === "ongoing" && (
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                In progress
              </span>
            )}
            <h1 className="max-w-3xl font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              {study.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              {study.subtitle}
            </p>
          </Reveal>

          <Reveal
            delay={0.15}
            className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {metaFields(study).map((field) => (
              <div key={field.label} className="flex flex-col gap-1">
                <span className="text-xs font-medium uppercase tracking-wide text-muted">
                  {field.label}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {field.value}
                </span>
              </div>
            ))}
          </Reveal>

          <div className="mt-6 flex flex-wrap gap-2">
            {study.tools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        </Container>
      </section>

      <Container className="flex flex-col gap-16 py-16 sm:py-20">
        {/* Overview */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[160px_1fr]">
          <Reveal>
            <h2 className="font-serif text-xl text-foreground">Overview</h2>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-4 text-[17px] leading-relaxed text-foreground/90">
            {study.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </section>

        {/* Problem */}
        {study.problem && (
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-[160px_1fr]">
            <Reveal>
              <h2 className="font-serif text-xl text-foreground">Problem</h2>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col gap-4 text-[17px] leading-relaxed text-foreground/90">
              {study.problem.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
          </section>
        )}

        {/* Goals */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[160px_1fr]">
          <Reveal>
            <h2 className="font-serif text-xl text-foreground">Goals</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {study.goals.map((goal, i) => (
              <Reveal key={goal.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-border bg-surface p-5">
                  <h3 className="text-sm font-semibold text-primary">
                    {goal.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {goal.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[160px_1fr]">
          <Reveal>
            <h2 className="font-serif text-xl text-foreground">Process</h2>
          </Reveal>
          <ol className="flex flex-col">
            {study.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06} y={16} scale={1}>
                <li className="flex gap-5 border-b border-border py-5 first:pt-0 last:border-b-0 last:pb-0">
                  <span className="font-serif text-xl text-primary-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-medium text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
          {study.processFigure && (
            <div className="lg:col-start-2">
              <Figure figure={study.processFigure} />
            </div>
          )}
        </section>

        {/* Results */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[160px_1fr]">
          <Reveal>
            <h2 className="font-serif text-xl text-foreground">
              Results &amp; Impact
            </h2>
          </Reveal>
          <div className="flex flex-col gap-8">
            <Reveal>
              <p className="text-[17px] leading-relaxed text-foreground/90">
                {study.results.intro}
              </p>
            </Reveal>

            <Reveal
              delay={0.1}
              className="grid grid-cols-1 gap-6 rounded-2xl border border-border bg-surface-muted p-8 sm:grid-cols-3"
            >
              {study.results.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-serif text-3xl text-primary">
                    <AnimatedStat value={stat.value} />
                  </span>
                  <span className="text-sm text-muted">{stat.label}</span>
                </div>
              ))}
            </Reveal>

            <div className="flex flex-col gap-4 text-[17px] leading-relaxed text-foreground/90">
              {study.results.narrative.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {study.resultsFigure && <Figure figure={study.resultsFigure} />}
          </div>
        </section>

        {/* Quotes */}
        {study.quotes && study.quotes.length > 0 && (
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-[160px_1fr]">
            <Reveal>
              <h2 className="font-serif text-xl text-foreground">
                In their words
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {study.quotes.map((quote, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-surface-muted p-6">
                    <Quote size={20} className="text-primary-soft" />
                    <p className="font-serif text-lg italic leading-snug text-foreground">
                      "{quote.text}"
                    </p>
                    <p className="mt-auto text-sm text-muted">
                      {quote.attribution}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </Container>

      {/* Next case study */}
      <section className="border-t border-border bg-surface-muted">
        <Container className="flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Next case study
            </p>
            <h2 className="mt-2 font-serif text-2xl text-foreground">
              {next.title}
            </h2>
          </div>
          <Link
            href={`/work/${next.slug}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-strong"
          >
            Read case study
            <ArrowRight size={16} />
          </Link>
        </Container>
      </section>
    </>
  );
}
