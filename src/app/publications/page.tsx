import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/motion/Reveal";
import PublicationMarquee from "@/components/PublicationMarquee";
import { profile, publications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Publications — Elia Rezaeian",
  description: "Peer-reviewed publications by Elia Rezaeian.",
};

export default function PublicationsPage() {
  return (
    <div className="flex flex-col gap-16 py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Publications
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            10+ peer-reviewed publications
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            My research spans explainable AI, clinical decision support, and
            human factors in safety-critical systems.
          </p>
          {profile.googleScholarUrl && (
            <a
              href={profile.googleScholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
            >
              View full profile on Google Scholar
              <ArrowUpRight size={16} />
            </a>
          )}
        </Reveal>
      </Container>

      {publications.length > 0 ? (
        <Reveal delay={0.1}>
          <Container>
            <PublicationMarquee publications={publications} />
          </Container>
        </Reveal>
      ) : (
        <Container>
          <Reveal className="rounded-2xl border border-dashed border-border bg-surface-muted p-10 text-center">
            <p className="text-muted">
              The full publication list is being added here. In the
              meantime, feel free to{" "}
              <a
                href={`mailto:${profile.email}`}
                className="font-medium text-primary underline underline-offset-4"
              >
                reach out directly
              </a>{" "}
              for a copy of my CV.
            </p>
          </Reveal>
        </Container>
      )}
    </div>
  );
}
