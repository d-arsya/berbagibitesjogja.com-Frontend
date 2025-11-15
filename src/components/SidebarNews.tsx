import Link from "next/link";
import SmallNewsCard from "./SmallNewsCard";
interface PostAttribute {
  id: number;
  image: {
    source_url: string;
    width: number;
    height: number;
  };
  alt_image: string;
  title: string;
  excerpt: string;
  slug: string;
  authorName: string;
  authorImage: string;
  date: string;
}
export default async function SidebarNews({
  slug,
  author,
  date,
}: {
  slug: string;
  author: string;
  date: string;
}) {
  const response = await fetch(
    "https://news-api.berbagibitesjogja.com/wp-json/wp/v2/posts?_embed",
    { next: { revalidate: 10 } }
  );
  const rawNews = await response.json();
  const news = rawNews.map((post: any) => {
    const featured = post._embedded?.["wp:featuredmedia"]?.[0];
    return {
      id: post.id,
      image:
        featured?.media_details?.sizes?.medium ||
        featured?.media_details?.sizes?.full,
      alt_image: featured?.alt_text || post.title.rendered,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
      slug: post.slug,
      authorName: post.authors?.[0]?.display_name || "",
      authorImage: post.authors?.[0]?.avatar_url || "",
      date: post.date,
    };
  });
  const post = news.filter((post: PostAttribute) => post.slug !== slug);
  function formatDate(date: string): string {
    const dateString = new Date(date);

    const formatted = dateString.toLocaleDateString("id-ID", {
      month: "short", // "Jun"
      day: "numeric", // "1"
      year: "numeric", // "2025"
    });
    return formatted;
  }
  return (
    <div className="w-full md:w-1/3 md:pl-24">
      <p className="text-navy text-md">Tanggal Publish</p>
      <p className="text-gray-500 text-md">{formatDate(date)}</p>
      <p className="text-navy text-md">Penulis</p>
      <p className="text-gray-500 text-md mb-8">{author}</p>
      <Link href={"/news"} className="text-navy text-xl font-semibold">
        Artikel lainnya
      </Link>
      <div>
        {post.slice(0, 4).map((post: PostAttribute) => (
          <SmallNewsCard
            key={post.id}
            image={post.image}
            alt_image={post.alt_image}
            title={post.title}
            excerpt={post.excerpt}
            slug={post.slug}
            authorName={post.authorName}
            authorImage={post.authorImage}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
}
