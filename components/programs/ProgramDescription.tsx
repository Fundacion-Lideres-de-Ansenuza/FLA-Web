"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { ProgramColors } from "./types";
import { getAccessibleTextColor } from "@/lib/utils/color-contrast";

export interface DescriptionBlock {
  heading: string;
  text: string;
}

export interface ProgramMethodology {
  label: string;
  summary: string;
  details: string;
}

interface ProgramDescriptionProps {
  fullDescription: string;
  location?: string;
  duration?: string;
  modality?: string;
  colors?: ProgramColors;
  /** Bloques temáticos opcionales para reemplazar el párrafo único de fullDescription. */
  descriptionBlocks?: DescriptionBlock[];
  /** Recuadro clickeable con el detalle de la metodología (desplegable). */
  methodology?: ProgramMethodology;
}

export default function ProgramDescription({
  fullDescription,
  location,
  duration,
  modality,
  colors,
  descriptionBlocks,
  methodology,
}: ProgramDescriptionProps) {
  const { t } = useTranslation();
  const primary = colors?.primary ?? "#111827";
  const strongColor = getAccessibleTextColor(primary, "#ffffff");
  const cardBackground = `${primary}14`;
  const methodologyId = useId();
  const [methodologyOpen, setMethodologyOpen] = useState(false);

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
            <h2 className="mb-5 text-3xl md:text-4xl font-fla" style={{ color: colors?.secondary ?? "#111827" }}>
              {t("programDetail.about")}
            </h2>

            {descriptionBlocks && descriptionBlocks.length > 0 ? (
              <div className="mb-6 space-y-5">
                {descriptionBlocks.map((block, index) => (
                  <div key={index}>
                    <h3
                      className="mb-1.5 text-lg font-semibold md:text-xl"
                      style={{ color: colors?.secondary ?? "#111827" }}
                    >
                      {block.heading}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-700 md:text-lg">{block.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mb-6 text-base leading-relaxed text-gray-700 md:text-lg">{fullDescription}</p>
            )}

            {methodology && (
              <div className="mb-2 rounded-2xl border border-gray-200" style={{ backgroundColor: cardBackground }}>
                <button
                  type="button"
                  id={`${methodologyId}-trigger`}
                  aria-expanded={methodologyOpen}
                  aria-controls={`${methodologyId}-panel`}
                  onClick={() => setMethodologyOpen((prev) => !prev)}
                  className="flex w-full flex-col items-start gap-3 p-5 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span>
                    <span className="block font-semibold" style={{ color: colors?.secondary ?? "#111827" }}>
                      {methodology.label}
                    </span>
                    <span className="mt-1 block text-sm text-gray-600">{methodology.summary}</span>
                  </span>
                  <span className="flex items-center gap-2 text-sm font-medium sm:shrink-0" style={{ color: strongColor }}>
                    {methodologyOpen ? t("programDetail.methodologyCollapse") : t("programDetail.methodologyExpand")}
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={`transition-transform duration-300 ${methodologyOpen ? "rotate-180" : ""}`}
                    />
                  </span>
                </button>
                {methodologyOpen && (
                  <div
                    id={`${methodologyId}-panel`}
                    role="region"
                    aria-labelledby={`${methodologyId}-trigger`}
                    className="border-t border-gray-200 p-5 pt-4"
                  >
                    <p className="leading-relaxed text-gray-700">{methodology.details}</p>
                  </div>
                )}
              </div>
            )}
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
