"use client";
import { Button } from "@/components/ui/button";
import { totalCartItemsSelector } from "@/redux/slices/cartSlice";
import { useAppSelector } from "@/redux/store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartNotificationBadge = () => {
  const totalItems = useAppSelector(totalCartItemsSelector);
  return (
    <Link
      href="/cart"
      className="inline-flex items-center font-medium rounded-lg text-sm bg-green-100 text-green-500 shadow-sm hover:bg-green-100 disabled:opacity-50 py-2.5 px-4"
    >
      <ShoppingCart size={18} className="mr-4" />
      Keranjang Kamu
      {!!totalItems && (
        <span
          key={totalItems}
          className="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white ml-2 animate-ping-effect"
        >
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartNotificationBadge;
