import type { MetadataRoute } from "next";

const SITE_URL = "https://www.lideresdeansenuza.org";
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        // OpenAI documents this bot as the crawler used for ChatGPT search features.
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        // Keep training controls independent from ChatGPT search discoverability.
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
