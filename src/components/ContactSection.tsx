import { BrandBackdrop, BrandDivider } from "@/components/BrandMotifs";
import { ContactForm } from "@/components/ContactForm";
import { MadridSkyline } from "@/components/MadridSkyline";

type ContactSectionProps = {
  title?: string;
  subtitle?: string;
  asPage?: boolean;
};

export function ContactSection({
  title = "Expertos en renovación y reformas en Madrid",
  subtitle = "¡Contacta con nosotros!",
  asPage = false,
}: ContactSectionProps) {
  const HeadingTag = asPage ? "h1" : "h2";

  return (
    <section className="relative overflow-hidden bg-greige">
      <BrandBackdrop variant="light" />
      <div className="relative section-pad">
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
          <div
            aria-hidden
            className="mx-auto mb-5 h-1 w-16 bg-[linear-gradient(90deg,var(--cyan),var(--green))]"
          />
          <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-cyan-dark uppercase">
            Madrid
          </p>
          <HeadingTag className="font-display text-2xl font-bold tracking-wide text-navy uppercase md:text-4xl">
            {title}
          </HeadingTag>
          <p className="mt-4 text-base text-muted md:text-lg">{subtitle}</p>
          <div className="relative mt-10 border border-cyan/25 bg-white/90 p-6 shadow-[0_16px_40px_rgba(45,52,136,0.08)] backdrop-blur-sm md:mt-12 md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute top-3 left-3 h-8 w-8 border-t-2 border-l-2 border-cyan/60"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute top-3 right-3 h-8 w-8 border-t-2 border-r-2 border-green/60"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-3 left-3 h-8 w-8 border-b-2 border-l-2 border-green/60"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute right-3 bottom-3 h-8 w-8 border-r-2 border-b-2 border-cyan/60"
            />
            <ContactForm />
          </div>
        </div>
      </div>
      {/* Full-bleed Madrid silhouette — mobile/tablet vs desktop assets */}
      <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
        <MadridSkyline
          variant="contactMobile"
          className="!h-auto !w-full max-w-none object-contain object-bottom lg:hidden"
        />
        <MadridSkyline
          variant="contact"
          className="!h-auto !w-full max-w-none object-contain object-bottom hidden lg:block"
        />
      </div>
      <BrandDivider />
    </section>
  );
}
