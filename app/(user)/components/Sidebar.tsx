"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CupSoda, Home, ShoppingCart, Utensils } from "lucide-react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden">
        <div className="flex justify-between items-center py-2">
          <ol className="ms-3 flex items-center whitespace-nowrap">
            <li className="flex items-center text-sm text-gray-800">
              Application Layout
              <svg
                className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </li>
            <li
              className="text-sm font-semibold text-gray-800 truncate"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
        </div>
      </div>

      <div
        id="application-sidebar"
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] hidden fixed inset-y-0 start-0 z-[60] bg-white border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
      >
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <Image
            src="/assets/img/vocafe-logo.svg"
            alt="Vocafe Logo"
            width={500}
            height={500}
            className="w-36 h-auto mx-auto mt-3 mb-6"
          />
          <ul className="space-y-7 w-7/12 mx-auto py-4 rounded-lg">
            <li>
              <Link
                className={`
                  flex flex-col space-y-3 items-center py-3.5 px-2.5 ${pathname === "/home" && "shadow shadow-red-200"} text-sm text-neutral-700 hover:bg-gray-100 rounded-lg
                `}
                href="/home"
              >
                <Home
                  className="font-light w-14 h-14 text-red-500"
                  strokeWidth={0.75}
                />
                <span className="font-semibold text-red-500">Beranda</span>
              </Link>
            </li>
            <li>
              <Link
                className={`
                  flex flex-col space-y-3 items-center py-3.5 px-2.5 text-sm ${pathname === "/foods" && "shadow"} text-neutral-700 rounded-lg hover:bg-gray-100
                `}
                href="/foods"
              >
                <Utensils
                  className="font-light w-14 h-14 text-amber-500"
                  strokeWidth={0.75}
                />
                <span className="font-semibold text-amber-500">Makanan</span>
              </Link>
            </li>
            <li>
              <Link
                className={`
                  flex flex-col text-center space-y-3 items-center ${pathname === "/drinks" && "shadow"} py-3.5 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100
                `}
                href="/drinks"
              >
                <CupSoda
                  className="font-light w-14 h-14 text-blue-500"
                  strokeWidth={0.75}
                />
                <span className="font-semibold text-blue-500">
                  Menu Minuman
                </span>
              </Link>
            </li>
            <li>
              <Link
                className={`
                  flex flex-col text-center space-y-3 items-center py-3.5 px-2.5 ${pathname === "/cart" && "shadow"} text-sm text-neutral-700 rounded-lg hover:bg-gray-100
                `}
                href="/cart"
              >
                <ShoppingCart
                  className="font-light w-14 h-14 text-green-500"
                  strokeWidth={0.75}
                />
                <span className="font-semibold text-green-500">Keranjang</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
