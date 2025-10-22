"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { BlogPost } from "./types";
import type { ProgramColors } from "./types";

interface BlogLinksProps {
  posts: BlogPost[];
  colors: ProgramColors;
}

export default function BlogLinks({ posts, colors }: BlogLinksProps) {
  if (posts.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Notas y noticias</h2>
            <p className="text-lg text-gray-600">
              Descubrí más sobre el programa en nuestro blog
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 group h-full"
                >
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:underline">
                      {post.title}
                    </h3>
                    <span
                      className="text-sm font-medium inline-flex items-center gap-1"
                      style={{ color: colors.primary }}
                    >
                      Leer artículo
                      <ExternalLink size={14} />
                    </span>
                  </div>
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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

