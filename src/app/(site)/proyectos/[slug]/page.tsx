import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/sanity/queries";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Proyecto" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="relative overflow-hidden bg-navy pt-12 pb-20 text-white">
      <div className="relative mx-auto max-w-5xl px-4 md:px-6">
        <Link
          href="/proyectos"
          className="text-xs font-bold tracking-[0.14em] text-cyan uppercase hover:text-white"
        >
          ← Volver a proyectos
        </Link>

        <div className="relative mt-6 aspect-[16/9] overflow-hidden border border-cyan/30">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 960px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="text-[11px] tracking-[0.16em] text-cyan uppercase">
              {project.category} · {project.location}
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold md:text-4xl">
              {project.title}
            </h1>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70">
          {project.summary}
        </p>

        {project.gallery.length > 0 && (
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {project.gallery.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden border border-cyan/20">
                <Image
                  src={src}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 border border-cyan/25 bg-navy-deep/60 p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold">
            ¿Quiere un resultado similar?
          </h2>
          <p className="mt-2 text-white/65">
            Solicite presupuesto y le orientamos sobre plazos y opciones.
          </p>
          <Link href="/contacto" className="btn-primary mt-5">
            Pedir presupuesto
          </Link>
        </div>
      </div>
    </article>
  );
}
