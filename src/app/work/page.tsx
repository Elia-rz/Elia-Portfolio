import type { Metadata } from "next";
import Container from "@/components/Container";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies — Elia Rezaeian",
  description:
    "Research case studies on trustworthy, explainable AI in clinical and everyday decision-making contexts.",
};

export default function WorkPage() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Case studies
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Research that shapes how AI earns trust
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          A closer look at how I design and evaluate AI systems — from
          high-stakes clinical decision support to everyday wellness
          guidance.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </Container>
  );
}
