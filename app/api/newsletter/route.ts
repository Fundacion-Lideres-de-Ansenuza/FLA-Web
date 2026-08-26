import { NextResponse } from "next/server"
import { addNewsletterSubscriber } from "@/lib/server/google-sheets"

export const runtime = "nodejs"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json()
    if (typeof body.website === "string" && body.website.trim()) {
      return NextResponse.json({ ok: true })
    }

    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : ""
    if (!EMAIL_PATTERN.test(email) || email.length > 254) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 })
    }

    const result = await addNewsletterSubscriber(email)
    return NextResponse.json({ ok: true, ...result })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    const message = error instanceof Error ? error.message : String(error)
    const detail = process.env.NODE_ENV === "production" ? undefined : message
    return NextResponse.json({ ok: false, error: "server_error", detail }, { status: 500 })
  }
}
