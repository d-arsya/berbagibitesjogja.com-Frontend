import SmolNewsCard from "./SmallNewsCardBottom";
interface PostAttribute {
  id: number;
  image: {
    source_url: string;
    width: number;
    height: number;
  };
  alt_image: string;
  title: string;
  slug: string;
  excerpt: string;
  authorName: string;
  authorImage: string;
  date: string;
}
export default async function BottomArticle({
  slug,
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
      slug: post.slug,
      authorName: post.authors?.[0]?.display_name || "",
      authorImage: post.authors?.[0]?.avatar_url || "",
      date: post.date,
      excerpt: post.excerpt.rendered,
    };
  });
  const post = news.filter((post: PostAttribute) => post.slug !== slug);
  return (
    <div className="flex">
      {post.slice(4, 8).map((post: PostAttribute) => (
        <SmolNewsCard
          key={post.id}
          image={post.image}
          alt_image={post.alt_image}
          title={post.title}
          slug={post.slug}
          authorName={post.authorName}
          authorImage={post.authorImage}
          date={post.date}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  );
}
