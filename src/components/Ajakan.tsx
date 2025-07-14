import Link from "next/link";

export default function Ajakan() {
    return (
        <section className='-mx-2 md:-mx-32 bg-navy py-12 md:px-32 px-4 text-center'>
            <h1 className='text-4xl font-bold text-white'>Jadilah Bagian dari Perubahan</h1>
            <p className='text-slate-200 my-12'>Bergabunglah dengan kami dalam misi mengurangi limbah makanan dan membantu sesama di Yogyakarta.</p>
            <div className="flex justify-between gap-x-6 m-auto w-max">
                <Link className='rounded-full bg-white w-32 py-3 text-navy hover:bg-tosca hover:text-white' href='/'>Jadi Relawan</Link>
                <Link className='rounded-full w-32 py-3 border border-white text-white hover:text-navy hover:bg-white' href='/'>Jadi Mitra</Link>
            </div>
        </section>
    )
}