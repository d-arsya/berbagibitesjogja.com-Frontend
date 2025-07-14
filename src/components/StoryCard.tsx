import Image from "next/image"
import Link from "next/link"
interface ProgramAttribute {
    image: string,
    title: string,
    date: string,
    description: string,
    link: string
}
export default function StoryCard({ ...data }: ProgramAttribute) {
    return (
        <div className='bg-white shadow-xl rounded-md overflow-hidden'>
            <div className="w-full">
                <Image width={720} height={480} className="object-cover w-max" src={data.image} alt='Makan' />
            </div>
            <div className='p-4 md:p-6'>
                <div className='flex flex-col gap-x-3 gap-y-3'>
                    <span className='text-navy text-md font-bold'>{data.date}</span>
                    <span className='font-bold text-lg'>{data.title}</span>
                </div>
                <p className='my-2 text-gray-400'>{data.description}</p>
                <Link className='text-navy' href={data.link}>Selengkapnya</Link>

            </div>
        </div>
    )
}