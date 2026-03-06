"use client";

import { motion } from "framer-motion";
import { useCountAnimation } from "@/components/stats/hooks/useCountAnimation";
import { useInView } from "framer-motion";
import { useRef } from "react";
import type { Stat } from "./types";
import type { ProgramColors } from "./types";

interface ImpactStatsProps {
  stats: Stat[];
  colors: ProgramColors;
}

export default function ImpactStats({ stats, colors }: ImpactStatsProps) {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: `${colors.primary}0d` }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-3 font-contrail-one">Nuestro impacto</h2>
            <p className="text-base md:text-lg text-gray-600">
              Resultados que transforman comunidades
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                stat={stat}
                index={index}
                color={colors.primary}
              />
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
  const suffix = stat.value.replace(/[0-9]/g, "");
  const count = useCountAnimation(numericValue, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex justify-center"
    >
      <div className="flex min-h-[220px] w-full max-w-[280px] flex-col items-center justify-center rounded-[28px] border border-white/70 bg-white/85 px-6 py-8 text-center shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
        <div className="mb-4 flex h-[78px] items-center justify-center">
          <span
            className="inline-flex items-center justify-center text-4xl md:text-5xl lg:text-6xl font-bold leading-none"
            style={{ color }}
          >
            {count}
            {suffix}
          </span>
        </div>
        <p className="max-w-[18ch] text-gray-700 font-medium text-sm md:text-base leading-snug text-center">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}
