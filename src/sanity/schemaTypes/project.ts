import { defineArrayMember, defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Proyecto",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Ubicación",
      type: "string",
      description: "Ej: Madrid · Chamberí",
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Viviendas", value: "Viviendas" },
          { title: "Cocinas", value: "Cocinas" },
          { title: "Baños", value: "Baños" },
          { title: "Comerciales", value: "Comerciales" },
          { title: "Oficinas", value: "Oficinas" },
          { title: "Otros", value: "Otros" },
        ],
      },
    }),
    defineField({
      name: "summary",
      title: "Resumen corto",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(280),
    }),
    defineField({
      name: "featured",
      title: "Destacado en inicio",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "coverImage",
      title: "Imagen de portada",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "beforeImage",
      title: "Foto antes (opcional)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "afterImage",
      title: "Foto después (opcional)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "gallery",
      title: "Galería",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "coverImage",
    },
  },
});
