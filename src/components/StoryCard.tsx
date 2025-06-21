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
}
export default function ProgramCard({ ...data }: ProgramAttribute) {
    return (
        <div className='shadow-xl rounded-md overflow-hidden' key={data.key}>
            <div className="relative w-full">
                <Image className="object-cover" src={data.image} alt='Makan' />
            </div>
            <div className='p-6 md:p-12'>
                <div className='flex flex-row gap-x-3 items-center'>
                    <span className='font-bold text-lg text-gray-400'>{data.title}</span>
                </div>
                <p className='my-8 text-gray-400'>{data.description}</p>
                <Link className='text-navy' href={data.link}>Selengkapnya</Link>

            </div>
        </div>
    )
}