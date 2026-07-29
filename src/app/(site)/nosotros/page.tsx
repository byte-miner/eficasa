import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandBackdrop } from "@/components/BrandMotifs";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conozca EFICASA: reformas inteligentes y ecológicas en Madrid con un enfoque moderno y profesional.",
};

const proposalImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80";
const processBg =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80";
const processSteps = [
  {
    step: "01",
    title: "Escucha y visita",
    text: "Entendemos su necesidad, el espacio y el resultado que busca.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    step: "02",
    title: "Propuesta clara",
    text: "Definimos alcance, materiales y plazos con total transparencia.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    step: "03",
    title: "Ejecución y entrega",
    text: "Coordinamos la obra y cuidamos cada detalle hasta el final.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  },
] as const;

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nosotros"
        title="Una empresa de reformas con identidad propia"
        description="EFICASA nace para ofrecer reformas que no solo se ven bien: funcionan mejor, consumen menos y se sienten pensadas para quien las habita."
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
        backgroundAlt="Vivienda moderna reformada al atardecer"
      />

      {/* Nuestra propuesta — clean split like reference, brand colors */}
      <section className="relative overflow-hidden bg-greige">
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:gap-14 md:px-10 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="max-w-xl">
            <div
              aria-hidden
              className="mb-8 h-px w-14 bg-navy md:mb-10"
            />
            <div className="space-y-5 text-[15px] leading-relaxed text-navy/80 md:text-base md:leading-[1.75]">
              <p>
                Trabajamos en Madrid ayudando a particulares y negocios a
                transformar espacios con criterio técnico, sensibilidad estética
                y una comunicación cercana.
              </p>
              <p>
                Planificación clara y seguimiento durante toda la obra.
                Materiales y soluciones pensadas para durar y ahorrar energía.
              </p>
              <p>
                Acabados modernos alineados con la identidad visual de EFICASA:
                reformas inteligentes y ecológicas, de verdad.
              </p>
            </div>
            <Link href="/servicios" className="btn-primary mt-10 inline-flex">
              Ver nuestros servicios
            </Link>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden lg:max-w-none lg:justify-self-end">
            <Image
              src={proposalImage}
              alt="Interior reformado con diseño contemporáneo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 42vw"
              priority
            />
          </div>
        </div>
      </section>


      <section className="section-pad relative overflow-hidden text-white">
        <Image
          src={processBg}
          alt=""
          aria-hidden
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(8,26,56,0.92) 0%, rgba(45,52,136,0.88) 55%, rgba(12,39,80,0.9) 100%)",
          }}
        />
        <BrandBackdrop variant="navy" showBlobs={false} />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            light
            eyebrow="Cómo trabajamos"
            title="Un proceso sencillo y transparente"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((item) => (
              <article
                key={item.step}
                className="group overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-navy/35" />
                  <span className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center bg-green text-[11px] font-bold tracking-[0.12em] text-white hex-clip">
                    {item.step}
                  </span>
                </div>
                <div className="border-t border-transparent p-6 pt-5"
                  style={{
                    borderImage:
                      "linear-gradient(90deg, var(--cyan), var(--green)) 1",
                  }}
                >
                  <h3 className="font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/contacto" className="btn-primary">
              Empezar mi proyecto
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/45">
            Sede: {siteConfig.address.full}
          </p>
        </div>
      </section>
    </>
  );
}
