

import Image from "next/image"
interface TestimoniAttribute {
    image: string,
    name: string,
    role: string,
    description: string,
    rating: number,
}
export default function TestimoniCard({ ...data }: TestimoniAttribute) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col text-start gap-y-2">
            <div className="flex gap-3">
                <Image
                    width={64}
                    height={64}
                    src={data.image}
                    alt="Sarah Wijaya"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <p className="font-bold text-md">{data.name}</p>
                    <p className="text-xs text-slate-500">{data.role}</p>
                </div>
            </div>
            <p className="text-sm text-slate-600">
                &quot;{data.description}&quot;
            </p>
            <div className="flex">
                <span className="text-yellow-500">
                    {"★".repeat(data.rating)}
                    {"☆".repeat(5 - data.rating)}
                </span>
            </div>
        </div>
    )
}