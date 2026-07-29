import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

function DotCluster({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`grid grid-cols-3 gap-1.5 ${className}`}>
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={i}
          className="h-1 w-1 rounded-full bg-white/55 shadow-[0_0_6px_rgba(91,200,224,0.55)]"
        />
      ))}
    </div>
  );
}

function SoftHex({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div aria-hidden className={`hex-clip ${className}`} style={style} />
  );
}

type HeroAtmosphereProps = {
  /** Shorter inner-page heroes use a tighter accent layout. */
  compact?: boolean;
  /** Unique SVG paint-server prefix when multiple atmospheres could coexist. */
  idPrefix?: string;
  /** Optional full-bleed photo behind the brand overlays. */
  backgroundImage?: string;
  backgroundAlt?: string;
  children?: ReactNode;
  className?: string;
};

/** Shared homepage-style hero plane: radial depth, waves, angled hexes, dots. */
export function HeroAtmosphere({
  compact = false,
  idPrefix = "hero",
  backgroundImage,
  backgroundAlt = "",
  children,
  className = "",
}: HeroAtmosphereProps) {
  const waveFill = `${idPrefix}WaveFill`;
  const stroke = `${idPrefix}Stroke`;
  const glow = `${idPrefix}Glow`;
  const hasPhoto = Boolean(backgroundImage);

  return (
    <div className={`relative overflow-hidden text-white ${className}`}>
      {hasPhoto && (
        <Image
          src={backgroundImage!}
          alt={backgroundAlt}
          fill
          priority
          className="z-0 object-cover object-center"
          sizes="100vw"
        />
      )}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: hasPhoto
            ? "linear-gradient(115deg, rgba(8,26,56,0.78) 0%, rgba(18,58,114,0.68) 48%, rgba(12,39,80,0.74) 100%)"
            : "radial-gradient(ellipse 90% 70% at 50% 35%, #1a5fa0 0%, #123a72 42%, #0c2750 72%, #081a38 100%)",
        }}
      />
      <div
        aria-hidden
        className={`absolute inset-0 z-[1] ${hasPhoto ? "opacity-40" : "opacity-70"}`}
        style={{
          background:
            "linear-gradient(115deg, transparent 20%, rgba(91,200,224,0.12) 48%, transparent 78%)",
        }}
      />

      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id={waveFill} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5bc8e0" stopOpacity="0.22" />
            <stop offset="55%" stopColor="#3aadcc" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#5cb246" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id={stroke} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5bc8e0" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#c5d92a" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#5cb246" stopOpacity="0.8" />
          </linearGradient>
          <filter id={glow} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M980 520 L1085 560 L1085 650 L980 690 L875 650 L875 560 Z"
          fill="rgba(12,39,80,0.55)"
          stroke="rgba(91,200,224,0.18)"
          strokeWidth="2"
          strokeLinejoin="round"
          transform="rotate(-18 980 605)"
        />
        <path
          d="M1180 300 L1260 335 L1260 410 L1180 445 L1100 410 L1100 335 Z"
          fill="rgba(26,95,160,0.35)"
          stroke="rgba(91,200,224,0.15)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          transform="rotate(14 1180 372)"
        />
        <path
          d="M220 480 L300 515 L300 590 L220 625 L140 590 L140 515 Z"
          fill="none"
          stroke="rgba(91,200,224,0.22)"
          strokeWidth="1.75"
          strokeLinejoin="round"
          transform="rotate(-28 220 552)"
        />
        <path
          d="M720 140 L780 170 L780 230 L720 260 L660 230 L660 170 Z"
          fill="rgba(12,39,80,0.28)"
          stroke="rgba(91,200,224,0.12)"
          strokeWidth="1.25"
          strokeLinejoin="round"
          transform="rotate(26 720 200)"
        />

        <path
          d="M-80 180 C120 80 280 220 420 160 C560 100 640 40 820 90 C980 130 1100 200 1280 140 C1380 110 1480 160 1520 200 L1520 420 C1380 360 1200 400 1040 360 C880 320 760 280 600 340 C420 410 260 380 80 440 C0 460 -40 420 -80 400 Z"
          fill={`url(#${waveFill})`}
          filter={`url(#${glow})`}
        />
        <path
          d="M-40 260 C160 180 300 300 460 250 C620 200 740 120 900 170 C1060 220 1200 280 1400 230"
          stroke={`url(#${stroke})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.75"
          filter={`url(#${glow})`}
        />
        <path
          d="M40 620 C220 540 380 680 560 600 C740 520 900 480 1080 540 C1220 580 1340 520 1480 560"
          stroke="rgba(91,200,224,0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M200 120 C340 200 480 80 640 160 C780 230 920 140 1100 180"
          stroke="rgba(197,217,42,0.25)"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {!compact && (
          <path
            d="M1280 720 C1340 680 1420 700 1440 760 C1460 820 1400 880 1320 870 C1240 860 1220 760 1280 720 Z"
            fill="#c5d92a"
            opacity="0.85"
          />
        )}
      </svg>

      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="float-hex-slow absolute top-[18%] left-[8%] hidden h-24 w-24 md:block lg:left-[12%]">
          <SoftHex
            className="h-full w-full -rotate-[18deg] bg-navy-deep/40"
            style={{ boxShadow: "inset 0 0 0 1.5px rgba(91,200,224,0.28)" }}
          />
        </div>
        <div className="float-hex absolute right-[10%] bottom-[18%] hidden h-28 w-28 lg:block xl:right-[12%] xl:h-32 xl:w-32">
          <SoftHex
            className="h-full w-full rotate-[22deg] bg-[#0c2750]/50"
            style={{ boxShadow: "inset 0 0 0 1.5px rgba(91,200,224,0.2)" }}
          />
        </div>
        <SoftHex className="absolute right-[5%] bottom-[10%] h-14 w-14 -rotate-[12deg] bg-lime/90 shadow-[0_0_28px_rgba(197,217,42,0.45)] md:h-16 md:w-16" />
        <SoftHex
          className="absolute top-[38%] right-[24%] hidden h-20 w-20 rotate-[8deg] bg-transparent lg:block"
          style={{ boxShadow: "inset 0 0 0 1.5px rgba(91,200,224,0.35)" }}
        />

        <DotCluster className="absolute top-[20%] left-[26%] hidden opacity-70 md:grid" />
        <DotCluster className="absolute top-[48%] right-[28%] hidden opacity-60 lg:grid" />
        {!compact && (
          <DotCluster className="absolute bottom-[30%] left-[40%] opacity-50" />
        )}
      </div>

      {children}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[6]">
        <div className="h-1 w-full bg-lime/80" />
        <div className="h-px w-full bg-cyan" />
      </div>
    </div>
  );
}
