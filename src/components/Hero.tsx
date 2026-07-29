"use client";

import Image from "next/image";
import Link from "next/link";
import { HexagonFrame } from "@/components/HexagonFrame";
import { HeroAtmosphere } from "@/components/HeroAtmosphere";
import { siteConfig } from "@/lib/site";

const kitchenLeft =
  "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=900&q=80";
const kitchenRight =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80";

export function Hero() {
  return (
    <HeroAtmosphere
      idPrefix="homeHero"
      className="flex min-h-[80svh] items-center justify-center md:min-h-[calc(100svh-var(--site-header-height))]"
    >
      {/* Soft rounded hex photo frames — tilted for visual variety
      <div className="pointer-events-none absolute inset-0 z-[5] max-md:opacity-40">
        <div className="slide-in-left absolute bottom-[22%] left-[-2%] sm:left-[2%] md:bottom-[20%] md:left-[4%] lg:left-[6%] xl:left-[8%]">
          <div className="-rotate-[9deg]">
            <HexagonFrame
              src={kitchenLeft}
              alt="Cocina reformada"
              size="lg"
              priority
            />
          </div>
        </div>
        <div className="slide-in-right absolute top-[12%] right-[-2%] sm:right-[2%] md:top-[14%] md:right-[4%] lg:right-[6%] xl:right-[8%]">
          <div className="rotate-[11deg]">
            <HexagonFrame
              src={kitchenRight}
              alt="Interior moderno"
              size="md"
              priority
            />
          </div>
        </div>
      </div> */}

      {/* Center — brand */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-16 text-center md:py-20">
        <div
          className="fade-up relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28 md:h-32 md:w-32"
          style={{
            filter: "drop-shadow(0 10px 28px rgba(12, 39, 80, 0.55))",
          }}
        >
          <div
            aria-hidden
            className="hex-clip absolute inset-[6%] translate-x-1.5 translate-y-2 bg-navy-deep/70"
          />
          <div
            aria-hidden
            className="hex-clip absolute inset-[3%] translate-x-1 translate-y-1 bg-[#163a6e]/80"
          />
          <div
            className="hex-clip absolute inset-0 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(145deg, var(--green) 0%, var(--lime) 42%, var(--cyan) 100%)",
            }}
          >
            <Image
              src="/brand/isologo-positivo.png"
              alt=""
              aria-hidden
              width={96}
              height={96}
              className="h-[62%] w-[62%] object-contain brightness-0 invert"
              priority
            />
          </div>
        </div>

        <h1 className="fade-up mt-5 font-display text-5xl leading-none font-bold tracking-[0.06em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)] sm:text-6xl md:text-7xl lg:text-8xl">
          {siteConfig.name}
        </h1>
        <p className="fade-up-delay mt-3 text-xs font-semibold tracking-[0.32em] text-cyan uppercase sm:text-sm md:text-base">
          Reformas y Soluciones Inteligentes
        </p>
        <p className="fade-up-delay mx-auto mt-7 max-w-4xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-3xl">
          Reformas de viviendas, locales y oficinas con tecnología, eficiencia y
          diseño propio en Madrid.
        </p>
        <div className="fade-up-delay-2 mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link href="/contacto" className="btn-primary">
            Pedir presupuesto
          </Link>
          <Link href="/proyectos" className="btn-ghost-cyan">
            Ver proyectos
          </Link>
        </div>
      </div>
    </HeroAtmosphere>
  );
}
