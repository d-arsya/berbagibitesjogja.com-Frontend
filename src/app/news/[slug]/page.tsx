import SidebarNews from "@/components/SidebarNews";
import Link from "next/link";
import type { Metadata } from 'next'

type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const slug = (await params).slug

    // fetch post information
    const post = await fetch(`https://news-api.berbagibitesjogja.com/wp-json/wp/v2/posts?slug=${slug}`, { next: { revalidate: 3600 } }).then((res) =>
        res.json()
    )
    const data = post[0];
    const yoast = data.yoast_head_json;

    return {
        title: data.title.rendered,
        description: yoast.description,
        openGraph: {
            description: yoast.og_description,
            title: yoast.og_title,
            type: "article",
            url: "https://berbagibitesjogja.com/news/" + slug,
            images: yoast.og_image
        },
        twitter: {
            title: data.title.rendered,
            description: yoast.og_description,
            images: yoast.og_image
        }
    }
}

function formatDate(date: string): string {
    const dateString = new Date(date);

    const formatted = dateString.toLocaleDateString("en-US", {
        month: "short", // "Jun"
        day: "numeric", // "1"
        year: "numeric", // "2025"
    });
    return formatted
}
export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const response = await fetch(`https://news-api.berbagibitesjogja.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
    const rawNews = await response.json();
    const post = rawNews[0];
    return (
        <div className="px-6 md:px-12 pt-12 pb-6 flex flex-col md:flex-row">
            <div className="md:w-2/3">
                <h1><Link href="/">Home</Link> &gt; <Link href="/news">Artikel</Link> &gt;  <Link href={'/news/' + slug}>{post.title.rendered}</Link></h1>
                <h1 className="text-navy font-semibold text-3xl md:text-5xl leading-12 md:leading-16">{post.title.rendered}</h1>
                <h1 className="font-bold text-gray-400">{formatDate(post.date)}</h1>
                <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />

            </div>
            <SidebarNews slug={slug} />
        </div>
    );
}
