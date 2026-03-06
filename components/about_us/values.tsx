"use client";

import { AnimatePresence, motion } from "framer-motion";
import { JSX, useMemo, useState } from "react";

const VALUES = [
  {
    title: "LIDERAZGO",
    description:
      "No solo cultivamos este valor en las personas con las que trabajamos, sino también en el equipo y en toda la organización. Creemos en un liderazgo que incluye, transforma, inspira y hace que las cosas pasen.",
    colors: {
      fill: "#8f1f1b",
      stroke: "#f6c5bf",
      glow: "rgba(143,31,27,0.28)",
    },
  },
  {
    title: "COMPROMISO",
    description:
      "Impulsamos soluciones a problemas sociales junto a líderes locales y emergentes, brindando herramientas de desarrollo personal y profesional y dando lo mejor de nosotros en cada proyecto y actividad.",
    colors: {
      fill: "#a82822",
      stroke: "#f1b1aa",
      glow: "rgba(168,40,34,0.24)",
    },
  },
  {
    title: "EMPATÍA",
    description:
      "El corazón de FLA son las personas. Por y para ellas trabajamos, invirtiendo tiempo y recursos en el desarrollo integral de cada una, desde la autenticidad, el amor y la entrega.",
    colors: {
      fill: "#c03d34",
      stroke: "#f5bfb8",
      glow: "rgba(192,61,52,0.22)",
    },
  },
  {
    title: "LIBERTAD",
    description:
      "Defendemos la libertad de elegir, pensar y ser, respetando a los demás y sus singularidades. También nos guiamos por nuestros principios para decidir con autonomía como organización.",
    colors: {
      fill: "#d95a4d",
      stroke: "#f8cbc3",
      glow: "rgba(217,90,77,0.22)",
    },
  },
  {
    title: "INNOVACIÓN",
    description:
      "Nos reinventamos para mantenernos a la vanguardia, con propuestas educativas disruptivas y de calidad. Somos una usina de ideas construida de manera colaborativa, con movimiento constante.",
    colors: {
      fill: "#eb7a63",
      stroke: "#ffd8d0",
      glow: "rgba(235,122,99,0.22)",
    },
  },
] as const;

type SegmentPath = {
  d: string;
  labelX: number;
  labelY: number;
};

function polarToCartesian(cx: number, cy: number, radius: number, angle: number) {
  const radians = (Math.PI / 180) * angle;
  return {
    x: cx + radius * Math.cos(radians),
    y: cy - radius * Math.sin(radians),
  };
}

function createSegmentPath(startAngle: number, endAngle: number): SegmentPath {
  const cx = 500;
  const cy = 520;
  const outerRadius = 430;
  const innerRadius = 258;
  const labelRadius = 345;

  const startOuter = polarToCartesian(cx, cy, outerRadius, startAngle);
  const endOuter = polarToCartesian(cx, cy, outerRadius, endAngle);
  const endInner = polarToCartesian(cx, cy, innerRadius, endAngle);
  const startInner = polarToCartesian(cx, cy, innerRadius, startAngle);
  const labelPoint = polarToCartesian(cx, cy, labelRadius, (startAngle + endAngle) / 2);

  return {
    d: [
      `M ${startOuter.x} ${startOuter.y}`,
      `A ${outerRadius} ${outerRadius} 0 0 1 ${endOuter.x} ${endOuter.y}`,
      `L ${endInner.x} ${endInner.y}`,
      `A ${innerRadius} ${innerRadius} 0 0 0 ${startInner.x} ${startInner.y}`,
      "Z",
    ].join(" "),
    labelX: labelPoint.x,
    labelY: labelPoint.y,
  };
}

export default function Values(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  const segments = useMemo(() => {
    const start = 180;
    const sweep = 180 / VALUES.length;
    return VALUES.map((_, index) =>
      createSegmentPath(start - sweep * index, start - sweep * (index + 1))
    );
  }, []);

  return (
    <section className="px-0 py-0 -mt-2">
      <div className="mx-auto max-w-4xl">
        <div className="relative">
          <div className="relative aspect-[10/7] w-full">
            <svg viewBox="0 0 1000 560" className="h-full w-full" aria-hidden="true">
              {segments.map((segment, index) => {
                const value = VALUES[index];
                const isActive = activeIndex === index;

                return (
                  <g key={value.title}>
                    <path
                      d={segment.d}
                      fill={value.colors.fill}
                      fillOpacity={isActive ? 1 : 0.82}
                      stroke={value.colors.stroke}
                      strokeWidth={isActive ? 3.5 : 2}
                      style={{
                        filter: isActive ? `drop-shadow(0 16px 26px ${value.colors.glow})` : "none",
                        transition: "all 220ms ease",
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            {segments.map((segment, index) => {
              const value = VALUES[index];
              const isActive = activeIndex === index;
              const xPercent = (segment.labelX / 1000) * 100;
              const yPercent = (segment.labelY / 560) * 100;

              return (
                <button
                  key={value.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${xPercent}%`,
                    top: `${yPercent}%`,
                  }}
                  aria-label={value.title}
                >
                  <span
                    className={`inline-flex min-w-[104px] justify-center rounded-full px-3 py-2 text-[9px] font-black uppercase tracking-[0.22em] text-white transition-all duration-200 md:min-w-[132px] md:px-4 md:text-[11px] ${
                      isActive
                        ? "bg-white/18 shadow-[0_10px_22px_rgba(255,255,255,0.2)] backdrop-blur-sm"
                        : "bg-transparent"
                    }`}
                  >
                    {value.title}
                  </span>
                </button>
              );
            })}

          </div>

          <div className="mt-2 px-4 text-center md:mt-3 md:px-8 lg:mt-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={VALUES[activeIndex].title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.26, ease: "easeOut" }}
                  className="mx-auto max-w-2xl text-center"
                >
                  <p className="text-[11px] font-black uppercase tracking-[0.34em] text-[#9d211c] md:text-[12px]">
                    {VALUES[activeIndex].title}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#341715] md:text-[18px]">
                    {VALUES[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
