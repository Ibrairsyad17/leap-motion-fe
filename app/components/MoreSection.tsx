import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

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
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2">
                <div className="p-1 overflow-y-hidden h-[20rem] lg:h-[30rem] rounded-lg">
                  {/* <Card className="h-96 flex justify-center items-center"> */}
                  {/* <CardContent
                      className={`flex items-center justify-center p-6 bg-[url('/assets/img/image-${
                        index + 1
                      }.jpg')]`}
                    > */}
                  <Image
                    src={`/assets/img/image-${index + 1}.jpg`}
                    height={1000}
                    width={1000}
                    alt={`image-${index + 1}`}
                    className="rounded-lg"
                  />
                  {/* </CardContent> */}
                  {/* </Card> */}
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
