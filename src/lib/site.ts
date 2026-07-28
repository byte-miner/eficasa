export const siteConfig = {
  name: "EFICASA",
  tagline: "Reformas y Soluciones Inteligentes",
  description:
    "Empresa de reformas y construcción en Madrid. Reformas inteligentes y ecológicas para viviendas, locales y oficinas.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://eficasa.es",
  locale: "es_ES",
  address: {
    street: "Calle de las Minas 4",
    postalCode: "28004",
    city: "Madrid",
    region: "Madrid",
    country: "España",
    full: "Calle de las Minas 4, 28004 Madrid, España",
  },
  // Placeholders until client provides final contact data
  phone: process.env.NEXT_PUBLIC_PHONE || "+34 600 000 000",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+34 600 000 000",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "34600000000",
  email: process.env.NEXT_PUBLIC_EMAIL || "info@eficasa.es",
  hours: "Lunes a Viernes · 9:00 – 19:00",
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "https://instagram.com/",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK || "",
  },
};

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const services = [
  {
    slug: "reformas-integrales",
    title: "Reformas integrales",
    summary:
      "Transformamos viviendas completas con planificación, materiales de calidad y acabados premium.",
    description:
      "Desde la redistribución de espacios hasta la instalación de sistemas inteligentes, coordinamos cada fase de su reforma integral en Madrid para que el resultado sea funcional, eficiente y a medida.",
  },
  {
    slug: "cocinas-y-banos",
    title: "Cocinas y baños",
    summary:
      "Diseño y ejecución de cocinas y baños modernos, prácticos y duraderos.",
    description:
      "Renovamos cocinas y baños con un enfoque en ergonomía, iluminación, eficiencia hídrica y materiales resistentes. Ideal para ganar confort y valor en su hogar.",
  },
  {
    slug: "locales-y-oficinas",
    title: "Locales y oficinas",
    summary:
      "Reformas comerciales pensadas para la experiencia del cliente y la operativa del negocio.",
    description:
      "Adaptamos locales comerciales y oficinas a la identidad de su marca: distribución, imagen, instalaciones y plazos pensados para minimizar el impacto en su actividad.",
  },
  {
    slug: "soluciones-inteligentes",
    title: "Soluciones inteligentes",
    summary:
      "Domótica, eficiencia energética y sistemas conectados para un hogar más eficiente.",
    description:
      "Integramos tecnología de forma útil: iluminación inteligente, climatización eficiente, control de consumos y prepación para un hogar conectado, sin complicaciones.",
  },
] as const;
