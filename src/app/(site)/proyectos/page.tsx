import type { Metadata } from "next";
import { BrandBackdrop } from "@/components/BrandMotifs";
import { PageHero } from "@/components/PageHero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { getAllProjects } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Galería de proyectos de reformas y construcción de EFICASA en Madrid.",
};

export const revalidate = 60;

export default async function ProyectosPage() {
  const projects = await getAllProjects();

  return (
    <>
      <PageHero
        align="center"
        eyebrow="Proyectos"
        title="Proyectos de reformas"
        description="Explore trabajos recientes. Pronto podrá añadir aquí sus propias fotos reales desde el panel de administración."
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
        backgroundAlt="Interior residencial reformado con acabados modernos"
      />

      <section className="relative overflow-hidden bg-navy px-4 pb-20 md:px-6">
        <BrandBackdrop variant="navy" showBlobs={false} />
        <div className="relative mx-auto max-w-7xl pt-10">
          <ProjectGallery projects={projects} />
        </div>
      </section>
    </>
  );
}
