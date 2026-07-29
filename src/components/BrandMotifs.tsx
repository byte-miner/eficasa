import { MadridSkyline } from "@/components/MadridSkyline";

type BrandBackdropProps = {
  variant?: "light" | "dark" | "navy";
  className?: string;
  showBlobs?: boolean;
  showDots?: boolean;
  /** Dense hex grid wallpaper — off by default (use sparingly). */
  showHexPattern?: boolean;
  /** Decorative floating hex outlines — off by default. */
  showHexFloat?: boolean;
};

/** Soft brand atmosphere (blobs / dots). Hex wallpaper stays opt-in. */
export function BrandBackdrop({
  variant = "light",
  className = "",
  showBlobs = true,
  showDots = true,
  showHexPattern = false,
  showHexFloat = false,
}: BrandBackdropProps) {
  const pattern =
    variant === "light" ? "hex-pattern-light opacity-30" : "hex-pattern opacity-25";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {showHexPattern && <div className={`absolute inset-0 ${pattern}`} />}
      {showDots && (
        <div
          className={`dot-grid absolute inset-0 ${
            variant === "light" ? "opacity-15" : "opacity-20"
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
      {withSkyline ? (
        /* Landmarks silhouette — avoids the hex-pattern baked into the block strip */
        <>
          <MadridSkyline
            variant="landmarks"
            className="mx-auto h-20 w-full max-w-5xl opacity-80 md:h-28"
          />
          <div className="h-1 w-full bg-[linear-gradient(90deg,var(--navy)_0%,var(--cyan)_50%,var(--green)_100%)]" />
          <div className="h-px w-full bg-cyan/60" />
        </>
      ) : (
        <>
          <div className="h-1 w-full bg-[linear-gradient(90deg,var(--navy)_0%,var(--cyan)_50%,var(--green)_100%)]" />
          <div className="h-px w-full bg-cyan/60" />
        </>
      )}
    </div>
  );
}
