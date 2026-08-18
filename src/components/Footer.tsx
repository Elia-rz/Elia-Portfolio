import Link from "next/link";
import { Mail } from "lucide-react";
import Container from "./Container";
import LinkedinIcon from "./icons/LinkedinIcon";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-primary"
          >
            <Mail size={18} />
          </a>
          <a
            href={profile.linkedin}
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-primary"
          >
            <LinkedinIcon size={18} />
          </a>
          <Link
            href="/contact"
            className="text-sm text-muted transition-colors hover:text-primary"
          >
            Get in touch
          </Link>
        </div>
      </Container>
    </footer>
  );
}
