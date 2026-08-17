import type { Metadata } from "next";
import { Mail, ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import Reveal from "@/components/motion/Reveal";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Elia Rezaeian",
  description: "Get in touch with Elia Rezaeian.",
};

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: profile.linkedin,
    icon: LinkedinIcon,
  },
];

export default function ContactPage() {
  return (
    <Container className="py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Contact
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Let&apos;s talk research, design, or trustworthy AI.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Whether you&apos;re hiring, collaborating on research, or just want
          to talk shop — I&apos;d love to hear from you.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {channels.map((channel, i) => (
          <Reveal key={channel.label} delay={i * 0.1}>
            <a
              href={channel.href}
              target={channel.label === "LinkedIn" ? "_blank" : undefined}
              rel={
                channel.label === "LinkedIn"
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-muted text-primary">
                  <channel.icon size={20} />
                </span>
                <div>
                  <p className="text-sm font-medium text-muted">
                    {channel.label}
                  </p>
                  <p className="text-[15px] font-medium text-foreground">
                    {channel.value}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
