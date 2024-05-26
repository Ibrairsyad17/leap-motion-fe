"use client";
import { Button } from "@/components/ui/button";
import { totalCartItemsSelector } from "@/redux/slices/cartSlice";
import { useAppSelector } from "@/redux/store";
import { ShoppingCart } from "lucide-react";
import React from "react";

const CartNotificationBadge = () => {
  const totalItems = useAppSelector(totalCartItemsSelector);
  return (
    <Button className="inline-flex items-center font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 py-6 px-5">
      <ShoppingCart size={18} className="mr-4" />
      Keranjang Kamu
      {!!totalItems && (
        <span
          key={totalItems}
          className="inline-flex items-center py-1 px-2.5 rounded-full text-xs font-medium bg-red-500 text-white ml-2 animate-ping-effect"
        >
          {totalItems}
        </span>
      )}
    </Button>
  );
};

export default CartNotificationBadge;
