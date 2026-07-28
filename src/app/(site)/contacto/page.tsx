import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicite presupuesto para su reforma en Madrid. Formulario, teléfono y WhatsApp.",
};

export default function ContactoPage() {
  return <ContactSection asPage />;
}
