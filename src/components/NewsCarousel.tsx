"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProgramAttribute {
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
  authorName: string;
  authorImage: string;
}

export function CarouselTry(props: ProgramAttribute) {
  return (
    <Carousel
      className="w-full mb-8 "
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem>
          <Link href={`/news/${props.slug}`} className="w-full pointer-none">
            <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden">
              <Image
                src={props.image.source_url}
                alt="Mengenal Cara Pengelolaan Food Waste Di Korea Selatan"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

              <div className="absolute bottom-0 left-0 p-6 md:p-12 z-20 flex justify-between items-end">
                <div className="md:mr-40">
                  <h3 className="text-white font-semibold text-lg">
                    Berita Terbaru
                  </h3>
                  <h1 className="text-white font-medium text-3xl md:text-5xl my-3 max-w-3xl">
                    {props.title}
                  </h1>
                  <p className="text-md leading-4 font-light mt-2 text-white">
                    {props.excerpt
                      .replace(/<[^>]*>?/gm, "")
                      .replace("[&hellip;]", "")
                      .trim()
                      .split(" ")
                      .slice(0, 35)
                      .join(" ") + " ..."}
                  </p>
                </div>
                <div>
                  <ArrowRight className="mt-4 text-white size-16 cursor-pointer" />
                </div>
              </div>
            </div>
          </Link>
        </CarouselItem>
        <CarouselItem className="bg-red-500" />
        <CarouselItem className="bg-red-500" />
      </CarouselContent>

      {/* <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30" /> */}
      {/* <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30" /> */}
    </Carousel>
  );
}
