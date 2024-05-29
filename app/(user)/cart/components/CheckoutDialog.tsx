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

interface CheckoutDialogProps {
  totalPrice: number;
}

export const CheckoutDialog = ({ totalPrice }: CheckoutDialogProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const [dataCheckout, setDataCheckout] = React.useState({
    id: "",
    date: "",
    sequenceId: 0,
    cartItems: [],
  });
  const router = useRouter();

  const handleCheckout = async () => {
    const currentDate = new Date().toISOString();
    const storedDate = sessionStorage.getItem("date");
    let sequenceId = 1;

    if (storedDate === currentDate) {
      // If the current date is the same as the date in local storage, increment the sequence ID
      const storedSequenceId = sessionStorage.getItem("sequenceId");
      sequenceId = storedSequenceId ? Number(storedSequenceId) + 1 : 1;
    } else {
      // If the current date is not the same as the date in local storage, reset the sequence ID
      sessionStorage.setItem("date", currentDate);
      sessionStorage.setItem("sequenceId", "1");
    }

    console.log("Sequence ID:", sequenceId);

    const dataToPost = {
      date: currentDate,
      sequenceId: sequenceId,
      cartItems: cartItems,
    };
    // Implement this function
    try {
      const response = await axios.post(
        "http://localhost:5000/checkout",
        dataToPost
      );

      console.log("Checkout data:", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getLatestData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/checkout");
      const data = response.data;
      const dataToday = data.filter(
        (item: any) =>
          new Date(item.date).toDateString() === new Date().toDateString()
      );

      if (data.length === 0) {
        console.log("No checkout data available");
        return;
      }

      const latestData = data.reduce((latest: any, item: any) => {
        return new Date(latest.date) > new Date(item.date) ? latest : item;
      });

      const changeSequenceId = { ...latestData, sequenceId: dataToday.length };

      setDataCheckout(changeSequenceId);

      console.log("Latest data:", latestData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        className="h-full text-xl w-full bg-black text-white rounded-lg disabled:bg-gray-500 disabled:cursor-not-allowed"
        onClick={async () => {
          handleCheckout();
          getLatestData();
        }}
        disabled={cartItems.length === 0 ? true : false}
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
              <span className="text-3xl font-medium">
                {dataCheckout?.sequenceId}
              </span>
              <div className="flex justify-start self-start mt-4">
                <p className="text-sm font-semibold mt-2">Detail Pesanan:</p>
              </div>
              <div className="space-y-3 mt-2 flex flex-col w-full">
                {dataCheckout?.cartItems.map((item: any, index) => {
                  const { menu, quantity } = item;

                  return (
                    <>
                      <div
                        key={index}
                        className="flex flex-row items-center w-full px-2 justify-between mt-2"
                      >
                        <p>{menu.title}</p>
                        <p className="ml-2">{quantity}x</p>
                      </div>
                      <div className="flex flex-row item w-full px-2 justify-between mt-2">
                        <p className="text-sm text-muted-foreground">
                          {menu.price} x {quantity}
                        </p>
                        <p className="ml-2 text-sm text-muted-foreground">
                          {menu.price * quantity}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-between items-center w-full px-2 py-1 mt-2">
              <p className="text-lg font-semibold">Total:</p>
              <p className="text-lg font-semibold">Rp. {totalPrice},-</p>
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
