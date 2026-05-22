import type { MetadataRoute } from "next";

const SITE_URL = "https://www.lideresdeansenuza.org";
export const dynamic = "force-static";

type RouteConfig = {
  path: string;
  lastModified: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

const routes: RouteConfig[] = [
  { path: "/", lastModified: "2026-05-22", changeFrequency: "weekly", priority: 1 },
  { path: "/donar", lastModified: "2026-05-22", changeFrequency: "weekly", priority: 0.95 },
  { path: "/contactanos", lastModified: "2026-05-22", changeFrequency: "monthly", priority: 0.85 },
  { path: "/quienes-somos", lastModified: "2026-05-22", changeFrequency: "monthly", priority: 0.8 },
  { path: "/programas", lastModified: "2026-05-22", changeFrequency: "weekly", priority: 0.85 },
  { path: "/programas/ambientalia", lastModified: "2026-05-22", changeFrequency: "monthly", priority: 0.8 },
  { path: "/programas/somos", lastModified: "2026-05-22", changeFrequency: "monthly", priority: 0.8 },
  { path: "/programas/lideres", lastModified: "2026-05-22", changeFrequency: "monthly", priority: 0.8 },
  { path: "/programas/potenciate", lastModified: "2026-05-22", changeFrequency: "monthly", priority: 0.65 },
  { path: "/programas/futuras", lastModified: "2026-05-22", changeFrequency: "monthly", priority: 0.65 },
  { path: "/programas/impulsatec", lastModified: "2026-05-22", changeFrequency: "monthly", priority: 0.65 },
  { path: "/programas/ciencia-fuera-de-la-caja", lastModified: "2026-05-22", changeFrequency: "monthly", priority: 0.65 },
  { path: "/programas/aventura-matematica", lastModified: "2026-05-22", changeFrequency: "monthly", priority: 0.65 },
  { path: "/politicas-de-privacidad", lastModified: "2026-05-22", changeFrequency: "yearly", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }));
}
