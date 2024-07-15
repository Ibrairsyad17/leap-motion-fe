"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightIcon, X } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="w-full py-12">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-7">
            <motion.h1
              className="text-2xl font-semibold text-amber-400 tracking-tighter sm:text-5xl md:text-4xl"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Overview.
            </motion.h1>
            <motion.div
              className="flex items-center max-w-[600px] space-x-8"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                width={1000}
                height={900}
                alt="Leap Motion Logo"
                src="/assets/img/leap-motion-logo.png"
                className="object-fill h-14 w-auto"
              />
              <X className="h-10 w-10 " />
              <Image
                width={1000}
                height={900}
                alt="Vocafe Logo"
                src="/assets/img/vocafe-logo.png"
                className="object-fill h-16 w-auto"
              />
            </motion.div>
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Self Ordering System with Leap Motion Controller at Vocafe
            </motion.h1>
            <motion.p
              className="text-gray-500 md:text-base"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              A project with research looking at user experiences when ordering
              food and drinks at Vocafe using leap motion technology. The system
              uses an intuitive interface featuring menus, gesture feedback, and
              a digital cart that allows users to view selected items, quantity,
              and total price.
            </motion.p>
            <motion.p
              className="text-gray-500 md:text-base"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              This project produces output in the form of self-ordering products
              KIOSK using leap motion on Vocafe accompanied by 2 scientific
              papers with SINTA (Science and Technology Index) journal level 2.
            </motion.p>
          </div>
          <motion.div
            className="flex flex-col gap-2 min-[400px]:flex-row"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              className="inline-flex h-10 items-center justify-center rounded-full bg-violet-600 px-8 text-sm font-medium text-gray-50 shadow hover:px-12 transform hover:mr-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 origin-left"
              href="/home"
            >
              See Website Demo <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-full border bg-white px-8 text-sm font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 hover:px-12 hover:ml-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 origin-left"
              href="https://github.com/Ibrairsyad17/leap-motion-fe/"
            >
              <GitHubLogoIcon className="mr-2 h-4 w-4" /> Github Repo
            </Link>
          </motion.div>
        </div>
        <Card className="border-none p-2">
          <CardHeader>
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-2xl font-bold"
            >
              Testing Documentation
            </motion.h1>
            <motion.p
              className="text-gray-500 md:text-sm"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              The testing documentation of the self-ordering system with Leap
              Motion Controller.
            </motion.p>
          </CardHeader>
          <CardContent>
            <motion.div
              className="grid lg:grid-cols-2 grid-cols-1 gap-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="w-full flex flex-col space-y-4">
                <Image
                  priority
                  src="/assets/img/IMG_3366.png"
                  alt="Leap Motion Controller 1"
                  width={1000}
                  height={1100}
                  className="rounded-lg col-span-1 object-cover w-full h-72"
                />
                <Image
                  priority
                  src="/assets/img/IMG_3348.png"
                  alt="Leap Motion Controller 2"
                  width={1000}
                  height={1100}
                  className="rounded-lg col-span-1 object-cover w-full lg:h-36"
                />
              </div>
              <div className="w-full flex flex-col space-y-4">
                <Image
                  priority
                  src="/assets/img/IMG_0806.png"
                  alt="Leap Motion Controller 3"
                  width={1000}
                  height={1100}
                  className="rounded-lg col-span-1 object-cover w-full lg:h-36"
                />
                <Image
                  priority
                  src="/assets/img/IMG_3361.png"
                  alt="Leap Motion Controller 2"
                  width={1000}
                  height={1100}
                  className="rounded-lg col-span-1 object-cover w-full h-72"
                />
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
