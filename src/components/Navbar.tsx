"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg font-medium tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          Elia Rezaeian
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-primary ${
                  active ? "text-primary font-medium" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="sm:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-background sm:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2.5 text-sm text-foreground hover:bg-surface-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
