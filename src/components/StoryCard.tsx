import Image, { StaticImageData } from "next/image"
import Link from "next/link"
interface ProgramAttribute {
    key: number,
    image: StaticImageData,
    title: string,
    date: string,
    description: string,
    link: string
}
export default function StoryCard({ ...data }: ProgramAttribute) {
    return (
        <div className='bg-slate-100 shadow-xl rounded-md overflow-hidden' key={data.key}>
            <div className="relative w-full">
                <Image className="object-cover" src={data.image} alt='Makan' />
            </div>
            <div className='p-2 md:p-4'>
                <div className='flex flex-col gap-x-3'>
                    <span className='text-navy text-sm'>{data.date}</span>
                    <span className='font-bold text-lg'>{data.title}</span>   
                </div>
                <p className='my-2 text-gray-400'>{data.description}</p>
                <Link className='text-navy' href={data.link}>Selengkapnya</Link>

            </div>
        </div>
    )
}