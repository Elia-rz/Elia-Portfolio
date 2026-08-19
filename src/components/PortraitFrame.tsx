import Image from "next/image";
import { User } from "lucide-react";

export default function PortraitFrame({
  src,
  alt,
  width,
  height,
  border = true,
  className = "",
}: {
  src?: string;
  alt: string;
  width: number;
  height: number;
  border?: boolean;
  className?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 1024px) 480px, 100vw"
        className={`h-auto w-full rounded-2xl ${border ? "border border-border" : ""} ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-surface-muted text-center ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <User size={32} className="text-muted" />
      <span className="px-4 text-sm leading-tight text-muted">
        Add your photo
      </span>
    </div>
  );
}
