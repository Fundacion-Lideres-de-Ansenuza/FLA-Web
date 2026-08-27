"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountAnimation } from "@/components/stats/hooks/useCountAnimation";
import type { ProgramColors, Stat } from "./types";
import { useTranslation } from "react-i18next";

interface ImpactStatsProps {
  stats: Stat[];
  colors: ProgramColors;
}

export default function ImpactStats({ stats, colors }: ImpactStatsProps) {
  const { t } = useTranslation();
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: `${colors.primary}0d` }}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="mb-3 text-3xl md:text-4xl font-contrail" style={{ color: colors.secondary }}>
              {t("programDetail.impactTitle")}
            </h2>
            <p className="text-base text-gray-600 md:text-lg">{t("programDetail.impactSubtitle")}</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 md:flex-nowrap">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} color={colors.primary} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: Stat;
  index: number;
  color: string;
}

function StatCard({ stat, index, color }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(stat.value.replace(/\D/g, "")) || 0;
  const prefix = stat.value.match(/^\D+/)?.[0] || "";
  const suffix = stat.value.match(/\D+$/)?.[0] || "";
  const count = useCountAnimation(numericValue, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex w-full max-w-[240px] justify-center"
    >
      <div className="flex min-h-[160px] w-full max-w-[240px] flex-col items-center justify-center rounded-[24px] border border-white/70 bg-white/85 px-4 py-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
        <div className="mb-2 flex h-[56px] items-center justify-center">
          <span className="inline-flex items-center justify-center text-3xl font-bold leading-none md:text-4xl lg:text-5xl" style={{ color }}>
            {prefix}
            {count}
            {suffix}
          </span>
        </div>
        <p className="max-w-[18ch] text-center text-xs font-medium leading-snug text-gray-700 md:text-sm">{stat.label}</p>
      </div>
    </motion.div>
  );
}
