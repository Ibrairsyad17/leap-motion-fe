// "use client";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { useAppDispatch, useAppSelector } from "@/redux/store";
// import CartItemList from "@/app/(user)/cart/components/CartItem";
// import { resetCart, totalCartPriceSelector } from "@/redux/slices/cartSlice";
// import { CheckoutDialog } from "./components/CheckoutDialog";

// const CartPage = () => {
//   const cartItems = useAppSelector((state) => state.cart.cartItems);
//   const totalCartPrice = useAppSelector(totalCartPriceSelector);
//   const dispatch = useAppDispatch();

//   return (
//     <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 flex flex-col justify-between h-screen">
//       <div>
//         <h1 className="text-3xl font-semibold mb-2">Keranjang</h1>
//         <p className="text-muted-foreground ">Pesanan kamu dalam keranjang</p>
//       </div>
//       <ul className="space-y-4 h-[30rem] mt-4 overflow-y-scroll">
//         {cartItems.map((item) => (
//           <li key={item.menu.id}>
//             <CartItemList cartItem={item} />
//           </li>
//         ))}
//       </ul>
//       <div className="flex space-x-5 items-center justify-end pb-3">
//         <span className="text-2xl font-medium">Total:</span>
//         <span className="text-3xl font-base text-muted-foreground">
//           Rp. {totalCartPrice}, -
//         </span>
//       </div>
//       <div className="grid grid-cols-2 py-5 h-28 gap-5">
//         <Button
//           onClick={() => {
//             dispatch(resetCart());
//           }}
//           className="h-full text-xl"
//           variant="outline"
//         >
//           Batal
//         </Button>
//         <CheckoutDialog totalPrice={totalCartPrice} />
//       </div>
//     </div>
//   );
// };

// export default CartPage;


"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import CartItemList from "@/app/(user)/cart/components/CartItem";
import { resetCart, totalCartPriceSelector } from "@/redux/slices/cartSlice";
import { CheckoutDialog } from "./components/CheckoutDialog";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalCartPrice = useAppSelector(totalCartPriceSelector);
  const dispatch = useAppDispatch();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isCheckoutDialogOpen, setIsCheckoutDialogOpen] = useState(false);

  const handleCheckout = () => {
    setIsConfirmModalOpen(true);
  };

  const confirmCheckout = () => {
    setIsConfirmModalOpen(false);
    setIsCheckoutDialogOpen(true);
  };

  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72 flex flex-col justify-between h-screen">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Keranjang</h1>
        <p className="text-muted-foreground">Pesanan kamu dalam keranjang</p>
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
        <Button
          onClick={handleCheckout}
          className="h-full text-xl"
          disabled={cartItems.length === 0}
        >
          Checkout
        </Button>
      </div>

      {isConfirmModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Konfirmasi</h2>
            <p className="mb-4">Apakah kamu yakin ingin melanjutkan ke checkout?</p>
            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={() => setIsConfirmModalOpen(false)}
                variant="outline"
                className="h-full text-xl"
              >
                Batal
              </Button>
              
        <CheckoutDialog totalPrice={totalCartPrice} />
      
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default CartPage;


