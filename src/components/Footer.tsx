import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-white text-charcoal">
      {/* Top: nav */}
      <div className="border-b border-line bg-surface-2">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-y-2 px-4 py-8 md:px-6">
          <span className="mr-1 hidden h-4 w-px bg-navy/25 sm:block" aria-hidden />
          {navLinks.map((link, index) => (
            <span key={link.href} className="flex items-center">
              {index > 0 && (
                <>
                  <span className="mx-1 h-4 w-px bg-navy/25" aria-hidden />
                  <span className="mr-1 hidden h-4 w-px bg-navy/25 sm:block" aria-hidden />
                </>
              )}
              <Link
                href={link.href}
                className="px-3 text-sm font-semibold tracking-[0.12em] text-navy uppercase transition hover:text-cyan-dark md:px-4 md:text-[15px]"
              >
                {link.label}
              </Link>
            </span>
          ))}
          <span className="ml-1 hidden h-4 w-px bg-navy/25 sm:block" aria-hidden />
        </div>
      </div>

      {/* Middle: address + contact */}
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm md:flex-row md:items-center md:justify-between md:px-6">
        <p className="text-muted">{siteConfig.address.full}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-1 font-medium text-navy">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-cyan-dark">
            {siteConfig.email}
          </a>
          <span aria-hidden>/</span>
          <a href={`tel:${siteConfig.phone}`} className="hover:text-cyan-dark">
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Bottom: copyright + legal */}
      <div className="bg-surface-2">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} — Todos los derechos
            reservados.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-1 text-navy">
            <Link href="/contacto" className="hover:text-cyan-dark">
              Aviso legal
            </Link>
            <span aria-hidden>•</span>
            <Link href="/contacto" className="hover:text-cyan-dark">
              Política de privacidad
            </Link>
            <span aria-hidden>•</span>
            <Link href="/contacto" className="hover:text-cyan-dark">
              Política de cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
