"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const NavigationBar = () => {
  return (
    <div className="sticky h-16 backdrop-blur-sm container bg-white/30 top-0 flex z-50 items-center justify-center lg:justify-between">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image
          src="/assets/img/provoks-logo.png"
          height={500}
          width={500}
          alt="provoks-logo"
          className="w-8 h-8"
        />
        <span className="text-sm font-medium">
          Pro<span className="text-red-600">v</span>oks Teams
        </span>
      </Link>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Overview
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Device Information
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                More
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Link
        className="lg:inline-flex h-10 items-center justify-center rounded-full bg-violet-600 hover:bg-violet-500 px-4 text-sm font-medium text-gray-50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 origin-left hidden"
        href="/home"
      >
        See Demo <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

export default NavigationBar;
