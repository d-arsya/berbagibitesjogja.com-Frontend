import type { MetadataRoute } from "next";
interface Sitemap {
  url: string;
  lastModified: Date;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}

async function getNews(): Promise<Sitemap[]> {
  const response = await fetch(
    "https://news-api.berbagibitesjogja.com/wp-json/wp/v2/posts?_fields=slug,date",
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts: { slug: string; date: Date }[] = await response.json();

  return posts.map(
    (post): Sitemap => ({
      url: `https://berbagibitesjogja.com/news/${post.slug}`,
      lastModified: post.date, // Bisa diganti kalau punya field date
      changeFrequency: "weekly",
      priority: 0.9,
    })
  );
}
export const dynamic = "force-dynamic";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsLinks = await getNews();
  return [
    {
      url: "https://berbagibitesjogja.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://berbagibitesjogja.com/distribusi",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://berbagibitesjogja.com/edukasi",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://berbagibitesjogja.com/penyelamatan",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://berbagibitesjogja.com/donasi",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://berbagibitesjogja.com/gabung",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://berbagibitesjogja.com/gabung/mitra",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://berbagibitesjogja.com/gabung/relawan",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://berbagibitesjogja.com/news",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...newsLinks,
  ];
}
