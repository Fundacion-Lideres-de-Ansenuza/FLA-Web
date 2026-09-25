"use client";

import { useId, useState, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap,
  Monitor,
  School,
  Binoculars,
  Globe,
  Users,
  User,
  Award,
  Gamepad2,
  Trophy,
  MessageSquare,
  MessagesSquare,
  BookOpen,
  Rocket,
  PartyPopper,
  Sparkles,
  HeartHandshake,
  PencilRuler,
  Landmark,
  Briefcase,
  Building2,
  Wand2,
  Gift,
  Video,
  Microscope,
  HandHeart,
  MapPin,
  Lightbulb,
  Compass,
  Megaphone,
  Presentation,
  ChevronDown,
} from "lucide-react";
import type { ProgramColors, Stage } from "./types";
import { useTranslation } from "react-i18next";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Monitor,
  School,
  Binoculars,
  Globe,
  Users,
  User,
  Award,
  Gamepad2,
  Trophy,
  MessageSquare,
  MessagesSquare,
  BookOpen,
  Rocket,
  PartyPopper,
  Sparkles,
  HeartHandshake,
  PencilRuler,
  Landmark,
  Briefcase,
  Building2,
  Wand2,
  Gift,
  Video,
  Microscope,
  HandHeart,
  MapPin,
  Lightbulb,
  Compass,
  Megaphone,
  Presentation,
};

interface ProgramStagesProps {
  stages: Stage[];
  colors: ProgramColors;
  rainbowTitle?: boolean;
}

export default function ProgramStages({ stages, colors, rainbowTitle = false }: ProgramStagesProps) {
  const { t } = useTranslation();
  const baseId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const tabId = (index: number) => `${baseId}-tab-${index}`;
  const panelId = (index: number) => `${baseId}-panel-${index}`;

  const focusTab = (index: number) => {
    const el = document.getElementById(tabId(index));
    el?.focus();
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = stages.length - 1;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      const next = index === lastIndex ? 0 : index + 1;
      setActiveIndex(next);
      focusTab(next);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      const prev = index === 0 ? lastIndex : index - 1;
      setActiveIndex(prev);
      focusTab(prev);
    } else if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
      focusTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(lastIndex);
      focusTab(lastIndex);
    }
  };

  const activeStage = stages[activeIndex];
  const ActiveIcon = activeStage?.icon ? iconMap[activeStage.icon] : null;
  const activeColor = activeStage?.color ?? colors.primary;

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
            <h2
              className={
                rainbowTitle
                  ? "mb-3 inline-block bg-clip-text text-3xl font-contrail text-transparent md:text-4xl"
                  : "mb-3 text-3xl md:text-4xl font-contrail"
              }
              style={
                rainbowTitle
                  ? {
                      backgroundImage:
                        "linear-gradient(90deg, #dc2626, #ea580c, #ca8a04, #16a34a, #0284c7, #7c3aed)",
                    }
                  : { color: colors.secondary }
              }
            >
              {t("programDetail.stagesTitle")}
            </h2>
            <p className="text-base text-gray-600 md:text-lg">{t("programDetail.stagesSubtitle")}</p>
          </motion.div>

          {/* Desktop / tablet: horizontal timeline with tabs */}
          <div className="hidden md:block">
            <div
              role="tablist"
              aria-label={t("programDetail.stagesTitle")}
              className="relative mb-8 flex items-start justify-between overflow-x-auto pb-2"
            >
              <div
                className="absolute left-0 right-0 top-6 -z-10 h-0.5 bg-gray-200"
                aria-hidden="true"
              />
              {stages.map((stage, index) => {
                const IconComponent = stage.icon ? iconMap[stage.icon] : null;
                const stageColor = stage.color ?? colors.primary;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={index}
                    id={tabId(index)}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-controls={panelId(index)}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                    className="group flex flex-1 flex-col items-center gap-2 px-2 text-center focus:outline-none"
                  >
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-offset-2"
                      style={
                        {
                          backgroundColor: isActive ? stageColor : "#ffffff",
                          borderColor: stageColor,
                          "--tw-ring-color": stageColor,
                        } as React.CSSProperties
                      }
                    >
                      {IconComponent ? (
                        <IconComponent size={20} style={{ color: isActive ? "#ffffff" : stageColor }} />
                      ) : (
                        <span className="text-sm font-semibold" style={{ color: isActive ? "#ffffff" : stageColor }}>
                          {index + 1}
                        </span>
                      )}
                    </span>
                    <span
                      className={`max-w-[9rem] text-sm font-semibold leading-snug transition-colors duration-300 ${
                        isActive ? "" : "text-gray-500"
                      }`}
                      style={isActive ? { color: stageColor } : undefined}
                    >
                      {stage.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                id={panelId(activeIndex)}
                role="tabpanel"
                aria-labelledby={tabId(activeIndex)}
                tabIndex={0}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 rounded-2xl p-6 md:grid-cols-[1fr_1fr] md:p-8"
                style={{ backgroundColor: `${activeColor}0d` }}
              >
                <div className="flex flex-col justify-center">
                  <div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${activeColor}20` }}
                  >
                    {ActiveIcon ? <ActiveIcon size={28} style={{ color: activeColor }} /> : null}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold" style={{ color: colors.secondary }}>
                    {activeStage.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">{activeStage.description}</p>
                </div>
                {activeStage.image ? (
                  <div className="relative h-48 w-full overflow-hidden rounded-xl md:h-full md:min-h-[12rem]">
                    <Image
                      src={activeStage.image}
                      alt={activeStage.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile: accordion */}
          <div className="space-y-3 md:hidden">
            {stages.map((stage, index) => {
              const IconComponent = stage.icon ? iconMap[stage.icon] : null;
              const stageColor = stage.color ?? colors.primary;
              const isOpen = expandedIndex === index;

              return (
                <div key={index} className="overflow-hidden rounded-xl border border-gray-200">
                  <h3>
                    <button
                      type="button"
                      id={tabId(index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId(index)}
                      onClick={() => setExpandedIndex(isOpen ? null : index)}
                      className="flex w-full items-center gap-3 p-4 text-left"
                      style={{ backgroundColor: isOpen ? `${stageColor}0d` : "transparent" }}
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `${stageColor}20` }}
                      >
                        {IconComponent ? (
                          <IconComponent size={20} style={{ color: stageColor }} />
                        ) : (
                          <span className="text-sm font-semibold" style={{ color: stageColor }}>
                            {index + 1}
                          </span>
                        )}
                      </span>
                      <span className="flex-1 font-semibold" style={{ color: colors.secondary }}>
                        {stage.title}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId(index)}
                        role="region"
                        aria-labelledby={tabId(index)}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 px-4 pb-4">
                          {stage.image ? (
                            <div className="relative h-40 w-full overflow-hidden rounded-xl">
                              <Image
                                src={stage.image}
                                alt={stage.title}
                                fill
                                sizes="100vw"
                                className="object-cover"
                              />
                            </div>
                          ) : null}
                          <p className="leading-relaxed text-gray-600">{stage.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
            * {t("programDetail.stagesNote")}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
