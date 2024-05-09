import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardItemProps {
  id: number;
  image: string;
  title: string;
  price: number;
}

const CardItem = ({ id, image, title, price }: CardItemProps) => {
  return (
    <div className="flex flex-col justify-between hover:scale-105 hover:shadow transition duration-300 py-8 shadow-sm items-center rounded-xl">
      <Link href={`/foods/${id}`}>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-[180px] h-auto"
        />
      </Link>
      <h1 className="text-lg font-medium">{title}</h1>
      <p className="text-muted-foreground">Rp. {price}, -</p>
    </div>
  );
};

export default CardItem;
