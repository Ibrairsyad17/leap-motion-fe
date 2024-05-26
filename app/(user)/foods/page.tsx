"use client";
import React from "react";
import CardItem from "@/app/(user)/components/CardItem";
import { Menu } from "@/interfaces";
import axios from "axios";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

const FoodsPage = () => {
  const [listMenu, setListMenu] = React.useState<Menu[]>([]);
  React.useEffect(() => {
    const fetchMenu = async () => {
      const response = await axios.get("http://localhost:5000/menus");
      setListMenu(response.data);
    };

    fetchMenu();
  }, []);

  const noExtraMenu = listMenu.map((menu) => (menu = { ...menu, extras: [] }));
  const filteredMenu = noExtraMenu.filter(
    (menu) => menu.category === "makanan"
  );

  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 flex flex-col space-y-7">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Menu Makanan</h1>
        <p className="text-muted-foreground">
          Menu makanan untuk kamu nikmati di Vocafe
        </p>
      </div>
      <div className="lg:w-[99%] pb-5 overflow-x-scroll space-x-3 flex  h-full">
        {filteredMenu.map((menu) => (
          <CardItem menu={menu} />
        ))}
      </div>
      <div className="flex items-center space-x-5 justify-between">
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
          Geser untuk melihat menu lainnya{" "}
          <ArrowRightIcon size={32} className="mx-5" />
        </span>
      </div>
    </div>
  );
};

export default FoodsPage;
