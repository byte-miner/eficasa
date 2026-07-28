import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden bg-navy"
    >
      <Image
        src={project.coverImage}
        alt={project.title}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-navy/35 transition group-hover:bg-navy/55" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center text-white opacity-0 transition group-hover:opacity-100">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-cyan uppercase">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-lg font-bold md:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 text-xs text-white/75">{project.location}</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-4 transition group-hover:opacity-0">
        <h3 className="font-display text-sm font-semibold text-white md:text-base">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
