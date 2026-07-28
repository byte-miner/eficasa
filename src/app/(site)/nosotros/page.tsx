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

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nosotros"
        title="Una empresa de reformas con identidad propia"
        description="EFICASA nace para ofrecer reformas que no solo se ven bien: funcionan mejor, consumen menos y se sienten pensadas para quien las habita."
      />

      <section className="section-pad relative overflow-hidden bg-white">
        <BrandBackdrop variant="light" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Nuestra propuesta"
              title="Inteligentes y ecológicas, de verdad"
              description="Trabajamos en Madrid ayudando a particulares y negocios a transformar espacios con criterio técnico, sensibilidad estética y una comunicación cercana."
            />
            <ul className="mt-8 space-y-4 text-sm text-muted">
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 hex-clip bg-cyan" />
                Planificación clara y seguimiento durante toda la obra.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 hex-clip bg-green" />
                Materiales y soluciones pensadas para durar y ahorrar energía.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 hex-clip bg-navy" />
                Acabados modernos alineados con la identidad visual de EFICASA.
              </li>
            </ul>
          </div>
          <div className="img-frame relative mx-auto w-full max-w-md">
            <div className="dot-grid absolute -top-4 -right-4 h-28 w-28 opacity-40" />
            <div
              aria-hidden
              className="float-hex absolute -bottom-3 -left-3 h-16 w-16 border border-cyan/40 hex-clip"
            />
            <div className="relative z-10 aspect-square overflow-hidden border border-cyan/30 bg-greige">
              <Image
                src="/brand/EFICASA-Logo-Horizontal-Positivo.jpg"
                alt="Logo EFICASA"
                fill
                className="object-contain p-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden bg-navy text-white">
        <BrandBackdrop variant="navy" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            light
            eyebrow="Cómo trabajamos"
            title="Un proceso sencillo y transparente"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Escucha y visita",
                text: "Entendemos su necesidad, el espacio y el resultado que busca.",
              },
              {
                step: "02",
                title: "Propuesta clara",
                text: "Definimos alcance, materiales y plazos con total transparencia.",
              },
              {
                step: "03",
                title: "Ejecución y entrega",
                text: "Coordinamos la obra y cuidamos cada detalle hasta el final.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="border-t-2 border-transparent pt-6"
                style={{
                  borderImage:
                    "linear-gradient(90deg, var(--cyan), var(--green)) 1",
                }}
              >
                <p className="text-[11px] font-bold tracking-[0.2em] text-cyan uppercase">
                  {item.step}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-white/65">{item.text}</p>
              </div>
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
