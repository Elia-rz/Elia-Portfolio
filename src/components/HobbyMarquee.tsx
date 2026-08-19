type Hobby = { emoji: string; label: string };

const TONES = ["bg-accent-soft", "bg-primary-soft/25", "bg-surface"];
const TILTS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];
const LIFTS = ["translate-y-0", "translate-y-1.5", "-translate-y-1.5"];

export default function HobbyMarquee({ hobbies }: { hobbies: Hobby[] }) {
  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div className="marquee-track marquee-track-reverse gap-5 py-4">
        {[...hobbies, ...hobbies].map((hobby, i) => (
          <div
            key={i}
            className={`flex shrink-0 items-center gap-3 rounded-2xl border border-border px-5 py-4 transition-transform duration-300 hover:scale-105 hover:rotate-0 ${
              TONES[i % TONES.length]
            } ${TILTS[i % TILTS.length]} ${LIFTS[i % LIFTS.length]}`}
          >
            <span className="text-3xl">{hobby.emoji}</span>
            <span className="whitespace-nowrap text-sm font-semibold text-foreground">
              {hobby.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
