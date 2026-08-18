import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { Publication } from "@/lib/data";
import { venueInitials } from "@/lib/venueInitials";

function VenueImage({ pub }: { pub: Publication }) {
  if (pub.logoUrl) {
    return (
      <Image
        src={pub.logoUrl}
        alt={pub.venue}
        width={48}
        height={48}
        className="h-12 w-12 shrink-0 rounded-xl border border-border bg-white object-contain p-1"
      />
    );
  }

  return (
    <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-0.5 rounded-xl border border-dashed border-border bg-accent-soft">
      <ImagePlus size={13} className="text-primary/60" />
      <span className="text-[9px] font-semibold tracking-tight text-primary">
        {venueInitials(pub.venue)}
      </span>
    </div>
  );
}

function scholarSearchUrl(title: string) {
  return `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;
}

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <a
      href={pub.url ?? scholarSearchUrl(pub.title)}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-[270px] w-[300px] shrink-0 flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5"
    >
      <div className="flex items-start justify-between gap-3">
        <VenueImage pub={pub} />
        <span className="text-right text-xs font-medium uppercase leading-snug tracking-wide text-muted">
          {pub.venue} · {pub.year}
        </span>
      </div>
      <h3 className="line-clamp-3 font-serif text-lg leading-snug text-foreground">
        {pub.title}
      </h3>
      <p className="mt-auto line-clamp-2 text-sm leading-relaxed text-muted">
        {pub.authors}
      </p>
    </a>
  );
}

export default function PublicationMarquee({
  publications,
}: {
  publications: Publication[];
}) {
  return (
    <div className="marquee-viewport -mx-6 sm:-mx-10 lg:-mx-16">
      <div className="marquee-track items-stretch gap-6 py-2 pl-6 sm:pl-10 lg:pl-16">
        {[...publications, ...publications].map((pub, i) => (
          <PublicationCard key={i} pub={pub} />
        ))}
      </div>
    </div>
  );
}
