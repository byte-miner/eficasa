import { fallbackProjects, type Project } from "@/lib/projects";
import { client, isSanityConfigured, urlForImage } from "@/lib/sanity/client";

type SanityProject = {
  _id: string;
  title: string;
  slug: string;
  location?: string;
  summary?: string;
  category?: string;
  featured?: boolean;
  coverImage?: unknown;
  gallery?: unknown[];
};

const projectFields = `
  _id,
  title,
  "slug": slug.current,
  location,
  summary,
  category,
  featured,
  coverImage,
  gallery
`;

function mapProject(doc: SanityProject): Project {
  const cover =
    doc.coverImage && typeof doc.coverImage === "object"
      ? urlForImage(doc.coverImage as Parameters<typeof urlForImage>[0])
      : "";

  const gallery =
    doc.gallery
      ?.map((img) =>
        img && typeof img === "object"
          ? urlForImage(img as Parameters<typeof urlForImage>[0])
          : "",
      )
      .filter(Boolean) || [];

  return {
    _id: doc._id,
    title: doc.title,
    slug: doc.slug,
    location: doc.location || "Madrid",
    summary: doc.summary || "",
    category: doc.category || "Otros",
    featured: Boolean(doc.featured),
    coverImage: cover || fallbackProjects[0].coverImage,
    gallery: gallery.length ? gallery : cover ? [cover] : [],
  };
}

export async function getAllProjects(): Promise<Project[]> {
  if (!client || !isSanityConfigured) {
    return fallbackProjects;
  }

  try {
    const docs = await client.fetch<SanityProject[]>(
      `*[_type == "project"] | order(featured desc, _updatedAt desc) { ${projectFields} }`,
    );
    if (!docs?.length) return fallbackProjects;
    return docs.map(mapProject);
  } catch (error) {
    console.error("Sanity getAllProjects error:", error);
    return fallbackProjects;
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getAllProjects();
  const featured = all.filter((p) => p.featured);
  return (featured.length ? featured : all).slice(0, 3);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!client || !isSanityConfigured) {
    return fallbackProjects.find((p) => p.slug === slug) || null;
  }

  try {
    const doc = await client.fetch<SanityProject | null>(
      `*[_type == "project" && slug.current == $slug][0]{ ${projectFields} }`,
      { slug },
    );
    if (!doc) {
      return fallbackProjects.find((p) => p.slug === slug) || null;
    }
    return mapProject(doc);
  } catch (error) {
    console.error("Sanity getProjectBySlug error:", error);
    return fallbackProjects.find((p) => p.slug === slug) || null;
  }
}
