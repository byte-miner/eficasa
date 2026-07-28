"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          type: data.get("type"),
          project: data.get("project"),
        }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "No se pudo enviar el mensaje");
      }

      setStatus("success");
      setMessage("Gracias. Hemos recibido su solicitud y le contactaremos pronto.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "Hubo un error al enviar. Inténtelo de nuevo o escríbanos por WhatsApp.",
      );
    }
  }

  const field =
    "w-full border border-navy/35 bg-white px-4 py-3.5 text-sm text-navy outline-none transition placeholder:text-navy/40 focus:border-cyan focus:ring-1 focus:ring-cyan/40";

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-3xl space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <input
          required
          name="name"
          type="text"
          className={field}
          placeholder="Nombre"
          aria-label="Nombre"
        />
        <input
          required
          name="email"
          type="email"
          className={field}
          placeholder="Email"
          aria-label="Email"
        />
        <input
          name="phone"
          type="tel"
          className={field}
          placeholder="Teléfono"
          aria-label="Teléfono"
        />
        <select
          name="type"
          className={`${field} appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%231a1a1a' d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
          }}
          defaultValue=""
          required
          aria-label="Tipo de reforma"
        >
          <option value="" disabled>
            Tipo de reforma
          </option>
          <option value="Reforma integral">Reforma integral</option>
          <option value="Cocina / Baño">Cocina / Baño</option>
          <option value="Local comercial">Local comercial</option>
          <option value="Oficina">Oficina</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <textarea
        required
        name="project"
        rows={6}
        className={`${field} resize-y`}
        placeholder="Cuéntenos su proyecto"
        aria-label="Cuéntenos su proyecto"
      />

      <div className="flex flex-col items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center bg-navy px-10 py-3 text-sm font-semibold tracking-[0.12em] text-white uppercase transition hover:bg-cyan hover:text-navy-deep disabled:opacity-70"
        >
          {status === "loading" ? "Enviando..." : "Enviar"}
        </button>

        {message && (
          <p
            className={`text-center text-sm ${
              status === "success" ? "text-eco" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
