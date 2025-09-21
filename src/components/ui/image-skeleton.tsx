import { cn } from "@/lib/utils";

interface ImageSkeletonProps {
  className?: string;
  aspectRatio?: "square" | "video" | "card" | "hero";
}

export function ImageSkeleton({ className, aspectRatio = "card" }: ImageSkeletonProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video", 
    card: "aspect-[4/3]",
    hero: "aspect-[16/9]"
  };

  return (
    <div 
      className={cn(
        "animate-pulse bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 bg-size-200 animate-shimmer rounded-lg",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <div className="flex items-center justify-center h-full">
        <div className="w-8 h-8 rounded-full bg-zinc-600 animate-pulse"></div>
      </div>
    </div>
  );
}

export function TextSkeleton({ className, lines = 1 }: { className?: string; lines?: number }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i}
          className="h-4 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 bg-size-200 animate-shimmer rounded"
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </div>
  );
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("border border-zinc-800 rounded-lg p-6 space-y-4", className)}>
      <ImageSkeleton aspectRatio="card" />
      <TextSkeleton lines={2} />
      <div className="flex justify-between items-center">
        <TextSkeleton className="w-1/3" />
        <div className="w-16 h-8 bg-zinc-800 rounded animate-pulse" />
      </div>
    </div>
  );
}