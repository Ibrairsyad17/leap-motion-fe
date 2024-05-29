"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CartItem, Extra } from "@/interfaces";
import { useAppDispatch } from "@/redux/store";
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import { CounterItem } from "../../components/CounterItem";
import Link from "next/link";

interface CartItemProps {
  cartItem: CartItem;
}

const CartItemList = ({ cartItem }: CartItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex space-x-3 items-center justify-between border pr-7 rounded-lg">
      <Image
        src={cartItem.menu.image}
        alt={cartItem.menu.title}
        width={500}
        height={500}
        className="w-[150px] h-[150px]"
      />
      <div className="flex flex-col w-3/12 items-baseline">
        <h1 className="text-lg font-medium">{cartItem.menu.title}</h1>
        <p className="text-muted-foreground text-xs">
          Extra: {cartItem.menu.extras.length === 0 && "Tidak ada"}
          {cartItem.menu.extras.map((extra: Extra) => extra.name).join(", ")}
        </p>
      </div>
      <CounterItem
        onAdd={() => {
          dispatch(addToCart(cartItem.menu));
        }}
        onRemove={() => {
          dispatch(removeFromCart(cartItem.menu));
        }}
        quantity={cartItem.quantity}
        type="cart"
      />
      <span className="text-lg font-medium w-3/12 text-center">
        Rp. {cartItem.quantity * cartItem.menu.price}, -
      </span>
      <div className="flex space-x-3 items-center">
        <Button
          size="lg"
          className="hover:bg-yellow-500 shadow-none bg-white border border-yellow-500 text-yellow-500 hover:text-white"
          asChild
        >
          <Link href={`/foods/${cartItem.menu.id}`}>Ubah</Link>
        </Button>
        <Button
          size="lg"
          variant="destructive"
          onClick={() => {
            dispatch(deleteFromCart(cartItem.menu));
          }}
        >
          Hapus
        </Button>
      </div>
    </div>
  );
};

export default CartItemList;
