import React from "react";
import Image from "next/image";
import CounterItem from "@/app/(user)/cart/components/CounterItem";
import { Button } from "@/components/ui/button";

const CartItem = ({ item }: any) => {
  return (
    <div className="flex space-x-3 items-center justify-between">
      <Image
        src={item.image}
        alt={item.title}
        width={500}
        height={500}
        className="w-[150px] h-[150px]"
      />
      <div className="flex space-x-2 flex-col w-3/12 items-baseline">
        <h1 className="text-lg font-medium">{item.title}</h1>
        <span className="text-muted-foreground text-sm">
          Extra:{" "}
          {item.extra.map((i) => (
            <span key={i}>{i}, </span>
          ))}
        </span>
      </div>
      <CounterItem />
      <span className="text-lg font-medium w-3/12 text-center">
        Rp. {item.price}, -
      </span>
      <div className="flex space-x-3 items-center">
        <Button
          size="lg"
          className="hover:bg-yellow-500 shadow-none bg-white border border-yellow-500 text-yellow-500 hover:text-white"
        >
          Ubah
        </Button>
        <Button size="lg" variant="destructive">
          Hapus
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
