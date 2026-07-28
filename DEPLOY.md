# Despliegue EFICASA (Vercel + Sanity + dominio)

## 1. Sanity

1. Crear proyecto en https://www.sanity.io/manage
2. Copiar **Project ID** a las variables de entorno
3. En API → CORS origins, añadir:
   - `http://localhost:3000`
   - `https://*.vercel.app`
   - dominio final (ej. `https://eficasa.es`)
4. Invitar al cliente como Editor

## 2. Vercel

1. Importar el repositorio
2. **Root Directory:** `eficasa`
3. Framework: Next.js (auto)
4. Variables de entorno (Production + Preview):

```
NEXT_PUBLIC_SITE_URL=https://eficasa.es
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
NEXT_PUBLIC_PHONE=+34...
NEXT_PUBLIC_PHONE_DISPLAY=+34 ...
NEXT_PUBLIC_WHATSAPP=34...
NEXT_PUBLIC_EMAIL=info@eficasa.es
NEXT_PUBLIC_INSTAGRAM=https://instagram.com/...
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=info@eficasa.es
CONTACT_FROM_EMAIL=EFICASA <web@su-dominio.com>
```

5. Deploy

## 3. Dominio

Cuando el cliente confirme el nombre:

1. Comprar dominio (Namecheap, Google Domains, etc.) o usar el que elija
2. En Vercel → Project → Domains → añadir dominio
3. Configurar DNS según indique Vercel (A / CNAME)
4. Actualizar `NEXT_PUBLIC_SITE_URL` y redesplegar

## 4. Formulario de contacto

Sin `RESEND_API_KEY`, el formulario funciona en local (log en consola) pero no envía email. Para producción:

1. Cuenta en https://resend.com
2. Verificar dominio remitente
3. Añadir `RESEND_API_KEY` y `CONTACT_FROM_EMAIL`

## 5. Checklist post-deploy

- [ ] Home, servicios, proyectos, nosotros, contacto OK en móvil
- [ ] WhatsApp abre con el número correcto
- [ ] `/studio` accesible y login del cliente OK
- [ ] Crear un proyecto de prueba y verlo en `/proyectos`
- [ ] Formulario envía email
- [ ] Google Search Console: enviar sitemap `https://dominio/sitemap.xml`
