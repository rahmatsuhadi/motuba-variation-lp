import Image from "next/image";
import type { PhotoAspectRatio } from "@/data/workshop";

const ASPECT_CLASS_MAP: Record<PhotoAspectRatio, string> = {
  "4/3": "aspect-[4/3]",
  "16/10": "aspect-[16/10]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
};

interface WorkshopPhotoFrameProps {
  slotCode: string;
  imageSrc: string | null;
  placeholderSrc: string;
  alt: string;
  aspectRatio: PhotoAspectRatio;
  aspectLabel: string;
  width: number;
  height: number;
  sizes: string;
  isHero?: boolean;
  placeholderHint: string;
}

export function WorkshopPhotoFrame({
  slotCode,
  imageSrc,
  placeholderSrc,
  alt,
  aspectRatio,
  aspectLabel,
  width,
  height,
  sizes,
  isHero = false,
  placeholderHint,
}: WorkshopPhotoFrameProps) {
  const isPlaceholder = imageSrc === null;
  const resolvedSrc = imageSrc ?? placeholderSrc;
  const aspectClass = ASPECT_CLASS_MAP[aspectRatio];

  return (
    <div
      className={
        isPlaceholder
          ? "overflow-hidden rounded-[4px] border border-dashed border-ink-muted bg-surface"
          : "overflow-hidden rounded-[4px] border border-ink bg-surface"
      }
    >
      <div className="flex items-center justify-between gap-2 border-b border-ink-muted/40 bg-canvas px-3 py-2 text-xs">
        <span className="font-mono font-medium text-accent">{slotCode}</span>
        <span className="font-mono text-ink-muted">
          {isPlaceholder ? `Placeholder ${aspectLabel}` : `Foto ${aspectLabel}`}
        </span>
      </div>

      <div
        className={`relative w-full overflow-hidden bg-surface ${aspectClass}`}
      >
        <Image
          src={resolvedSrc}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          fetchPriority={isHero ? "high" : undefined}
          loading={isHero ? "eager" : "lazy"}
          unoptimized={resolvedSrc.endsWith(".svg")}
          className="h-full w-full object-cover"
        />
      </div>

      {isPlaceholder ? (
        <div className="border-t border-ink-muted/40 bg-canvas px-3 py-2 text-xs text-ink-muted">
          {placeholderHint}
        </div>
      ) : null}
    </div>
  );
}
