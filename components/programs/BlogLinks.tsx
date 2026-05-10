"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { BlogPost, ProgramColors } from "./types";

interface BlogLinksProps {
  posts: BlogPost[];
  colors: ProgramColors;
}

export default function BlogLinks({ posts, colors }: BlogLinksProps) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="mb-4 text-4xl md:text-5xl font-contrail-one" style={{ color: colors.secondary }}>
              Notas y noticias
            </h2>
            <p className="text-lg text-gray-600">Descubrí más sobre el programa en nuestro blog</p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-start gap-4 rounded-xl bg-white p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex-grow">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:underline">{post.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: colors.primary }}>
                      Leer articulo
                      <ExternalLink size={14} />
                    </span>
                  </div>
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    <ExternalLink size={20} style={{ color: colors.primary }} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

