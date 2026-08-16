'use client'

import { FormEvent, useState } from "react"
import { useTranslation } from "react-i18next"

export default function NewsletterForm() {
  const { t } = useTranslation()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email.trim()) {
      return
    }

    setStatus("loading")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), website: "" }),
      })

      if (!response.ok) {
        throw new Error("Newsletter subscription failed")
      }

      setEmail("")
      setStatus("success")
    } catch (error) {
      console.error(error)
      setStatus("error")
    }
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-contrail text-white tracking-wider uppercase">
        {t("footer.newsletter")}
      </h3>
      <p className="text-gray-400 font-arimo">{t("footer.newsletterText")}</p>
      <form
        onSubmit={handleSubmit}
        className="space-y-3"
      >
        <div className="relative flex group">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={t("footer.emailPlaceholder")}
            aria-label={t("footer.emailPlaceholder")}
            required
            className="w-full pl-6 pr-16 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600/50 transition-all disabled:cursor-not-allowed disabled:opacity-70"
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            aria-label={t("footer.submitAriaLabel", { defaultValue: "Suscribirme al newsletter" })}
            className="absolute right-2 top-2 bottom-2 bg-red-600 hover:bg-red-700 text-white px-5 rounded-xl font-black transition-all transform active:scale-95 flex items-center justify-center disabled:cursor-not-allowed disabled:bg-red-800"
          >
            <span>{status === "loading" ? "..." : "->"}</span>
          </button>
        </div>
        {status === "success" && (
          <p className="text-sm text-emerald-300 font-arimo">
            {t("footer.successMessage", { defaultValue: "Gracias por sumarte. Ya recibimos tu email." })}
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-300 font-arimo">
            {t("footer.errorMessage", { defaultValue: "No pudimos registrar tu suscripcion. Proba de nuevo en unos segundos." })}
          </p>
        )}
      </form>
    </div>
  )
}
