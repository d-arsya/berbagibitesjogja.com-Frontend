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
    slug: string;
}
export default function SmallNewsCard(props: ProgramAttribute) {
    const { image, alt_image, title, slug } = props;

    return (
        <Link href={`/news/${slug}`} className="w-full md:w-1/3 p-2 md:p-6 rounded-md">
            <Image className="rounded-xl w-full" src={image.source_url} alt={alt_image} width={image.width} height={image.height} />
            <h1 className="text-navy font-semibold text-xl my-2">{title}</h1>
        </Link>
    );
}

