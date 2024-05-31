"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "@/interfaces";
import {
  addToCart,
  menuQuantitySelector,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { CounterItem } from "./CounterItem";

interface AddToCartButtonProps {
  menu: Menu;
}

export const AddToCartButton = (props: AddToCartButtonProps) => {
  const quantity = useAppSelector((state) =>
    menuQuantitySelector(state, props.menu.id)
  );

  const dispatch = useAppDispatch();

  const noExtraMenu = { ...props.menu, extras: [] };

  if (!quantity) {
    return (
      <Button
        className="w-full items-center py-6 bg-amber-500 hover:bg-amber-600"
        size="lg"
        onClick={() => dispatch(addToCart(noExtraMenu))}
      >
        <ShoppingCart size={16} className="mr-2" />
        Tambah Ke Keranjang
      </Button>
    );
  }
  return (
    <CounterItem
      quantity={quantity}
      onAdd={() => dispatch(addToCart(noExtraMenu))}
      onRemove={() => dispatch(removeFromCart(noExtraMenu))}
      type="menu"
    />
  );
};
