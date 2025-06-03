import Link from "next/link";
import Image from "next/image";
import NewsCard from "@/components/NewsCard";
import IconTangan from 'public/svg/hand-love.svg'
import IconJabat from 'public/svg/hand-shake.svg'
import IconGotong from 'public/svg/work-together.svg'
import { Metadata } from "next";

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
    date: string;
}

interface WPImageSize {
    source_url: string;
    width: number;
    height: number;
}

interface WPPost {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    slug: string;
    date: string;
    _embedded?: {
        'wp:featuredmedia'?: {
            alt_text: string;
            media_details: {
                sizes: Record<string, WPImageSize | undefined>; // ✅ FIX HERE
            };
        }[];
    };
}


interface NewsItem {
    id: number;
    image?: {
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

export default async function Page() {
    const response = await fetch('https://news-api.berbagibitesjogja.com/wp-json/wp/v2/posts?_embed', { next: { revalidate: 10 } })
    const rawNews = await response.json();
    const news = rawNews.map((post: WPPost): NewsItem => {
        const featured = post._embedded?.['wp:featuredmedia']?.[0];
        return {
            id: post.id,
            image: featured?.media_details?.sizes?.full,
            alt_image: featured?.alt_text || post.title.rendered,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered,
            slug: post.slug,
            date: post.date,
        };
    });

    return (
        <>
            <h1 className="text-3xl font-bold text-center text-navy">Artikel Terbaru</h1>
            <div className="flex flex-col md:flex-row justify-center flex-wrap gap-y-12 py-20">
                {news.map((post: PostAttribute) => (
                    <NewsCard
                        key={post.id}
                        image={post.image}
                        alt_image={post.alt_image}
                        title={post.title}
                        excerpt={post.excerpt}
                        slug={post.slug}
                        date={post.date}
                    />
                ))}

            </div>
            <section className='-mx-2 md:-mx-32 bg-navy py-12 px-6 md:px-32'>
                <div className='bg-tosca-light rounded-4xl p-6 md:p-12'>
                    <h1 className='text-white font-bold text-4xl text-center'>Bergabung Bersama Kami</h1>
                    <p className='text-white text-center text-lg w-full md:w-1/2 m-auto mt-6'>Pilih peran Anda dalam perjalanan ini - melalui donasi, aksi langsung sebagai relawan, atau kolaborasi sebagai mitra penyelamat pangan </p>
                    <div className='flex flex-col md:flex-row justify-between gap-x-12 gap-y-12 my-6'>
                        <div className='rounded-2xl bg-white w-full md:w-1/3 overflow-hidden'>
                            <div className='bg-navy-light py-8'>
                                <Image width={40} src={IconTangan} alt='icon-air' className='m-auto' />
                                <h4 className='text-center text-navy font-bold text-2xl mt-4'>Donasi</h4>
                            </div>
                            <div className='px-6 mt-3'>
                                <div className='flex flex-row justify-between'>
                                    <span>Rp 50.000</span>
                                    <span>5 Keluarga</span>
                                </div>
                                <div className='w-full bg-gray-400 mt-2' style={{ height: '0.5px' }}></div>
                            </div>
                            <div className='px-6 mt-3'>
                                <div className='flex flex-row justify-between font-bold'>
                                    <span>Rp 100.000</span>
                                    <span>10 Keluarga</span>
                                </div>
                                <div className='w-full bg-gray-400 mt-2' style={{ height: '0.5px' }}></div>
                            </div>
                            <div className='px-6 mt-3'>
                                <div className='flex flex-row justify-between'>
                                    <span>Rp 200.000</span>
                                    <span>20 Keluarga</span>
                                </div>
                                <div className='w-full bg-gray-400 mt-2' style={{ height: '0.5px' }}></div>
                            </div>
                            <div className='p-6'>
                                <Link href={'/donasi'} className='bg-navy rounded-md block py-2 text-center w-full text-white font-bold'>Donasi Sekarang</Link>
                            </div>
                        </div>
                        <div className='rounded-2xl bg-white w-full md:w-1/3 overflow-hidden'>
                            <div className='bg-navy-light py-8'>
                                <Image src={IconGotong} alt='icon-air' className='m-auto' />
                                <h4 className='text-center text-navy font-bold text-2xl mt-4'>Relawan</h4>
                            </div>
                            <div className='p-6'>
                                <div className='flex flex-col gap-y-2 pb-3'>
                                    <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                                    </svg>
                                        Pengambilan makanan</p>
                                    <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                                    </svg>Distribusi ke komunitas</p>
                                    <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                                    </svg>Kampanye edukasi</p>
                                    <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                                    </svg>Administrasi</p>

                                </div>
                                <Link href={'/gabung/relawan'} className='bg-navy rounded-md block py-2 text-center w-full text-white font-bold'>Daftar Relawan</Link>
                            </div>
                        </div>
                        <div className='rounded-2xl bg-white w-full md:w-1/3 overflow-hidden'>
                            <div className='bg-navy-light py-8'>
                                <Image width={40} src={IconJabat} alt='icon-air' className='m-auto' />
                                <h4 className='text-center text-navy font-bold text-2xl mt-4'>Mitra</h4>
                            </div>
                            <div className='p-6'>
                                <div className='flex flex-col gap-y-2 pb-3'>
                                    <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                                    </svg>
                                        Restoran</p>
                                    <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                                    </svg>Hotel</p>
                                    <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                                    </svg>Toko Makanan</p>
                                    <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                                    </svg>Pasar Tradisional</p>

                                </div>
                                <Link href={'/gabung/mitra'} className='bg-navy rounded-md block py-2 text-center w-full text-white font-bold'>Jadi Mitra</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
