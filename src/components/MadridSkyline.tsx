type MadridSkylineProps = {
  className?: string;
  /**
   * Client silhouettes:
   * - landmarks = grayscale Madrid skyline (Cuatro Torres style)
   * - contact = detailed Madrid landmarks SVG (desktop contact)
   * - contactMobile = grayscale skyline for mobile/tablet contact
   * - block = stylized block skyline strip
   */
  variant?: "landmarks" | "contact" | "contactMobile" | "block";
  /** Invert for visibility on dark backgrounds (keeps grey depth) */
  onDark?: boolean;
};

const srcByVariant = {
  landmarks: "/brand/madrid-silhouette-landmarks.png",
  contact: "/brand/madrid-silhouette-contact.svg?v=4",
  contactMobile: "/images/madrid-silhouette-mobile.png",
  block: "/brand/madrid-silhouette-4.png",
} as const;

/** Soft navy+cyan mix — slight blue brand tint (not flat black). */
const BRAND_SKYLINE_TINT =
  "color-mix(in srgb, var(--navy) 78%, var(--cyan) 22%)";

const aspectByVariant: Partial<Record<keyof typeof srcByVariant, string>> = {
  contact: "1024 / 188",
  contactMobile: "1024 / 478",
};

/** Client-provided Madrid / city silhouettes — exact image assets. */
export function MadridSkyline({
  className = "",
  variant = "landmarks",
  onDark = false,
}: MadridSkylineProps) {
  const src = srcByVariant[variant];
  const brandTint =
    !onDark && (variant === "contact" || variant === "contactMobile");

  // Mask + brand fill keeps a consistent blue tint on SVG and PNG (all breakpoints).
  if (brandTint) {
    return (
      <div
        aria-hidden
        className={`pointer-events-none w-full ${className}`}
        style={{
          aspectRatio: aspectByVariant[variant],
          backgroundColor: BRAND_SKYLINE_TINT,
          opacity: 0.88,
          WebkitMaskImage: `url("${src}")`,
          maskImage: `url("${src}")`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "bottom center",
          maskPosition: "bottom center",
        }}
      />
    );
  }

  const darkClass =
    onDark && variant !== "block" ? "invert opacity-90" : "";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden
      draggable={false}
      className={`pointer-events-none w-full object-contain object-bottom select-none ${darkClass} ${className}`}
    />
  );
}
