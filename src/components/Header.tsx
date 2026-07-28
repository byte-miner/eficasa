"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="relative z-50 border-b border-line bg-white">
      <div className="h-1 w-full bg-[linear-gradient(90deg,var(--navy)_0%,var(--cyan)_50%,var(--green)_100%)]" />
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 md:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/brand/EFICASA-Logo-Horizontal-Positivo.jpg"
            alt={siteConfig.name}
            width={220}
            height={52}
            className="h-11 w-auto max-h-11 object-contain md:h-12 md:max-h-12"
            priority
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 py-2 text-[11px] font-bold tracking-[0.12em] uppercase transition-colors xl:px-3 ${
                  active
                    ? "text-navy"
                    : "text-navy/55 hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center lg:flex">
          <Link href="/contacto" className="btn-primary !py-2 !text-[11px]">
            Presupuesto gratis
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-9 w-9 shrink-0 items-center justify-center border border-navy/25 text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex w-4 flex-col gap-1">
            <span
              className={`h-px w-full bg-navy transition ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-navy transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-full bg-navy transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-4 py-4 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-line py-3 text-xs font-bold tracking-[0.14em] text-navy uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contacto" className="btn-primary mt-4 text-center">
              Presupuesto gratis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
