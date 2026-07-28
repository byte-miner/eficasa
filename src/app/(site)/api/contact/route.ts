import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  type?: string;
  project?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const type = String(body.type || "").trim();
    const project = String(body.project || "").trim();

    if (!name || !email || !project) {
      return NextResponse.json(
        { ok: false, error: "Complete los campos obligatorios." },
        { status: 400 },
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;

    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || "EFICASA Web <onboarding@resend.dev>",
          to: [toEmail],
          subject: `Nueva solicitud de presupuesto — ${name}`,
          text: [
            `Nombre: ${name}`,
            `Email: ${email}`,
            `Teléfono: ${phone || "—"}`,
            `Tipo: ${type || "—"}`,
            "",
            "Proyecto:",
            project,
          ].join("\n"),
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend error:", errText);
        return NextResponse.json(
          { ok: false, error: "No se pudo enviar el correo. Inténtelo más tarde." },
          { status: 502 },
        );
      }
    } else {
      // Dev / pre-email setup: log submissions so the form still works
      console.info("[contact form]", { name, email, phone, type, project });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "Error inesperado al procesar el formulario." },
      { status: 500 },
    );
  }
}
