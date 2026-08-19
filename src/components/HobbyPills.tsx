type Hobby = { emoji: string; label: string };

const TONES = ["bg-accent-soft", "bg-primary-soft/25", "bg-surface"];
const TILTS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export default function HobbyPills({ hobbies }: { hobbies: Hobby[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {hobbies.map((hobby, i) => (
        <div
          key={hobby.label}
          className={`flex items-center gap-2.5 rounded-2xl border border-border px-4 py-3 transition-transform duration-300 hover:scale-105 hover:rotate-0 ${
            TONES[i % TONES.length]
          } ${TILTS[i % TILTS.length]}`}
        >
          <span className="text-2xl">{hobby.emoji}</span>
          <span className="whitespace-nowrap text-sm font-semibold text-foreground">
            {hobby.label}
          </span>
        </div>
      ))}
    </div>
  );
}
