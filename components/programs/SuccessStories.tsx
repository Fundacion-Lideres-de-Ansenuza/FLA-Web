"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { ProgramColors, SuccessStory } from "./types";
import { useTranslation } from "react-i18next";

interface SuccessStoriesProps {
  stories: SuccessStory[];
  colors: ProgramColors;
}

export default function SuccessStories({ stories, colors }: SuccessStoriesProps) {
  const { t } = useTranslation();
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
            <h2 className="mb-3 text-3xl md:text-4xl font-contrail" style={{ color: colors.secondary }}>
              {t("successStories.title")}
            </h2>
            <p className="text-base text-gray-600 md:text-lg">{t("successStories.subtitle")}</p>
          </motion.div>

          <div className="grid justify-items-center gap-6 text-center md:grid-cols-2 lg:grid-cols-3 lg:[&>*:nth-last-child(1):nth-child(3n+1)]:col-start-2">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="mb-4 text-xl font-semibold" style={{ color: colors.secondary }}>
                  {story.title}
                </h3>
                <p className="mb-6 flex-grow leading-relaxed text-gray-600">{story.description}</p>
                {story.link ? (
                  <Link
                    href={story.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold hover:underline"
                    style={{ color: colors.primary }}
                  >
                    {t("programDetail.readMore")}
                    <ExternalLink size={16} />
                  </Link>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
