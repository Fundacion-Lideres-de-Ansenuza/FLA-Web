"use client";

import { motion } from "framer-motion";
import type { ProgramColors } from "./types";

interface ProgramDescriptionProps {
  fullDescription: string;
  location?: string;
  duration?: string;
  modality?: string;
  colors?: ProgramColors;
}

export default function ProgramDescription({
  fullDescription,
  location,
  duration,
  modality,
  colors,
}: ProgramDescriptionProps) {
  return (
    <section id="mas-info" className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="mb-5 text-3xl md:text-4xl font-contrail-one" style={{ color: colors?.secondary ?? "#111827" }}>
              Sobre el programa
            </h2>
            <p className="mb-6 text-base leading-relaxed text-gray-700 md:text-lg font-arimo">{fullDescription}</p>
          </motion.div>

          {(duration || modality) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 grid gap-5 md:grid-cols-2"
            >
              {duration && (
                <div className="rounded-2xl bg-gray-50 p-6">
                  <h3 className="mb-2 text-xl font-semibold" style={{ color: colors?.secondary ?? "#111827" }}>
                    Duracion
                  </h3>
                  <p className="text-gray-700">{duration}</p>
                </div>
              )}
              {modality && (
                <div className="rounded-2xl bg-gray-50 p-6">
                  <h3 className="mb-2 text-xl font-semibold" style={{ color: colors?.secondary ?? "#111827" }}>
                    Modalidad
                  </h3>
                  <p className="text-gray-700">{modality}</p>
                </div>
              )}
            </motion.div>
          )}

          {location && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8"
            >
              <h3 className="mb-4 text-2xl font-semibold" style={{ color: colors?.secondary ?? "#111827" }}>
                Dónde se desarrolla
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">{location}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
