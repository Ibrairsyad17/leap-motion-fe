import React from "react";
import CartItem from "@/app/(user)/cart/components/CartItem";
import { Button } from "@/components/ui/button";

const cartData = [
  {
    id: 1,
    image: "/assets/img/katsu.png",
    title: "Katsu",
    extra: ["Cheese", "Extra Spicy"],
    total: 1,
    price: 40000,
  },
  {
    id: 2,
    image: "/assets/img/coffee.png",
    title: "Coffe",
    extra: ["Less Sugar", "Extra Ice"],
    total: 2,
    price: 20000,
  },
];

const CartPage = () => {
  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 flex flex-col justify-between h-screen">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Keranjang</h1>
        <p className="text-muted-foreground ">Pesanan kamu dalam keranjang</p>
      </div>
      <ul className="divide-y divide-gray-100 h-[30rem]">
        {cartData.map((item) => (
          <li key={item.id}>
            <CartItem item={item} />
          </li>
        ))}
      </ul>
      <div className="flex space-x-5 items-center justify-end">
        <span className="text-2xl font-medium">Total:</span>
        <span className="text-2xl font-base text-muted-foreground">
          Rp. 80000, -
        </span>
      </div>
      <div className="grid grid-cols-2 py-5 h-32 gap-5">
        <Button className="h-full text-xl" variant="outline">
          Batal
        </Button>
        <Button className="h-full text-xl">Checkout</Button>
      </div>
    </div>
  );
};

export default CartPage;
