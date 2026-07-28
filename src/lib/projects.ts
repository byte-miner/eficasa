export type Project = {
  _id: string;
  title: string;
  slug: string;
  location: string;
  summary: string;
  category: string;
  featured: boolean;
  coverImage: string;
  gallery: string[];
};

/** Fallback projects until Sanity is connected with real content */
export const fallbackProjects: Project[] = [
  {
    _id: "demo-1",
    title: "Reforma integral de vivienda en Chamberí",
    slug: "reforma-integral-chamberi",
    location: "Madrid · Chamberí",
    summary:
      "Redistribución completa, cocina abierta y acabados contemporáneos con mejora de eficiencia energética.",
    category: "Viviendas",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    _id: "demo-2",
    title: "Cocina moderna con isla",
    slug: "cocina-moderna-isla",
    location: "Madrid · Salamanca",
    summary:
      "Cocina a medida con isla de piedra, iluminación LED y almacenaje optimizado.",
    category: "Cocinas",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    _id: "demo-3",
    title: "Reforma de local comercial",
    slug: "reforma-local-comercial",
    location: "Madrid · Centro",
    summary:
      "Transformación de local con identidad visual, iluminación y recorrido de cliente.",
    category: "Comerciales",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    _id: "demo-4",
    title: "Baño spa con ducha a ras de suelo",
    slug: "bano-spa-ducha",
    location: "Madrid · Retiro",
    summary:
      "Baño de inspiración spa con materiales naturales, ducha a ras y storage oculto.",
    category: "Baños",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    _id: "demo-5",
    title: "Oficina abierta y luminosa",
    slug: "oficina-abierta-luminosa",
    location: "Madrid · Chamartín",
    summary:
      "Espacio de trabajo flexible con zonas colaborativas y acabados corporativos.",
    category: "Oficinas",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    _id: "demo-6",
    title: "Salón con carpintería a medida",
    slug: "salon-carpinteria-medida",
    location: "Madrid · Tetuán",
    summary:
      "Salón renovado con almacenamiento integrado, iluminación cálida y materiales nobles.",
    category: "Viviendas",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];
