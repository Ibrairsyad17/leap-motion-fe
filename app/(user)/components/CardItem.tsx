import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@/interfaces";
import { AddToCartButton } from "./AddToCartButton";
import { Button } from "@/components/ui/button";

interface CardItemProps {
  menu: Menu;
}

const CardItem = (props: CardItemProps) => {
  return (
    <div className="flex h-[30rem] flex-col px-6 justify-between hover:shadow-lg transition duration-300 py-8 shadow-sm items-center rounded-xl space-y-3">
      <div className="flex flex-col space-y-2 w-full items-center">
        <Link href={`/foods/${props.menu.id}`}>
          <Image
            src={props.menu.image}
            alt={props.menu.title}
            width={1000}
            height={1000}
            className="w-[230px] h-auto"
          />
        </Link>
        <h1 className="text-lg font-medium">{props.menu.title}</h1>
        <p className="text-muted-foreground">Rp. {props.menu.price}, -</p>
      </div>
      <div className="flex flex-col space-y-2 w-full">
        <Button
          className="w-full items-center py-6"
          size="lg"
          variant="outline"
          asChild
        >
          <Link href={`/foods/${props.menu.id}`}>See More</Link>
        </Button>
        <AddToCartButton menu={props.menu} />
      </div>
    </div>
  );
};

export default CardItem;
