"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { ProgramColors } from "./types";

interface ProgramVideoProps {
  video?: {
    url: string;
    title: string;
  };
  colors?: ProgramColors;
}

function getYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1) || null;
    }
    if (parsed.searchParams.has("v")) {
      return parsed.searchParams.get("v");
    }
    const embedMatch = parsed.pathname.match(/\/embed\/([^/]+)/);
    if (embedMatch) return embedMatch[1];
    return null;
  } catch {
    return null;
  }
}

export default function ProgramVideo({ video, colors }: ProgramVideoProps) {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = useMemo(() => (video ? getYouTubeId(video.url) : null), [video]);

  if (!video || !videoId) return null;

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-fla text-center mb-8"
            style={colors ? { color: colors.primary } : undefined}
          >
            {video.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl bg-black"
          >
            {isPlaying ? (
              <iframe
                src={embedUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="group absolute inset-0 h-full w-full cursor-pointer"
                aria-label={t("programDetail.watchVideo")}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={thumbnailUrl}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                  <span
                    className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-110"
                    style={colors ? { color: colors.primary } : undefined}
                  >
                    <Play className="h-7 w-7 md:h-8 md:w-8 fill-current" style={{ marginLeft: "2px" }} />
                  </span>
                </span>
                <span className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-white">
                  {t("programDetail.watchVideo")}
                </span>
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
