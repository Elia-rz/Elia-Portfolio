import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { Publication } from "@/lib/data";
import { venueInitials } from "@/lib/venueInitials";

function VenueImage({ pub }: { pub: Publication }) {
  if (pub.logoUrl) {
    return (
      <div className="flex h-36 w-full items-center justify-center border-b border-border bg-white p-4">
        <Image
          src={pub.logoUrl}
          alt={pub.venue}
          width={240}
          height={128}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="flex h-36 w-full flex-col items-center justify-center gap-1.5 border-b border-dashed border-border bg-accent-soft">
      <ImagePlus size={20} className="text-primary/60" />
      <span className="text-sm font-semibold tracking-tight text-primary">
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
      className="flex h-[380px] w-[300px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5"
    >
      <VenueImage pub={pub} />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="line-clamp-3 font-serif text-lg leading-snug text-foreground">
          {pub.title}
        </h3>
        <p className="line-clamp-1 text-sm leading-relaxed text-muted">
          {pub.authors}
        </p>
        <p className="mt-auto line-clamp-1 text-xs font-medium uppercase tracking-wide text-muted">
          {pub.venue} · {pub.year}
        </p>
      </div>
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
