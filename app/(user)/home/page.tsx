import React from "react";
import { Separator } from "@/components/ui/separator";
import CardItem from "@/app/(user)/components/CardItem";

const menus = [
  {
    id: 1,
    image: "/assets/img/katsu.png",
    title: "Rice Bowl Katsu",
    price: 15000,
  },
  {
    id: 2,
    image: "/assets/img/tamago.png",
    title: "Rice Bowl Tamago",
    price: 20000,
  },
  {
    id: 3,
    image: "/assets/img/coffee.png",
    title: "Ice Kopi Susu",
    price: 10000,
  },
  {
    id: 4,
    image: "/assets/img/americano.png",
    title: "Ice Americano",
    price: 10000,
  },
  {
    id: 5,
    image: "/assets/img/dory.png",
    title: "Rice Bowl Dory",
    price: 20000,
  },
];

const HomePage = () => {
  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 flex flex-col space-y-7">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Menu Rekomendasi</h1>
        <p className="text-muted-foreground">
          Menu rekomendasi untuk kamu nikmati di Vocafe
        </p>
      </div>
      <div className="grid lg:grid-cols-4 lg:gap-5">
        {menus.map((menu) => (
          <CardItem
            key={menu.id}
            id={menu.id}
            image={menu.image}
            price={menu.price}
            title={menu.title}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
