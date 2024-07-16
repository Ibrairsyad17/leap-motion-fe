import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const carouselImages = [
  {
    src: "/assets/img/image-1.jpg",
    alt: "image-1",
  },
  {
    src: "/assets/img/image-2.jpg",
    alt: "image-2",
  },
  {
    src: "/assets/img/image-3.jpg",
    alt: "image-3",
  },
  {
    src: "/assets/img/image-4.jpg",
    alt: "image-4",
  },
  {
    src: "/assets/img/image-5.jpg",
    alt: "image-5",
  },
  {
    src: "/assets/img/image-6.jpg",
    alt: "image-6",
  },
];

const MoreSection = () => {
  return (
    <section className="w-full py-8">
      <div className="container flex flex-col space-y-8">
        <div className="flex flex-col space-y-3">
          <h1 className="text-3xl text-center font-semibold text-violet-500">
            More Testing Documentation and Demo Usage.
          </h1>
          <p className="text-gray-500 text-center">
            The testing and Usage documentation of the self-ordering system with
            Leap Motion Controller.
          </p>
        </div>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {carouselImages.map((img, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2">
                <div className="p-1 overflow-y-hidden h-[20rem] lg:h-[30rem] rounded-lg">
                  <Image
                    src={img.src}
                    height={1000}
                    width={1000}
                    alt={img.alt}
                    className="rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default MoreSection;
