import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/about`, priority: 0.8 },
    { url: `${base}/ministries`, priority: 0.8 },
    { url: `${base}/events`, priority: 0.7 },
    { url: `${base}/sermons`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.7 },
  ];
}


