"use client"
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import HollandBakeryLogo from 'public/logo/holland-bakery.png'
import SheratonLogo from 'public/logo/sheraton-mustika.png'
import ArtotelLogo from 'public/logo/artotel.png'
import LovingHutLogo from 'public/logo/loving-hut.png'
import FlamboyanLogo from 'public/logo/flamboyan.png'
import BcaLogo from 'public/logo/bca.png'
import HarperLogo from 'public/logo/harper.png'
import PemkotLogo from 'public/logo/pemkot.png'
import RoyalLogo from 'public/logo/royal-ambarukmo.png'
import Image from 'next/image'
import Link from 'next/link'
export default function MitraCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ stopOnInteraction: false, delay: 2500 })])
    const partners = [
        {
            "name": "Holland Bakery",
            "image": HollandBakeryLogo,
            "link": 'https://www.hollandbakery.co.id'
        },
        {
            "name": "Sheraton Mustika Yogyakarta",
            "image": SheratonLogo,
            "link": 'https://www.mustikayogyakarta.com/'
        },
        {
            "name": "Artotel Yogyakarta",
            "image": ArtotelLogo,
            "link": 'https://artotelyogyakarta.com/'
        },
        {
            "name": "Roti Flamboyan 47",
            "image": FlamboyanLogo,
            "link": 'https://www.instagram.com/roti.flamboyan47/'
        },
        {
            "name": "Loving Hut",
            "image": LovingHutLogo,
            "link": 'https://www.instagram.com/veganshopjogja/'
        },
        {
            "name": "Bank Central Asia",
            "image": BcaLogo,
            "link": 'https://www.bca.co.id/'
        },
        {
            "name": "Hotel Harper Malioboro",
            "image": HarperLogo,
            "link": 'https://www.harperhotels.com/en/hotel/view/2/harper-malioboro-yogyakarta'
        },
        {
            "name": "Pemerintah Kota Yogyakarta",
            "image": PemkotLogo,
            "link": 'https://jogjakota.go.id/'
        },
        {
            "name": "Royal Ambarrukmo Hotel",
            "image": RoyalLogo,
            "link": 'https://www.royalambarrukmo.com/'
        },
    ]

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container gap-x-5">
                {partners.map((e, i) => (
                    <Link key={i} href={e.link} className='embla__slide h-48 flex items-center justify-center object-contain'>
                        <Image
                            key={e.name}
                            className=""
                            src={e.image}
                            alt={`${e.name} Logo`}
                        />

                    </Link>

                ))}
            </div>

        </div>
    );
}

