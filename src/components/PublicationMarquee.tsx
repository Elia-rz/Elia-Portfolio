import Image from "next/image";
import { Publication } from "@/lib/data";
import { venueInitials } from "@/lib/venueInitials";

function VenueBadge({ pub }: { pub: Publication }) {
  if (pub.logoUrl) {
    return (
      <Image
        src={pub.logoUrl}
        alt={pub.venue}
        width={36}
        height={36}
        className="h-9 w-9 rounded-full border border-border bg-white object-contain p-1.5"
      />
    );
  }

  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-[11px] font-semibold tracking-tight text-primary">
      {venueInitials(pub.venue)}
    </span>
  );
}

function PublicationCard({ pub }: { pub: Publication }) {
  const content = (
    <div className="flex h-full w-[300px] shrink-0 flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
      <VenueBadge pub={pub} />
      <h3 className="font-serif text-lg leading-snug text-foreground">
        {pub.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{pub.authors}</p>
      <p className="mt-auto text-xs font-medium uppercase tracking-wide text-muted">
        {pub.venue} · {pub.year}
      </p>
    </div>
  );

  if (pub.url) {
    return (
      <a
        href={pub.url}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return content;
}

export default function PublicationMarquee({
  publications,
}: {
  publications: Publication[];
}) {
  return (
    <div className="marquee-viewport -mx-6 sm:-mx-10 lg:-mx-16">
      <div className="marquee-track gap-6 py-2 pl-6 sm:pl-10 lg:pl-16">
        {[...publications, ...publications].map((pub, i) => (
          <PublicationCard key={i} pub={pub} />
        ))}
      </div>
    </div>
  );
}
