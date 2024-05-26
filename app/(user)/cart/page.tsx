"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "@/interfaces";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import CartItemList from "@/app/(user)/cart/components/CartItem";
import { resetCart, totalCartPriceSelector } from "@/redux/slices/cartSlice";
import axios from "axios";
import { Check } from "lucide-react";
import { CheckoutDialog } from "./components/CheckoutDialog";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalCartPrice = useAppSelector(totalCartPriceSelector);
  const dispatch = useAppDispatch();

  const handleCheckout = async () => {
    const dataToPost = {
      date: new Date().toISOString(),
      cartItems: cartItems,
    };
    // Implement this function
    try {
      const response = await axios.post(
        "http://localhost:5000/checkout",
        dataToPost
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 flex flex-col justify-between h-screen">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Keranjang</h1>
        <p className="text-muted-foreground ">Pesanan kamu dalam keranjang</p>
      </div>
      <ul className="space-y-4 h-[30rem] mt-4 overflow-y-scroll">
        {cartItems.map((item) => (
          <li key={item.menu.id}>
            <CartItemList cartItem={item} />
          </li>
        ))}
      </ul>
      <div className="flex space-x-5 items-center justify-end pb-3">
        <span className="text-2xl font-medium">Total:</span>
        <span className="text-3xl font-base text-muted-foreground">
          Rp. {totalCartPrice}, -
        </span>
      </div>
      <div className="grid grid-cols-2 py-5 h-28 gap-5">
        <Button
          onClick={() => {
            dispatch(resetCart());
          }}
          className="h-full text-xl"
          variant="outline"
        >
          Batal
        </Button>
        <CheckoutDialog />
      </div>
    </div>
  );
};

export default CartPage;
