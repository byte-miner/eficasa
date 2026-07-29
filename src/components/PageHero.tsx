import type { ReactNode } from "react";
import { HeroAtmosphere } from "@/components/HeroAtmosphere";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Full-bleed background photo (Unsplash / CDN). */
  backgroundImage: string;
  backgroundAlt?: string;
  children?: ReactNode;
};

/** Inner-page hero — homepage atmosphere + photo background, no silhouettes. */
export function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
  backgroundImage,
  backgroundAlt = "",
  children,
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <HeroAtmosphere
      compact
      idPrefix="pageHero"
      backgroundImage={backgroundImage}
      backgroundAlt={backgroundAlt}
      className="flex min-h-[22rem] items-center py-20 md:min-h-[28rem] md:py-24 lg:min-h-[40rem] lg:py-28"
    >
      <div
        className={`relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6 ${
          centered ? "text-center" : ""
        }`}
      >
        <p className="fade-up text-xs font-semibold tracking-[0.28em] text-cyan uppercase sm:text-sm">
          {eyebrow}
        </p>
        <h1
          className={`fade-up mt-4 font-display text-4xl leading-tight font-bold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl ${
            centered ? "mx-auto max-w-4xl" : "max-w-3xl"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`fade-up-delay mt-6 text-base leading-relaxed text-white/85 sm:text-lg md:text-xl ${
              centered ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </HeroAtmosphere>
  );
}
