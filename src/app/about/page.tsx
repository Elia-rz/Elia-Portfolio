import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/motion/Reveal";
import PortraitFrame from "@/components/PortraitFrame";
import HobbyPills from "@/components/HobbyPills";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Elia Rezaeian",
  description: profile.tagline,
};

const focusAreas = [
  {
    title: "Trustworthy & Explainable AI",
    description:
      "Studying how transparency and explanation design shape human trust, reliance, and decision-making when working alongside AI.",
  },
  {
    title: "Safety-Critical & Clinical Contexts",
    description:
      "Human factors research in high-stakes environments where cognitive workload, error, and trust calibration carry real consequences.",
  },
  {
    title: "Mixed-Methods Research",
    description:
      "Combining controlled experiments, interviews, and behavioral data to connect what people say with what they actually do.",
  },
  {
    title: "Human-Centered Design",
    description:
      "Translating research insight into concrete design recommendations that stakeholders and engineering teams can act on.",
  },
];

export default function AboutPage() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="flex flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            About me
          </p>
          <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            {profile.name}
          </h1>
          <p className="text-lg text-muted">{profile.title}</p>

          <div className="mt-4 flex flex-col gap-5 text-[17px] leading-relaxed text-foreground/90">
            {profile.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-strong"
            >
              Get in touch
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted"
            >
              See publications
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-5">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Outside of work
              </p>
              <h2 className="mt-2 font-serif text-2xl text-foreground">
                A few things I love
              </h2>
            </div>
            <HobbyPills hobbies={profile.hobbies} />
          </div>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-col gap-6">
          <PortraitFrame
            src={profile.aboutPhotoUrl}
            alt={profile.name}
            width={1620}
            height={2025}
            className="w-full"
          />
          <div className="rounded-2xl border border-border bg-surface-muted p-6">
            <h2 className="font-serif text-lg text-foreground">
              Areas of focus
            </h2>
            <div className="mt-5 flex flex-col gap-5">
              {focusAreas.map((area) => (
                <div key={area.title} className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold text-primary">
                    {area.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
