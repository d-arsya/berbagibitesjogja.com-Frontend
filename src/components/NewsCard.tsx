import Image from "next/image";
import Link from "next/link";

interface ProgramAttribute {
    image: {
        source_url: string;
        width: number;
        height: number;
    };
    alt_image: string;
    title: string;
    excerpt: string;
    slug: string;
    date: string;
}
function formatDate(date: string): string {
    const d = new Date(date);
    // format manual supaya tidak tergantung locale
    return `${d.getUTCDate()} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export default function NewsCard(props: ProgramAttribute) {
    const { image, alt_image, title, slug, excerpt, date } = props;

    return (
        <Link href={`/news/${slug}`} className="w-full md:w-1/3 p-2 md:p-6 rounded-md">
            <Image className="rounded-xl w-full" src={image.source_url} alt={alt_image} width={image.width} height={image.height} />
            <h1 className="text-gray-400 font-semibold mt-6">{formatDate(date)}</h1>
            <h1 className="text-navy font-semibold text-3xl my-6">{title}</h1>
            <p className="text-sm leading-8 font-medium mt-2 text-gray-400" dangerouslySetInnerHTML={{ __html: excerpt }}></p>
        </Link>
    );
}

