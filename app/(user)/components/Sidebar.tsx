"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CupSoda, Home, ShoppingCart, Utensils } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { totalCartItemsSelector } from "@/redux/slices/cartSlice";

const Sidebar = () => {
  const pathname = usePathname();
  const totalItems = useAppSelector(totalCartItemsSelector);
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
                  strokeWidth="2"
                  strokeLinecap="round"
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
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] hidden fixed inset-y-0 start-0 z-[40] bg-white border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
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
          <ul className="space-y-7 w-8/12 mx-auto py-7 rounded-lg shadow px-3">
            <li>
              <Link
                className={`
                  flex flex-col space-y-3 items-center py-3.5 px-2.5 ${
                    pathname === "/home" && "bg-red-50 hover:bg-red-50"
                  } text-sm text-neutral-700  rounded-lg hover:bg-red-50
                `}
                href="/home"
              >
                <Home
                  className="font-light w-14 h-14 text-red-500"
                  strokeWidth={0.75}
                />
                <span className="font-semibold text-red-500">Home</span>
              </Link>
            </li>
            <li>
              <Link
                className={`
                  flex flex-col space-y-3 items-center py-3.5 px-2.5 text-sm ${
                    pathname === "/foods" && "bg-amber-50 hover:bg-amber-50"
                  } text-neutral-700 rounded-lg hover:bg-amber-50
                `}
                href="/foods"
              >
                <Utensils
                  className="font-light w-14 h-14 text-amber-500"
                  strokeWidth={0.75}
                />
                <span className="font-semibold text-amber-500">Foods</span>
              </Link>
            </li>
            <li>
              <Link
                className={`
                  flex flex-col text-center space-y-3 items-center ${
                    pathname === "/drinks" && "bg-blue-50 hover:bg-blue-50"
                  } py-3.5 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-blue-50
                `}
                href="/drinks"
              >
                <CupSoda
                  className="font-light w-14 h-14 text-blue-500"
                  strokeWidth={0.75}
                />
                <span className="font-semibold text-blue-500">Beverages</span>
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className={`relative flex flex-col ${
                  pathname === "/cart" && "bg-green-50 hover:bg-green-50"
                } py-3.5 px-2.5 justify-center items-center text-sm font-semibold rounded-lg bg-white text-gray-800 disabled:opacity-50 disabled:pointer-events-none hover:bg-green-50`}
              >
                <ShoppingCart
                  className="font-light w-14 h-14 text-green-500"
                  strokeWidth={0.75}
                />
                <span className="font-semibold text-green-500">Cart</span>
                {!!totalItems && (
                  <span
                    key={totalItems}
                    className="absolute top-0 end-0 inline-flex items-center py-1 px-2.5 rounded-full text-xs font-medium transform -translate-y-1/4 translate-x-1/4 bg-red-500 text-white animate-ping-effect"
                  >
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
