import Image from "next/image";
import Link from "next/link";
import { BrandBackdrop, BrandDivider } from "@/components/BrandMotifs";
import { CompanyVideo } from "@/components/CompanyVideo";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { IntroReveal } from "@/components/IntroReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getFeaturedProjects } from "@/lib/sanity/queries";
import { services } from "@/lib/site";

const serviceImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80",
];

export default async function HomePage() {
  const featured = await getFeaturedProjects();

  return (
    <>
      <Hero />

      <IntroReveal />

      {/* Service image cards */}
      <section className="relative overflow-hidden bg-navy pb-4">
        <BrandBackdrop variant="navy" showDots={false} />
        <div className="relative grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href="/servicios"
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={serviceImages[i % serviceImages.length]}
                alt={service.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-navy/55 transition group-hover:bg-navy/70" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-3 border border-cyan/0 transition group-hover:border-cyan/50"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                <h3 className="font-display text-lg font-bold tracking-[0.12em] text-white uppercase md:text-xl">
                  {service.title}
                </h3>
              </div>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-[linear-gradient(90deg,var(--cyan),var(--green))] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>
        <p className="relative px-4 py-8 text-center text-sm text-cyan/80 md:text-base">
          ¡Usted pone el espacio, nosotros nos encargamos de todo el proceso!
        </p>
      </section>

      {/* Value props */}
      <section className="section-pad relative overflow-hidden bg-white">
        <BrandBackdrop variant="light" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_1.2fr]">
            <SectionHeading
              eyebrow="Por qué EFICASA"
              title="Reformas con criterio técnico y sensibilidad estética"
              description="Combinamos planificación, materiales de calidad y soluciones inteligentes para que su proyecto se ejecute con claridad y confianza."
            />
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/servicios" className="btn-ghost-dark">
                Ver servicios
              </Link>
              <Link href="/contacto" className="btn-primary">
                Pedir presupuesto
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Diseño a medida",
                text: "Cada espacio se adapta a su estilo de vida o a la identidad de su negocio.",
                image:
                  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
              },
              {
                title: "Enfoque inteligente",
                text: "Eficiencia energética, confort y tecnología útil sin complicaciones.",
                image:
                  "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80",
              },
              {
                title: "Ejecución transparente",
                text: "Comunicación clara, plazos definidos y acabados profesionales.",
                image:
                  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className="group relative flex h-full flex-col overflow-hidden bg-white shadow-[0_8px_30px_rgba(45,52,136,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(45,52,136,0.12)]"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 z-[2] border border-transparent transition group-hover:border-cyan/50"
                  style={{
                    borderImage:
                      "linear-gradient(135deg, var(--cyan), var(--lime), var(--green)) 1",
                  }}
                />
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-navy/20" />
                  <span className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center bg-green text-[11px] font-bold tracking-[0.12em] text-white hex-clip">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="relative flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-display text-xl font-semibold text-navy md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video presentación */}
      <section className="relative overflow-hidden bg-greige">
        <BrandBackdrop variant="light" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="mb-10 text-center md:mb-12">
            <SectionHeading
              align="center"
              eyebrow="Conócenos"
              title="Presentación"
            />
          </div>
          <CompanyVideo src="/videos/presentacion-eficasa.mp4" />
        </div>
      </section>

      {/* Projects gallery */}
      <section className="section-pad relative overflow-hidden bg-navy text-white">
        <BrandBackdrop variant="navy" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              light
              eyebrow="Proyectos"
              title="Proyectos de reformas"
              description="Una selección de reformas con el nivel de acabado que buscamos en cada obra."
            />
            <Link href="/proyectos" className="btn-ghost-cyan">
              Ver portafolio
            </Link>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featured.slice(0, 3).map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
