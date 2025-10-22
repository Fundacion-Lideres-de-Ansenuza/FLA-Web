"use client";

import { motion } from "framer-motion";

interface ProgramDescriptionProps {
  fullDescription: string;
  location?: string;
  duration?: string;
  modality?: string;
}

export default function ProgramDescription({ fullDescription, location, duration, modality }: ProgramDescriptionProps) {
  return (
    <section id="mas-info" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">Sobre el programa</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              {fullDescription}
            </p>
          </motion.div>

          {(duration || modality) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              {duration && (
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Duración</h3>
                  <p className="text-gray-700">{duration}</p>
                </div>
              )}
              {modality && (
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Modalidad</h3>
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
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">¿Dónde se desarrolla?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{location}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

