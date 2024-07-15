import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProvoksBanner = () => {
  return (
    <section className="w-full">
      <div className="container grid justify-center items-center lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-3">
        <div className="mr-auto place-self-center lg:col-span-2">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl ">
            Pro<span className="text-red-600">v</span>oks Community
          </h1>
          <p className="max-w-2xl mb-4 font-light text-gray-500 lg:mb-6 md:text-lg ">
            This project powered by Provoks Community Teams. Provoks is a
            community for grow and learn technology based on playground project
            or real world project. Interested? Join us now!.
          </p>
          <Button
            className="rounded-full bg-red-500 hover:bg-red-600 inline-flex mr-3.5"
            size="lg"
          >
            Join Community Now!
          </Button>
          <Button
            className="rounded-full bg-orange-200/65 hover:bg-orange-300/50 shadow-none inline-flex text-orange-700"
            size="lg"
          >
            See More Showcase
          </Button>
        </div>
        <div className="hidden place-self-end lg:mt-0 lg:col-span-1 lg:block">
          <Image
            src="/assets/img/1.svg"
            alt="mockup"
            className="h-auto w-[28rem]"
            height={500}
            width={500}
          />
        </div>
      </div>
    </section>
  );
};

export default ProvoksBanner;
