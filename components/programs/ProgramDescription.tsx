"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { ProgramColors } from "./types";
import { getAccessibleTextColor } from "@/lib/utils/color-contrast";

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
  const { t } = useTranslation();
  const primary = colors?.primary ?? "#111827";
  const strongColor = getAccessibleTextColor(primary, "#ffffff");
  const cardBackground = `${primary}14`;

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
            <h2 className="mb-5 text-3xl md:text-4xl font-contrail" style={{ color: colors?.secondary ?? "#111827" }}>
              {t("programDetail.about")}
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
                <div className="rounded-2xl p-6" style={{ backgroundColor: cardBackground }}>
                  <h3 className="mb-2 text-xl font-semibold" style={{ color: colors?.secondary ?? "#111827" }}>
                    {t("programDetail.duration")}
                  </h3>
                  <p className="font-semibold" style={{ color: strongColor }}>
                    {duration}
                  </p>
                </div>
              )}
              {modality && (
                <div className="rounded-2xl p-6" style={{ backgroundColor: cardBackground }}>
                  <h3 className="mb-2 text-xl font-semibold" style={{ color: colors?.secondary ?? "#111827" }}>
                    {t("programDetail.modality")}
                  </h3>
                  <p className="leading-relaxed text-gray-700">
                    {modality}
                  </p>
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
              className="rounded-2xl p-8"
              style={{ backgroundColor: cardBackground }}
            >
              <h3 className="mb-4 text-2xl font-semibold" style={{ color: colors?.secondary ?? "#111827" }}>
                {t("programDetail.location")}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                {location}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
