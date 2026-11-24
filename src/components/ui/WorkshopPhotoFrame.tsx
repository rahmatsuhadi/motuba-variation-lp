import Image from "next/image";

interface WorkshopPhotoFrameProps {
  imageSrc: string;
  alt: string;
  aspectRatio?: "4/3" | "16/10";
  width: number;
  height: number;
  sizes: string;
  isHero?: boolean;
  objectPosition?: string;
  className?: string;
}

const ASPECT_CLASS_MAP = {
  "4/3": "aspect-[4/3]",
  "16/10": "aspect-[16/10]",
} as const;

export function WorkshopPhotoFrame({
  imageSrc,
  alt,
  aspectRatio = "4/3",
  width,
  height,
  sizes,
  isHero = false,
  objectPosition,
  className = "",
}: WorkshopPhotoFrameProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[6px] bg-asphalt-elevated ${ASPECT_CLASS_MAP[aspectRatio]} ${className}`}
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        preload={isHero}
        fetchPriority={isHero ? "high" : undefined}
        loading={isHero ? undefined : "lazy"}
        style={objectPosition ? { objectPosition } : undefined}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
