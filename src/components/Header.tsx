"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-shadow ${
        scrolled ? "border-line shadow-[0_8px_24px_rgba(45,52,136,0.08)]" : "border-line/80"
      }`}
    >
      <div className="h-1 w-full bg-[linear-gradient(90deg,var(--navy)_0%,var(--cyan)_50%,var(--green)_100%)]" />
      <div className="mx-auto flex h-[5.25rem] max-w-7xl items-center justify-between gap-3 px-4 md:h-[6rem] md:px-6">
        <Link href="/" className="relative z-10 shrink-0" aria-label={siteConfig.name}>
          <Image
            src="/brand/EFICASA-Logo-Horizontal-Positivo.png"
            alt={siteConfig.name}
            width={520}
            height={124}
            className="h-[4.5rem] w-auto max-h-[4.5rem] object-contain object-left sm:h-[5rem] sm:max-h-[5rem] md:h-[5.25rem] md:max-h-[5.25rem]"
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
                className={`px-2.5 py-2 text-sm font-bold tracking-[0.1em] uppercase transition-colors xl:px-3.5 ${
                  active ? "text-navy" : "text-navy/55 hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center lg:flex">
          <Link href="/contacto" className="btn-primary !py-2.5 !text-sm !tracking-[0.1em]">
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
                className="border-b border-line py-3.5 text-base font-bold tracking-[0.12em] text-navy uppercase"
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
