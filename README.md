# EFICASA — Web corporativa

Sitio a medida para EFICASA (reformas inteligentes y ecológicas, Madrid).

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · Sanity CMS · Vercel

## Arranque local

```bash
cd eficasa
cp .env.example .env.local
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Panel CMS (cuando Sanity esté configurado): [http://localhost:3000/studio](http://localhost:3000/studio).

## Variables de entorno

Vea `.env.example`. Lo esencial:

| Variable | Uso |
|----------|-----|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Proyecto Sanity |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset (por defecto `production`) |
| `NEXT_PUBLIC_WHATSAPP` | Número WhatsApp sin `+` (ej. `34600111222`) |
| `NEXT_PUBLIC_PHONE` / `EMAIL` | Datos de contacto |
| `RESEND_API_KEY` | Envío real del formulario (opcional en local) |

Sin Sanity configurado, la galería usa proyectos de demostración (Unsplash).

## Configurar Sanity (una vez)

1. Cree un proyecto en [sanity.io/manage](https://www.sanity.io/manage).
2. Copie el Project ID a `.env.local`.
3. `npm run dev` y abra `/studio`.
4. Cree documentos **Proyecto**, súbalos y publique.
5. Invite al cliente como Editor en Sanity.

Guía para el cliente: [`docs/guia-subir-proyectos.md`](docs/guia-subir-proyectos.md).

## Despliegue (Vercel)

1. Importe el repo en Vercel (root directory: `eficasa` si el monorepo es el padre).
2. Añada las mismas variables de entorno.
3. En Sanity → API → CORS: permita el dominio de Vercel y el dominio final.
4. Apunte el dominio (DNS) cuando el cliente lo elija.

## Estructura

```
src/app/(site)/     Páginas públicas (inicio, servicios, proyectos, nosotros, contacto)
src/app/studio/     Sanity Studio embebido
src/components/     UI
src/lib/            Config sitio + queries Sanity
src/sanity/         Schemas CMS
public/brand/       Logos e identidad
```

## SEO incluido

- Metadata / Open Graph
- `sitemap.xml` y `robots.txt`
- JSON-LD `HomeAndConstructionBusiness` (Madrid, Calle de las Minas 4)
- Imágenes optimizadas (`next/image`)

## Fuera de esta fase

- Calculadora de presupuestos (acordada para más adelante)
- Gestión de Google Ads / SEM
- Fotos reales del cliente (se suben vía Studio cuando las tenga)
