import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandBackdrop, BrandDivider } from "@/components/BrandMotifs";
import { MadridSkyline } from "@/components/MadridSkyline";
import { PageHero } from "@/components/PageHero";
import { services, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Reformas integrales, cocinas y baños, locales, oficinas y soluciones inteligentes en Madrid.",
};

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
];

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Construcción y reforma con visión integral"
        description="Acompañamos su proyecto desde la idea inicial hasta la entrega, con un enfoque práctico, estético y eficiente."
        backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
        backgroundAlt="Obra de reforma y construcción en curso"
      />

      <section className="relative overflow-hidden bg-white">
        <BrandBackdrop variant="light" showBlobs={false} />
        {services.map((service, index) => {
          const imageRight = index % 2 === 1;
          const image = (
            <div className="relative min-h-[320px] md:min-h-[480px] lg:min-h-[560px] xl:min-h-[620px]">
              <Image
                src={images[index % images.length]}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cyan/20"
              />
            </div>
          );
          const content = (
            <div className="relative flex flex-col justify-center px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
              <span className="flex h-10 w-10 items-center justify-center bg-green text-[11px] font-bold tracking-[0.12em] text-white hex-clip">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="gold-underline mt-4 font-display text-2xl font-bold text-navy md:text-3xl">
                {service.title}
              </h2>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          );

          return (
            <div key={service.slug}>
              <article className="relative grid md:grid-cols-2 md:items-stretch">
                {imageRight ? (
                  <>
                    {content}
                    {image}
                  </>
                ) : (
                  <>
                    {image}
                    {content}
                  </>
                )}
              </article>
              {index < services.length - 1 && (
                <div className="h-px bg-[linear-gradient(90deg,transparent,var(--cyan),var(--green),transparent)]" />
              )}
            </div>
          );
        })}
      </section>

      <section className="relative overflow-hidden bg-greige">
        <BrandBackdrop variant="light" />
        {/* Full-bleed Madrid silhouette — anchored to bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
          <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
            <MadridSkyline
              variant="contactMobile"
              className="!h-auto !w-full max-w-none object-contain object-bottom lg:hidden"
            />
            <MadridSkyline
              variant="contact"
              className="!h-auto !w-full max-w-none object-contain object-bottom hidden lg:block"
            />
          </div>
        </div>
        <div className="relative z-10 flex min-h-[26rem] flex-col items-center justify-center px-5 py-14 md:min-h-[30rem] md:px-8 md:py-16 lg:min-h-[34rem]">
          <div className="mx-auto max-w-3xl text-center">
            <div
              aria-hidden
              className="mx-auto mb-4 h-1 w-16 bg-[linear-gradient(90deg,var(--cyan),var(--green))]"
            />
            <h2 className="font-display text-2xl font-bold tracking-wide text-navy uppercase md:text-3xl">
              ¿No está seguro de por dónde empezar?
            </h2>
            <p className="mt-3 text-muted">
              Cuéntenos su caso y le orientamos sin compromiso. También puede
              escribirnos por WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contacto" className="btn-primary">
                Pedir presupuesto
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                className="btn-ghost-dark"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <BrandDivider className="relative z-10" />
      </section>
    </>
  );
}
