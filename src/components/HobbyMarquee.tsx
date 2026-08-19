type Hobby = { emoji: string; label: string };

export default function HobbyMarquee({ hobbies }: { hobbies: Hobby[] }) {
  return (
    <div className="marquee-viewport -mx-6 sm:-mx-10 lg:-mx-16">
      <div className="marquee-track marquee-track-reverse gap-4 py-2 pl-6 sm:pl-10 lg:pl-16">
        {[...hobbies, ...hobbies].map((hobby, i) => (
          <div
            key={i}
            className={`flex shrink-0 items-center gap-3 rounded-full border border-border px-6 py-4 ${
              i % 2 === 0 ? "bg-surface" : "bg-accent-soft"
            }`}
          >
            <span className="text-2xl">{hobby.emoji}</span>
            <span className="whitespace-nowrap text-sm font-medium text-foreground">
              {hobby.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
