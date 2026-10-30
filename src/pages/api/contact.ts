// Endpoint del formulario de contacto: valida y envía el correo con Resend.
import type { APIRoute } from "astro";
import { CONTACT_FROM, CONTACT_TO, RESEND_API_KEY } from "astro:env/server";

export const prerender = false;

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const field = (data: FormData, name: string, max: number) =>
  String(data.get(name) ?? "")
    .trim()
    .slice(0, max);

export const POST: APIRoute = async ({ request }) => {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return json({ ok: false, error: "Solicitud inválida" }, 400);
  }

  // Honeypot: los bots completan este campo; respondemos OK sin enviar nada.
  if (field(data, "_honey", 200)) return json({ ok: true });

  const nombre = field(data, "nombre", 80);
  const empresa = field(data, "empresa", 100);
  const email = field(data, "email", 254);
  const telefono = field(data, "telefono", 25);
  const tipo = field(data, "tipo_de_proyecto", 120);
  const detalles = field(data, "detalles", 2000);
  const acepta = field(data, "acepta_privacidad", 10);

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (
    nombre.length < 2 ||
    !emailValido ||
    telefono.length < 7 ||
    !tipo ||
    !acepta
  ) {
    return json({ ok: false, error: "Datos incompletos o inválidos" }, 422);
  }

  const rows: [string, string][] = [
    ["Nombre", nombre],
    ["Empresa", empresa || "—"],
    ["Email", email],
    ["Teléfono", telefono],
    ["Solución", tipo],
    ["Detalles", detalles || "—"],
  ];

  const html = `<table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows
    .map(
      ([label, value]) =>
        `<tr><td style="border:1px solid #e3dce4;font-weight:bold;vertical-align:top">${label}</td><td style="border:1px solid #e3dce4;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("")}</table>`;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      reply_to: email,
      subject: `Nueva consulta de ${nombre} — web de Svelpy`,
      html,
      text,
    }),
  });

  if (!response.ok) {
    console.error("Resend error", response.status, await response.text());
    return json({ ok: false, error: "No se pudo enviar el mensaje" }, 502);
  }

  return json({ ok: true });
};
