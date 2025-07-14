import Image from "next/image"
import Link from "next/link"
interface ProgramAttribute {
    flag: string,
    image: string,
    title: string,
    description: string,
    link: string
    aos: string,
    date: string
}
export default function StoryRescueCard({ ...data }: ProgramAttribute) {
    return (
        <div data-aos={data.aos} className='shadow-xl rounded-md overflow-hidden'>
            <div className="w-full">
                <Image className="object-cover w-max" width={720} height={480} src={data.image} alt='Makan' />
            </div>
            <div className='p-6'>
                <span className="bg-navy-light text-navy rounded-full px-2 py-1 text-sm">
                    {data.flag}
                </span>
                <p className="inline ml-3 font-semibold text-slate-400">{data.date}</p>
                <p className='font-bold text-lg my-2'>{data.title}</p>
                <p className='text-gray-400 my-2'>{data.description}</p>
                <Link className='text-navy' href={data.link}>Selengkapnya</Link>

            </div>
        </div>
    )
}