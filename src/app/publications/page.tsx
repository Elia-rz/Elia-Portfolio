import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/motion/Reveal";
import { profile, publications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Publications — Elia Rezaeian",
  description: "Peer-reviewed publications by Elia Rezaeian.",
};

export default function PublicationsPage() {
  return (
    <Container className="py-20 sm:py-28">
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
      </Reveal>

      <div className="mt-14">
        {publications.length > 0 ? (
          <ul className="flex flex-col">
            {publications.map((pub, i) => (
              <li
                key={i}
                className="flex flex-col gap-1 border-b border-border py-6 first:pt-0 last:border-b-0"
              >
                {pub.url ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg text-foreground hover:text-primary"
                  >
                    {pub.title}
                  </a>
                ) : (
                  <span className="font-serif text-lg text-foreground">
                    {pub.title}
                  </span>
                )}
                <span className="text-sm text-muted">
                  {pub.venue} · {pub.year}
                </span>
              </li>
            ))}
          </ul>
        ) : (
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
        )}
      </div>
    </Container>
  );
}
