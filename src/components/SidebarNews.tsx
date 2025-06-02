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
    slug: string;
}
export default async function SidebarNews({ slug }: { slug: string }) {
    const response = await fetch('https://news-api.berbagibitesjogja.com/wp-json/wp/v2/posts?_embed')
    const rawNews = await response.json();
    const news = rawNews.map((post: any) => {
        const featured = post._embedded?.['wp:featuredmedia']?.[0];
        return {
            id: post.id,
            image: featured?.media_details?.sizes?.medium,
            alt_image: featured?.alt_text || post.title.rendered,
            title: post.title.rendered,
            slug: post.slug,
        };
    });
    const post = news.filter((post: PostAttribute) => post.slug !== slug);
    return (
        <div className="w-full md:w-1/3 md:pl-24">
            <Link href={'/news'} className="text-navy text-md font-semibold">Artikel lainnya</Link>
            <div>
                {post.slice(0, 4).map((post: PostAttribute) => (
                    <SmallNewsCard
                        key={post.id}
                        image={post.image}
                        alt_image={post.alt_image}
                        title={post.title}
                        slug={post.slug}
                    />
                ))}

            </div>
        </div>
    );
}

