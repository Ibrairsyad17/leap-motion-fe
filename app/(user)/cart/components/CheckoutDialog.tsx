"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { BadgeCheck } from "lucide-react";
import { resetCart } from "@/redux/slices/cartSlice";

export const CheckoutDialog = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const [dataCheckout, setDataCheckout] = React.useState({
    id: "",
    date: "",
    cartItems: [],
  });
  const router = useRouter();

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

  const getLatestData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/checkout");
      const data = response.data;

      if (data.length === 0) {
        console.log("No checkout data available");
        return;
      }

      const latestData = data.reduce((latest: any, item: any) => {
        return new Date(latest.date) > new Date(item.date) ? latest : item;
      });

      setDataCheckout(latestData);

      // console.log("Latest data:", latestData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        className="h-full text-xl w-full bg-black text-white rounded-lg"
        onClick={async () => {
          handleCheckout();
          getLatestData();
        }}
      >
        Checkout
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Berhasil Memesan
          </DialogTitle>
          <DialogDescription>
            <div className="flex flex-col items-center justify-center">
              <p>Terima kasih telah memesan di Vocafe</p>
              <BadgeCheck
                strokeWidth={1.25}
                size={100}
                className="mt-4 text-green-500"
              />
              <p className="text-muted-foreground mt-4">
                Pesanan kamu sedang diproses
              </p>
              <p className="my-2 text-lg">Kode Pemesanan:</p>
              <span className="text-3xl font-medium">{dataCheckout?.id}</span>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose
            className="w-full py-4 px-4 bg-black text-lg text-white rounded-lg"
            onClick={() => {
              dispatch(resetCart());
              router.push(`/home`);
            }}
          >
            Tutup
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
