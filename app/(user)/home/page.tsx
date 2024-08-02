"use client";
import React from "react";
import CardItem from "@/app/(user)/components/CardItem";
import { Menu } from "@/interfaces";
import CartNotificationBadge from "../components/CartNotificationBadge";
import axios from "axios";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomePage = () => {
  const [listMenu, setListMenu] = React.useState<Menu[]>([]);
  React.useEffect(() => {
    const fetchMenu = async () => {
      const response = await axios.get(
        `https://leap-motion-json-server.vercel.app/menus`
      );
      setListMenu(response.data);
    };

    fetchMenu();
  }, []);

  const noExtraMenu = listMenu.map((menu) => (menu = { ...menu, extras: [] }));

  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 flex flex-col space-y-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Recommended Menu</h1>
          <p className="text-muted-foreground">
            Recommended menu for you to enjoy at Vocafe
          </p>
        </div>
        <CartNotificationBadge />
      </div>
      <div className="lg:w-[99%] pb-5 overflow-x-scroll space-x-3 flex  h-full">
        <Carousel className="w-[75%] z-50 absolute pb-3">
          <CarouselContent className="-ml-1">
            {noExtraMenu.map((menu) => (
              <CarouselItem
                key={menu.id}
                className="pl-1 md:basis-1/2 lg:basis-[30%]"
              >
                <div className="p-1">
                  <CardItem menu={menu} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="w-12 h-12" />
          <CarouselNext className="w-12 h-12" />
        </Carousel>
      </div>
      <div className="flex items-center space-x-5 z-50 absolute bottom-0 pb-3 w-[80%] justify-between">
        <div className="flex space-x-5 items-center">
          <Image
            src="/assets/img/swipe.gif"
            width={500}
            alt="swipe"
            height={500}
            className="w-32 h-auto -mt-10"
          />
          <span className="text-xl font-medium">Swipe</span>
        </div>
        <span className="text-xl font-medium inline-flex space-x-5">
          Swipe to see other menus
          <ArrowRightIcon size={32} className="mx-5" />
        </span>
      </div>
    </div>
  );
};

export default HomePage;
