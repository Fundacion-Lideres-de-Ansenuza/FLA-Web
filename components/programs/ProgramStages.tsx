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
  PartyPopper
} from "lucide-react";
import type { Stage } from "./types";
import type { ProgramColors } from "./types";

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
  PartyPopper
};

interface ProgramStagesProps {
  stages: Stage[];
  colors: ProgramColors;
}

export default function ProgramStages({ stages, colors }: ProgramStagesProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Etapas del programa</h2>
            <p className="text-lg text-gray-600">
              Un recorrido transformador diseñado para tu crecimiento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stages.map((stage, index) => {
              const IconComponent = stage.icon ? iconMap[stage.icon] : null;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    {IconComponent && (
                      <IconComponent size={28} style={{ color: colors.primary }} />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{stage.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-gray-500 mt-8 italic"
          >
            * Las actividades pueden variar de año a año
          </motion.p>
        </div>
      </div>
    </section>
  );
}

