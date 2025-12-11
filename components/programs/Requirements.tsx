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
    <section className="py-16 md:py-24" style={{ backgroundColor: `${colors.primary}0d` }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-3 font-contrail-one">Requisitos</h2>
            <p className="text-base md:text-lg text-gray-600 font-arimo">
              Para participar del programa, deberás cumplir con los siguientes requisitos:
            </p>
          </motion.div>

          <div className="space-y-4">
            {requirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CheckCircle2
                  className="flex-shrink-0 mt-1"
                  size={28}
                  style={{ color: colors.primary }}
                />
                <p className="text-lg text-gray-700">{requirement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

