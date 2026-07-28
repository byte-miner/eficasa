import { MadridSkyline } from "@/components/MadridSkyline";

type BrandBackdropProps = {
  variant?: "light" | "dark" | "navy";
  className?: string;
  showBlobs?: boolean;
  showDots?: boolean;
  showHexFloat?: boolean;
};

/** Shared EFICASA art layer: hex pattern, fluid blobs, floating hexagons. */
export function BrandBackdrop({
  variant = "light",
  className = "",
  showBlobs = true,
  showDots = true,
  showHexFloat = true,
}: BrandBackdropProps) {
  const pattern =
    variant === "light" ? "hex-pattern-light opacity-45" : "hex-pattern opacity-35";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className={`absolute inset-0 ${pattern}`} />
      {showDots && (
        <div
          className={`dot-grid absolute inset-0 ${
            variant === "light" ? "opacity-20" : "opacity-25"
          }`}
        />
      )}

      {showBlobs && variant === "light" && (
        <>
          <div className="fluid-blob absolute -top-[20%] -left-[12%] h-[55%] w-[42%] bg-cyan/10" />
          <div className="fluid-blob absolute -right-[14%] -bottom-[25%] h-[50%] w-[40%] bg-green/10" />
          <div className="fluid-blob absolute top-[30%] right-[20%] h-[28%] w-[22%] bg-navy/5" />
        </>
      )}
      {showBlobs && variant !== "light" && (
        <>
          <div className="fluid-blob absolute -top-[18%] -left-[10%] h-[50%] w-[40%] bg-navy-deep/40" />
          <div className="fluid-blob absolute top-[10%] -right-[12%] h-[42%] w-[36%] bg-cyan/15" />
          <div className="fluid-blob absolute -bottom-[20%] left-[20%] h-[45%] w-[48%] bg-green/10" />
        </>
      )}

      {showHexFloat && (
        <>
          <div className="float-hex absolute top-[12%] right-[6%] hidden h-20 w-20 border border-cyan/35 hex-clip md:block" />
          <div className="float-hex-slow absolute top-[40%] right-[18%] hidden h-12 w-12 bg-lime/20 hex-clip md:block" />
          <div className="float-hex absolute bottom-[14%] left-[5%] hidden h-24 w-24 border border-green/30 hex-clip lg:block" />
        </>
      )}
    </div>
  );
}

type BrandDividerProps = {
  withSkyline?: boolean;
  className?: string;
};

/** Brand accent bar (+ optional Madrid silhouette), from client arte/tarjetas. */
export function BrandDivider({
  withSkyline = false,
  className = "",
}: BrandDividerProps) {
  return (
    <div className={`pointer-events-none relative ${className}`}>
      {withSkyline && (
        <MadridSkyline className="h-12 w-full text-navy/15 md:h-16" />
      )}
      <div className="h-1 w-full bg-[linear-gradient(90deg,var(--navy)_0%,var(--cyan)_50%,var(--green)_100%)]" />
      <div className="h-px w-full bg-cyan/60" />
    </div>
  );
}
