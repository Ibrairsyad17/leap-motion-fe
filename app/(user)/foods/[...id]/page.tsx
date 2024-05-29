"use client";
import React from "react";
import CartNotificationBadge from "../../components/CartNotificationBadge";
import { Extra, Menu } from "@/interfaces";
import axios from "axios";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  addToCart,
  deleteFromCart,
  menuQuantitySelector,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DetailsFood = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [food, setFood] = React.useState<Menu>();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const [selectedExtras, setSelectedExtras] = React.useState<Extra[]>([]);
  const [disabled, setDisabled] = React.useState(false);
  const dispatch = useAppDispatch();

  
  React.useEffect(() => {
    const fetchFood = async () => {
      const response = await axios.get(
        `http://localhost:5000/menus/${params.id}`
      );
      setFood(response.data);
    };

    fetchFood();
  }, [params.id]);

  const noExtraMenu = { ...food, extras: [] };
  const foodMenu: Menu = noExtraMenu as Menu;

  const item: Menu = {
    id: foodMenu.id,
    image: foodMenu.image,
    title: foodMenu.title,
    desc: foodMenu.desc,
    category: foodMenu.category,
    price:
      foodMenu.price +
      selectedExtras.reduce((total, extra) => total + extra.price, 0),
    extras: selectedExtras,
  };

  const findThisItem = cartItems.find(
    (cartItem) => cartItem.menu.id === item.id
  );

  const quantity = useAppSelector((state) =>
    menuQuantitySelector(state, findThisItem?.menu.id ?? 0)
  );

  return (
    <div className="w-full h-screen overflow-y-hidden pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 flex flex-col justify-between space-y-7">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold mb-2">{foodMenu?.title}</h1>
          <p className="text-muted-foreground">
            Detail menu makanan dari {foodMenu?.title}
          </p>
        </div>
        <CartNotificationBadge />
      </div>
      <section className="py-1 bg-white md:py-8 h-[32rem] antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <Image
                className="h-auto w-96"
                alt=""
                width={2000}
                height={2000}
                src={foodMenu?.image ?? ""}
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-lg font-semibold text-gray-900 sm:text-lg">
                Deskripsi Produk
              </h1>

              <hr className="my-2 md:my-4 border-gray-200" />

              <p className="mb-6 text-gray-500 text-sm">{food?.desc}</p>
              <div className="grid grid-cols-2 items-center">
                <div className="col-span-2">
                  <h2 className="text-lg font-semibold text-gray-900 sm:text-lg mb-2">
                    Extra:
                  </h2>
                  <p className="mb-8 text-sm text-gray-500">
                    Tambahkan extra topping pilih satu atau lebih (opsional):
                  </p>
                </div>
                {food?.extras.map((extra: Extra) => (
                  <div key={extra.id} className="flex space-x-4 items-center">
                    <input
                      type="checkbox"
                      className="w-7 h-7"
                      name={extra.name}
                      id={extra.name}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedExtras((prev) => [...prev, extra]);
                        } else {
                          setSelectedExtras(
                            selectedExtras.filter(
                              (prevExtra) => prevExtra.name !== extra.name
                            )
                          );
                        }
                      }}
                    />
                    <label htmlFor={extra.name}>{extra.name}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-2 items-center">
        <div className="grid grid-cols-3 gap-2 h-10">
          <Button
            className="col-span-1 h-full"
            variant="destructive"
            onClick={() => dispatch(removeFromCart(item))}
            size="lg"
          >
            Kurang
          </Button>
          <span className="w-full font-medium text-2xl rounded-lg inline-flex justify-center items-center">
            {quantity ?? 0}
          </span>
          <Button
            className="w-full h-full"
            variant="outline"
            size="lg"
            onClick={() => dispatch(addToCart(item))}
          >
            Tambah
          </Button>
        </div>
        <div className="text-2xl place-self-end space-x-3">
          <span>Total:</span>
          <span className="text-gray-500">
            {item.price ? `Rp. ${(quantity ?? 0) * item.price}, -` : "Rp. 0, -"}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 py-5 h-28 gap-5">
        {findThisItem && (
          <Button
            onClick={() => dispatch(deleteFromCart(item))}
            className="h-full text-xl"
            variant="outline"
          >
            Batalkan
          </Button>
        )}

        {!findThisItem && (
          <Button
            onClick={() => {
              dispatch(addToCart(item));
              setDisabled(true);
              router.push("/home");
            }}
            className="h-full text-xl"
            variant="outline"
          >
            Tambahkan ke Keranjang
          </Button>
        )}

        <Button className="h-full text-xl" asChild>
          <Link href="/cart">Checkout</Link>
        </Button>
      </div>
    </div>
  );
};

export default DetailsFood;
