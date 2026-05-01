import type { MetadataRoute } from "next";

const SITE_URL = "https://www.lideresdeansenuza.org";

type RouteConfig = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

const routes: RouteConfig[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/donar", changeFrequency: "weekly", priority: 0.95 },
  { path: "/contactanos", changeFrequency: "monthly", priority: 0.85 },
  { path: "/quienes-somos", changeFrequency: "monthly", priority: 0.8 },
  { path: "/programas", changeFrequency: "weekly", priority: 0.85 },
  { path: "/programas/ambientalia", changeFrequency: "monthly", priority: 0.8 },
  { path: "/programas/somos", changeFrequency: "monthly", priority: 0.8 },
  { path: "/programas/lideres", changeFrequency: "monthly", priority: 0.8 },
  { path: "/programas/potenciate", changeFrequency: "monthly", priority: 0.65 },
  { path: "/programas/futuras", changeFrequency: "monthly", priority: 0.65 },
  { path: "/programas/impulsatec", changeFrequency: "monthly", priority: 0.65 },
  { path: "/programas/ciencia-fuera-de-la-caja", changeFrequency: "monthly", priority: 0.65 },
  { path: "/programas/aventura-matematica", changeFrequency: "monthly", priority: 0.65 },
  { path: "/politicas-de-privacidad", changeFrequency: "yearly", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
