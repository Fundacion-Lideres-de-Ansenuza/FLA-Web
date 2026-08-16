import { NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/server/email"

export const runtime = "nodejs"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const honeypot = clean(body.website, 200)

    if (honeypot) {
      return NextResponse.json({ ok: true })
    }

    const input = {
      nombre: clean(body.nombre, 120),
      email: clean(body.email, 254).toLowerCase(),
      telefono: clean(body.telefono, 40),
      asunto: clean(body.asunto, 160),
      mensaje: clean(body.mensaje, 5000),
    }

    if (!input.nombre || !EMAIL_PATTERN.test(input.email) || !input.asunto || !input.mensaje) {
      return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 })
    }

    await sendContactEmail(input)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact form error", error)
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 })
  }
}
