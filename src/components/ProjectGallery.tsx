"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/lib/projects";

const filters = ["Todo", "Viviendas", "Cocinas", "Baños", "Comerciales", "Oficinas"] as const;

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("Todo");

  const filtered = useMemo(() => {
    if (active === "Todo") return projects;
    return projects.filter((p) => p.category === active);
  }, [active, projects]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((filter) => {
          const isActive = active === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`px-4 py-2 text-sm transition ${
                isActive
                  ? "bg-greige font-semibold text-charcoal"
                  : "text-white/65 hover:text-white"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-white/60">
          No hay proyectos en esta categoría todavía.
        </p>
      )}
    </div>
  );
}
