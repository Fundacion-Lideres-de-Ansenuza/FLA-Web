import nodemailer from "nodemailer"

function requiredEnv(name: string) {
  const value = process.env[name]?.trim()
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character] ?? character)
}

export async function sendContactEmail(input: {
  nombre: string
  email: string
  telefono?: string
  asunto: string
  mensaje: string
}) {
  const user = requiredEnv("SMTP_USER")
  const password = requiredEnv("SMTP_PASSWORD")
  const recipient = requiredEnv("CONTACT_TO")
  const host = process.env.SMTP_HOST?.trim() || "smtp.hostinger.com"
  const port = Number(process.env.SMTP_PORT || "587")

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass: password },
  })

  const safe = {
    nombre: escapeHtml(input.nombre),
    email: escapeHtml(input.email),
    telefono: escapeHtml(input.telefono || "No informado"),
    asunto: escapeHtml(input.asunto),
    mensaje: escapeHtml(input.mensaje).replace(/\n/g, "<br />"),
  }

  await transporter.sendMail({
    from: user,
    to: recipient,
    replyTo: input.email,
    subject: `[Contacto FLA] ${input.asunto}`,
    text: `Nombre: ${input.nombre}\nEmail: ${input.email}\nTeléfono: ${input.telefono || "No informado"}\n\n${input.mensaje}`,
    html: `<h2>Nuevo mensaje desde el sitio</h2><p><strong>Nombre:</strong> ${safe.nombre}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Teléfono:</strong> ${safe.telefono}</p><p><strong>Asunto:</strong> ${safe.asunto}</p><p><strong>Mensaje:</strong><br />${safe.mensaje}</p>`,
  })
}
