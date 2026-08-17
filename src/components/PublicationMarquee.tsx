import { BookOpen } from "lucide-react";
import { Publication } from "@/lib/data";

function PublicationCard({ pub }: { pub: Publication }) {
  const content = (
    <div className="flex h-full w-[300px] shrink-0 flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-primary">
        <BookOpen size={16} />
      </span>
      <h3 className="font-serif text-lg leading-snug text-foreground">
        {pub.title}
      </h3>
      {pub.note && (
        <p className="text-sm leading-relaxed text-muted">{pub.note}</p>
      )}
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
