"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Sponsor } from "./types";
import { useTranslation } from "react-i18next";

interface SponsorsProps {
  sponsors: Sponsor[];
}

export default function Sponsors({ sponsors }: SponsorsProps) {
  const { t } = useTranslation();
  if (sponsors.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">{t("programDetail.sponsorsTitle")}</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                {sponsor.logo ? (
                  <div className="relative w-full h-16">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-lg font-semibold text-gray-700 text-center">
                    {sponsor.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
