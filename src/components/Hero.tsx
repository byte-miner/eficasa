"use client";

import Link from "next/link";
import { HexagonFrame } from "@/components/HexagonFrame";
import { MadridSkyline } from "@/components/MadridSkyline";

const kitchenLeft =
  "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=900&q=80";
const kitchenRight =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80";

export function Hero() {
  return (
    <section className="relative flex min-h-[78svh] items-center justify-center overflow-hidden text-white md:min-h-[calc(100svh-var(--site-header-height))]">
      {/* Brand gradient plane */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      {/* Organic brand shapes (arte-like, not template blocks) */}
      <div
        aria-hidden
        className="fluid-blob absolute -top-[18%] -left-[12%] h-[55%] w-[48%] bg-navy-deep/55 blur-[1px]"
      />
      <div
        aria-hidden
        className="fluid-blob absolute top-[8%] -right-[16%] h-[48%] w-[42%] bg-cyan/20"
      />
      <div
        aria-hidden
        className="fluid-blob absolute -bottom-[22%] left-[18%] h-[50%] w-[55%] bg-green/15"
      />
      <div
        aria-hidden
        className="pulse-glow absolute top-1/2 left-1/2 h-[min(70vw,520px)] w-[min(70vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-3xl"
      />

      <div aria-hidden className="hex-pattern absolute inset-0 opacity-40" />
      <div aria-hidden className="dot-grid absolute inset-0 opacity-25" />

      {/* Decorative hex outlines */}
      <div
        aria-hidden
        className="float-hex pointer-events-none absolute top-[12%] left-[8%] hidden h-20 w-20 border border-cyan/40 hex-clip md:block"
      />
      <div
        aria-hidden
        className="float-hex-slow pointer-events-none absolute top-[22%] right-[10%] hidden h-14 w-14 bg-lime/25 hex-clip md:block"
      />
      <div
        aria-hidden
        className="float-hex pointer-events-none absolute bottom-[28%] right-[6%] hidden h-24 w-24 border border-green/35 hex-clip lg:block"
      />

      {/* Side kitchen frames — gather from both sides */}
      <div className="pointer-events-none absolute inset-0 z-[5]">
        <div className="slide-in-left absolute bottom-[20%] left-[-6%] opacity-80 sm:left-[2%] sm:opacity-100 lg:bottom-[18%] lg:left-[4%] xl:left-[7%]">
          <HexagonFrame
            src={kitchenLeft}
            alt="Cocina reformada"
            size="md"
            className="scale-75 sm:scale-90 lg:scale-100"
            priority
          />
        </div>
        <div className="slide-in-right absolute top-[10%] right-[-4%] opacity-80 sm:right-[2%] sm:opacity-100 lg:top-[14%] lg:right-[5%] xl:right-[8%]">
          <HexagonFrame
            src={kitchenRight}
            alt="Interior moderno"
            size="sm"
            className="scale-90 lg:scale-100"
            priority
          />
        </div>
        <div className="slide-in-right absolute right-[10%] bottom-[24%] hidden xl:right-[18%] lg:block">
          <HexagonFrame
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Vivienda contemporánea"
            size="sm"
          />
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-16 text-center md:py-20">
        <h1 className="fade-up font-display text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
          Soluciones inteligentes
          <br className="hidden sm:block" /> y ecológicas
        </h1>
        <p className="fade-up-delay-2 mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
          Reformas de viviendas, locales y oficinas con el sello EFICASA:
          tecnología, eficiencia y diseño propio.
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

      {/* Madrid silhouette — brand differentiator from tarjetas */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[6]">
        <div className="h-1 w-full bg-lime/80" />
        <div className="h-px w-full bg-cyan" />
        <MadridSkyline className="h-16 w-full text-navy-deep/55 md:h-24" />
      </div>
    </section>
  );
}
