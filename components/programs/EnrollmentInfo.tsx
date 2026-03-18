"use client";

import { motion } from "framer-motion";
import { Calendar, FileText } from "lucide-react";
import type { ProgramColors } from "./types";

interface EnrollmentInfoProps {
  description: string;
  availablePeriod?: string;
  colors: ProgramColors;
  isHistorical?: boolean;
}

export default function EnrollmentInfo({
  description,
  availablePeriod,
  colors,
  isHistorical = false,
}: EnrollmentInfoProps) {
  return (
    <section id="inscripcion" className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="mb-4 text-4xl md:text-5xl font-contrail-one" style={{ color: colors.secondary }}>
              {isHistorical ? "Informacion del programa" : "Como anotarme"}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-10"
          >
            <div className="mb-6 flex items-start gap-4">
              <FileText size={32} style={{ color: colors.primary }} className="mt-1 flex-shrink-0" />
              <p className="text-lg leading-relaxed text-gray-700">{description}</p>
            </div>

            {availablePeriod && (
              <div className={`flex items-center gap-4 rounded-xl p-4 ${isHistorical ? "border border-amber-200 bg-amber-50" : "bg-white"}`}>
                <Calendar size={24} style={{ color: isHistorical ? "#f59e0b" : colors.primary }} />
                <div>
                  <p className="text-sm font-semibold text-gray-600">
                    {isHistorical ? "Estado del programa" : "Periodo de inscripcion"}
                  </p>
                  <p className="text-gray-900">{availablePeriod}</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
