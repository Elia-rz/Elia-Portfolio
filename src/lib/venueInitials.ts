const STOPWORDS = new Set([
  "of",
  "and",
  "the",
  "for",
  "on",
  "in",
  "a",
  "an",
]);

export function venueInitials(venue: string, max = 4): string {
  const words = venue
    .replace(/\(.*?\)/g, "")
    .split(/[\s-]+/)
    .filter((w) => w && !STOPWORDS.has(w.toLowerCase()));

  const initials = words.map((w) => w[0].toUpperCase()).join("");
  return initials.slice(0, max) || venue.slice(0, 2).toUpperCase();
}
