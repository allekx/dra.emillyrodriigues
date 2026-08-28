import { preload } from "react-dom";
import { getImageProps } from "next/image";
import { cn } from "@/lib/cn";

/* SVGs não passam pelo otimizador; fotos raster usam getImageProps (img nativo). */
/* eslint-disable @next/next/no-img-element */

type SharedProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
};

type FillProps = SharedProps & {
  fill: true;
  width?: never;
  height?: never;
};

type SizedProps = SharedProps & {
  fill?: false;
  width: number;
  height: number;
};

type MediaImageProps = FillProps | SizedProps;

function isSvg(src: string) {
  return src.split("?")[0]?.toLowerCase().endsWith(".svg") ?? false;
}

export function MediaImage(props: MediaImageProps) {
  const {
    src,
    alt,
    className,
    priority = false,
    sizes,
    quality = 75,
  } = props;

  const loading = priority ? "eager" : props.fill ? "lazy" : "eager";
  const fetchPriority = priority ? "high" : "auto";

  if (priority && isSvg(src)) {
    preload(src, { as: "image", fetchPriority: "high" });
  }

  if (isSvg(src)) {
    if (props.fill) {
      return (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          decoding="async"
          loading={loading}
          fetchPriority={fetchPriority}
          className={cn("absolute inset-0 size-full", className)}
        />
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        width={props.width}
        height={props.height}
        decoding="async"
        loading={loading}
        fetchPriority={fetchPriority}
        className={className}
      />
    );
  }

  if (props.fill) {
    const { props: imageProps } = getImageProps({
      src,
      alt,
      fill: true,
      sizes: sizes ?? "100vw",
      className,
      priority,
      quality,
    });

    return <img {...imageProps} alt={alt} />;
  }

  const { props: imageProps } = getImageProps({
    src,
    alt,
    width: props.width,
    height: props.height,
    sizes,
    className,
    priority,
    quality,
    loading,
  });

  return <img {...imageProps} alt={alt} />;
}
