"use client";

import { motion } from "framer-motion";
import { Calendar, FileText } from "lucide-react";
import type { ProgramColors } from "./types";
import { useTranslation } from "react-i18next";
import { getAccessibleTextColor } from "@/lib/utils/color-contrast";

interface EnrollmentInfoProps {
  description: string;
  registrationLabel?: string;
  registrationUrl?: string;
  availablePeriod?: string;
  colors: ProgramColors;
  isHistorical?: boolean;
}

export default function EnrollmentInfo({
  description,
  registrationLabel,
  registrationUrl,
  availablePeriod,
  colors,
  isHistorical = false,
}: EnrollmentInfoProps) {
  const { t } = useTranslation();
  const strongColor = getAccessibleTextColor(colors.primary, "#ffffff");
  const cardBackground = `${colors.primary}14`;

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
            <h2 className="mb-4 text-4xl md:text-5xl font-contrail" style={{ color: colors.secondary }}>
              {isHistorical ? t("programDetail.programInfo") : t("programDetail.howToEnroll")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 rounded-2xl p-8 md:p-10"
            style={{ backgroundColor: cardBackground }}
          >
            <div className="mb-6 flex items-start gap-4">
              <FileText size={32} style={{ color: strongColor }} className="mt-1 flex-shrink-0" />
              <p className="text-lg leading-relaxed text-gray-700">
                {description}{" "}
                {registrationUrl && registrationLabel && (
                  <a
                    href={registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                    style={{ color: strongColor }}
                  >
                    {registrationLabel}
                  </a>
                )}
              </p>
            </div>

            {availablePeriod && (
              <div className={`flex items-center gap-4 rounded-xl p-4 ${isHistorical ? "border border-amber-200 bg-amber-50" : "bg-white"}`}>
                <Calendar size={24} style={{ color: isHistorical ? "#f59e0b" : strongColor }} />
                <div>
                  <p className="text-sm font-semibold text-gray-600">
                    {isHistorical ? t("programDetail.programStatus") : t("programDetail.enrollmentPeriod")}
                  </p>
                  <p className="font-semibold" style={{ color: isHistorical ? "#111827" : strongColor }}>
                    {availablePeriod}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
