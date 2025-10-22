"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { SuccessStory } from "./types";
import type { ProgramColors } from "./types";

interface SuccessStoriesProps {
  stories: SuccessStory[];
  colors: ProgramColors;
}

export default function SuccessStories({ stories, colors }: SuccessStoriesProps) {
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
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Historias de éxito</h2>
            <p className="text-lg text-gray-600">
              Jóvenes que están transformando sus comunidades
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {story.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {story.description}
                </p>
                {story.link && (
                  <Link
                    href={story.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold hover:underline"
                    style={{ color: colors.primary }}
                  >
                    Leer más
                    <ExternalLink size={16} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

