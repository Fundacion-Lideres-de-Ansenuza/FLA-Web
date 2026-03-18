"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Monitor,
  School,
  TreePine,
  Globe,
  Users,
  Award,
  Gamepad2,
  Trophy,
  MessageSquare,
  BookOpen,
  Rocket,
  PartyPopper,
} from "lucide-react";
import type { ProgramColors, Stage } from "./types";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Monitor,
  School,
  TreePine,
  Globe,
  Users,
  Award,
  Gamepad2,
  Trophy,
  MessageSquare,
  BookOpen,
  Rocket,
  PartyPopper,
};

interface ProgramStagesProps {
  stages: Stage[];
  colors: ProgramColors;
}

export default function ProgramStages({ stages, colors }: ProgramStagesProps) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="mb-3 text-3xl md:text-4xl font-contrail-one" style={{ color: colors.secondary }}>
              Etapas del programa
            </h2>
            <p className="text-base text-gray-600 md:text-lg">Un recorrido transformador disenado para tu crecimiento</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stages.map((stage, index) => {
              const IconComponent = stage.icon ? iconMap[stage.icon] : null;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: `${colors.primary}0d` }}
                >
                  <div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    {IconComponent ? <IconComponent size={28} style={{ color: colors.primary }} /> : null}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold" style={{ color: colors.secondary }}>
                    {stage.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">{stage.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-center italic text-gray-500"
          >
            * Las actividades pueden variar de ano a ano
          </motion.p>
        </div>
      </div>
    </section>
  );
}
