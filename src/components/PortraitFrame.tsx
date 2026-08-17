import Image from "next/image";
import { User } from "lucide-react";

export default function PortraitFrame({
  src,
  alt,
  size = 128,
}: {
  src?: string;
  alt: string;
  size?: number;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="rounded-2xl border border-border object-cover"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-dashed border-border bg-surface-muted text-center"
      style={{ width: size, height: size }}
    >
      <User size={22} className="text-muted" />
      <span className="px-3 text-[11px] leading-tight text-muted">
        Add your photo
      </span>
    </div>
  );
}
