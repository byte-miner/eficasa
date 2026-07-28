import { BrandBackdrop } from "@/components/BrandMotifs";
import { MadridSkyline } from "@/components/MadridSkyline";
import { SectionHeading } from "@/components/SectionHeading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

/** Branded page header: navy art plane, hex motifs, Madrid silhouette. */
export function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pt-16 pb-0 text-white">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <BrandBackdrop variant="navy" />
      <div className="relative mx-auto max-w-7xl px-4 pb-14 md:px-6 md:pb-16">
        <SectionHeading
          light
          align={align}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </div>
      <div className="relative">
        <div className="h-1 w-full bg-lime/70" />
        <div className="h-px w-full bg-cyan" />
        <MadridSkyline className="h-12 w-full text-navy-deep/50 md:h-16" />
      </div>
    </section>
  );
}
