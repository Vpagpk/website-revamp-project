"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageSkeleton } from "./image-skeleton";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  aspectRatio?: "square" | "video" | "card" | "hero";
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  wrapperClassName,
  priority = false,
  aspectRatio = "card",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Determine wrapper classes based on fill usage
  const wrapperClasses = cn(
    "relative overflow-hidden",
    fill ? "absolute inset-0 w-full h-full" : undefined,
    wrapperClassName
  );

  return (
    <div className={wrapperClasses}>
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <ImageSkeleton aspectRatio={aspectRatio} className="w-full h-full" />
        </div>
      )}
      
      {hasError ? (
        <div className={cn(
          "flex items-center justify-center bg-zinc-800 text-zinc-400",
          fill ? "absolute inset-0" : "w-full h-full"
        )}>
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-2 bg-zinc-700 rounded-full flex items-center justify-center">
              📷
            </div>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          className={cn(
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
            className
          )}
          priority={priority}
          sizes={sizes}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          loading={priority ? "eager" : "lazy"}
        />
      )}
    </div>
  );
}