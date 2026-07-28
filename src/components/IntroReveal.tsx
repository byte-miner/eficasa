"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BrandBackdrop } from "@/components/BrandMotifs";

export function IntroReveal() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative mt-10 overflow-hidden md:mt-24">
      <BrandBackdrop variant="light" showHexFloat />
      <div className="relative mx-auto grid max-w-7xl overflow-hidden lg:grid-cols-2">
        <div
          className={`relative flex flex-col justify-center px-6 py-16 transition-all duration-1000 ease-out md:px-12 lg:py-24 ${
            visible
              ? "translate-x-0 opacity-100"
              : "-translate-x-16 opacity-0 lg:-translate-x-24"
          }`}
        >
          <div className="relative max-w-xl">
            <div
              aria-hidden
              className="mb-5 h-1 w-16 bg-[linear-gradient(90deg,var(--cyan),var(--green))]"
            />
            <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-cyan-dark uppercase">
              Identidad EFICASA
            </p>
            <h2 className="gold-underline font-display text-3xl font-bold text-navy md:text-3xl">
              Reformas, diseño y construcción
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted md:text-lg">
              Combinamos planificación, materiales de calidad y soluciones
              inteligentes para que su proyecto se ejecute con claridad y
              confianza. Reformas inteligentes y ecológicas en Madrid.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Desde la planificación inicial hasta la ejecución final, creamos
              espacios que reflejan su estilo de vida o la identidad de su
              negocio.
            </p>
            <Link href="/proyectos" className="btn-ghost-dark mt-8">
              Ver proyectos
            </Link>
          </div>
        </div>

        <div
          className={`relative min-h-[320px] p-4 transition-all duration-1000 ease-out delay-100 md:p-8 lg:min-h-full ${
            visible
              ? "translate-x-0 opacity-100"
              : "translate-x-16 opacity-0 lg:translate-x-24"
          }`}
        >
          {/* Organic frame like client arte */}
          <div className="relative h-full min-h-[280px] overflow-hidden shadow-[0_20px_50px_rgba(45,52,136,0.18)] lg:min-h-[420px]">
            <div
              aria-hidden
              className="absolute inset-0 z-[1]"
              style={{ borderRadius: "42% 58% 55% 45% / 48% 42% 58% 52%" }}
            />
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
              alt="Obra en proceso"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div
            aria-hidden
            className="float-hex absolute top-6 right-6 hidden h-16 w-16 border border-lime/60 bg-navy/10 hex-clip md:block"
          />
        </div>
      </div>
    </section>
  );
}
