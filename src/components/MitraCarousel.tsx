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
import Image from 'next/image'
export default function MitraCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ stopOnInteraction: false, delay: 2500 })])
    const partners = [
        {
            "name": "Holland Bakery",
            "image": HollandBakeryLogo
        },
        {
            "name": "Sheraton Mustika Yogyakarta",
            "image": SheratonLogo
        },
        {
            "name": "Artotel Yogyakarta",
            "image": ArtotelLogo
        },
        {
            "name": "Roti Flamboyan 47",
            "image": FlamboyanLogo
        },
        {
            "name": "Loving Hut",
            "image": LovingHutLogo
        },
        {
            "name": "Bank Central Asia",
            "image": BcaLogo
        },
        {
            "name": "Hotel Harper Malioboro",
            "image": HarperLogo
        },
        {
            "name": "Pemerintah Kota Yogyakarta",
            "image": PemkotLogo
        },
    ]

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container gap-x-8">
                {partners.map(e => (
                    <Image
                        key={e.name}
                        className="embla__slide aspect-video"
                        src={e.image}
                        alt={`${e.name} Logo`}

                    />
                ))}
            </div>

        </div>
    );
}

