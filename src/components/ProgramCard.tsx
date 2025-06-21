import Image, { StaticImageData } from "next/image"
import Link from "next/link"
interface ProgramAttribute {
    key: number,
    flag: string,
    image: StaticImageData,
    title: string,
    description: string,
    icon: string,
    link: string
    aos: string
}
export default function ProgramCard({ ...data }: ProgramAttribute) {
    return (
        <div data-aos={data.aos} className='shadow-xl rounded-md overflow-hidden' key={data.key}>
            <div className="relative w-full">
                <Image className="object-cover" src={data.image} alt='Makan' />
                <span className="absolute bottom-4 left-4 bg-navy text-white rounded-full px-4 py-2 text-sm">
                    {data.flag}
                </span>
            </div>
            <div className='p-6 md:p-12'>
                <div className='flex flex-row gap-x-3 items-center'>
                    <div className='bg-navy-light rounded-full p-3 w-max h-max'>
                        <Image src={data.icon} alt='Makan' />
                    </div>
                    <span className='font-bold text-lg text-gray-400'>{data.title}</span>
                </div>
                <p className='my-8 text-gray-400'>{data.description}</p>
                <Link className='text-navy' href={data.link}>Selengkapnya</Link>

            </div>
        </div>
    )
}