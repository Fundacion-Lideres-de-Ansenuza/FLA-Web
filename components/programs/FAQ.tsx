"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ as FAQType, ProgramColors } from "./types";

interface FAQProps {
  faqs: FAQType[];
  colors: ProgramColors;
}

export default function FAQ({ faqs, colors }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="mb-4 text-4xl md:text-5xl font-contrail-one" style={{ color: colors.secondary }}>
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-gray-600">Resolvé tus dudas sobre el programa</p>
          </motion.div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="overflow-hidden rounded-xl bg-gray-50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-gray-100"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="pr-4 text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDown
                    size={24}
                    style={{ color: colors.primary }}
                    className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="leading-relaxed text-gray-700">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

