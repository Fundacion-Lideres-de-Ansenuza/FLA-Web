"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, FileText } from "lucide-react";
import type { ProgramColors } from "./types";

interface EnrollmentInfoProps {
  description: string;
  availablePeriod?: string;
  colors: ProgramColors;
}

export default function EnrollmentInfo({ description, availablePeriod, colors }: EnrollmentInfoProps) {
  return (
    <section id="inscripcion" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">¿Cómo anotarme?</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 rounded-2xl mb-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <FileText size={32} style={{ color: colors.primary }} className="flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
            </div>

            {availablePeriod && (
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl">
                <Calendar size={24} style={{ color: colors.primary }} />
                <div>
                  <p className="text-sm text-gray-600 font-semibold">Período de inscripción</p>
                  <p className="text-gray-900">{availablePeriod}</p>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-gray-600">
              ¿Tenés dudas?{" "}
              <Link href="/contactanos" className="font-semibold hover:underline" style={{ color: colors.primary }}>
                Contactanos
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

