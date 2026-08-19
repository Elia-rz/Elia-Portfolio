import Image from "next/image";
import { User } from "lucide-react";

export default function PortraitFrame({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl border border-border ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 480px, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-surface-muted text-center ${className}`}
    >
      <User size={32} className="text-muted" />
      <span className="px-4 text-sm leading-tight text-muted">
        Add your photo
      </span>
    </div>
  );
}
