"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProgramColors } from "./types";

interface CTASectionProps {
  title: string;
  colors: ProgramColors;
}

export default function CTASection({ title, colors }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-14 md:py-20" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}>
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-6 text-4xl text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-fla), serif", letterSpacing: "0.02em" }}>
            ¿Listo para ser parte de {title}?
          </h2>
          <p className="mb-10 text-xl leading-relaxed text-white/95 md:text-2xl">
            Unite a una comunidad de jóvenes líderes que están transformando el futuro
          </p>
          <div className="flex justify-center">
            <Link
              href="/contactanos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-lg font-semibold text-gray-900 shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Contactar
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="mt-4 text-sm text-white/90 md:text-base">
            ¿Tenés dudas?{" "}
            <Link href="/contactanos" className="font-semibold underline-offset-4 hover:underline">
              Contáctanos
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}


