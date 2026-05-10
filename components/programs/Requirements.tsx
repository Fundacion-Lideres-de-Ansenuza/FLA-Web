"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { ProgramColors } from "./types";

interface RequirementsProps {
  requirements: string[];
  colors: ProgramColors;
}

export default function Requirements({ requirements, colors }: RequirementsProps) {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: `${colors.primary}0d` }}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="mb-3 text-3xl md:text-4xl font-contrail-one" style={{ color: colors.secondary }}>
              Requisitos
            </h2>
            <p className="text-base text-gray-600 md:text-lg font-arimo">
              Para participar del programa, deberás cumplir con los siguientes requisitos:
            </p>
          </motion.div>

          <div className="space-y-3.5">
            {requirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <CheckCircle2 className="mt-1 flex-shrink-0" size={26} style={{ color: colors.primary }} />
                <p className="text-base text-gray-700 md:text-lg">{requirement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
