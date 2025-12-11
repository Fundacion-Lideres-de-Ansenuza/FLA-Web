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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
      className="text-center"
    >
      <div className="mb-4">
        <span
          className="text-4xl md:text-5xl lg:text-6xl font-bold"
          style={{ color }}
        >
          {count}
          {suffix}
        </span>
      </div>
      <p className="text-gray-700 font-medium text-sm md:text-base">{stat.label}</p>
    </motion.div>
  );
}

