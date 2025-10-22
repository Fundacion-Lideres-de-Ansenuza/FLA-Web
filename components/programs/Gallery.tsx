"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Images } from "lucide-react";
import type { ProgramColors } from "./types";

interface GalleryProps {
  type: 'drive' | 'images';
  url?: string;
  images?: string[];
  colors: ProgramColors;
}

export default function Gallery({ type, url, images, colors }: GalleryProps) {
  if (type === 'drive' && !url) return null;
  if (type === 'images' && (!images || images.length === 0)) return null;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Galería</h2>
            <p className="text-lg text-gray-600">
              Momentos que capturan nuestra experiencia
            </p>
          </motion.div>

          {type === 'drive' && url && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div
                className="inline-block p-8 md:p-12 rounded-2xl"
                style={{ backgroundColor: `${colors.primary}15` }}
              >
                <Images
                  size={64}
                  style={{ color: colors.primary }}
                  className="mx-auto mb-6"
                />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Ver todas las fotos y videos
                </h3>
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: colors.primary }}
                >
                  Abrir galería
                  <ExternalLink size={20} />
                </Link>
              </div>
            </motion.div>
          )}

          {type === 'images' && images && images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="aspect-square rounded-xl overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`Galería imagen ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

