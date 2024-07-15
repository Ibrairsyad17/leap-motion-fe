import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DeviceInfoSection = () => {
  return (
    <section className="w-full py-8">
      <div className="container flex flex-col space-y-8">
        <h1 className="text-3xl font-semibold text-green-500">
          The Leap Motion Controller Device.
        </h1>
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          <Card className="border-none shadow-none px-0">
            <CardContent>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="w-full flex flex-col space-y-4">
                  <Image
                    priority
                    src="/assets/img/ultraleap-hand.jpg"
                    alt="Leap Motion Controller 1"
                    width={1000}
                    height={1100}
                    className="rounded-lg col-span-1 object-cover w-full h-full"
                  />
                </div>
                <div className="w-full flex flex-col space-y-4">
                  <Image
                    priority
                    src="/assets/img/leap-device.jpg"
                    alt="Leap Motion Controller 3"
                    width={1000}
                    height={1100}
                    className="rounded-lg col-span-1 object-cover w-full lg:h-36"
                  />
                  <Image
                    priority
                    src="/assets/img/leap-demo.jpg"
                    alt="Leap Motion Controller 2"
                    width={1000}
                    height={1100}
                    className="rounded-lg col-span-1 object-cover w-full h-72"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl text-amber-400 font-semibold">
              Device Information
            </h1>
            <p className="text-gray-600">
              The Leap Motion Controller is an optical hand tracking module that
              captures the movements of your hands with unparalleled accuracy.
              From XR to touchless kiosks, the Leap Motion Controller makes
              interaction with digital content natural and effortless.
            </p>
            <div className="text-gray-500 font-normal">
              <span className="text-gray-900 font-semibold mr-2">- Usage:</span>
              <span>Evaluation and deployment</span>
            </div>
            <div className="text-gray-500 font-normal">
              <span className="text-gray-900 font-semibold mr-2">
                - Product Dimensions:
              </span>
              <span>80mm L x 30mm W x 11.3mm H</span>
            </div>
            <div className="text-gray-500 font-normal">
              <span className="text-gray-900 font-semibold mr-2">
                - Certified For Public Use:
              </span>
              <span>Yes</span>
            </div>
            <div className="text-gray-500 font-normal">
              <span className="text-gray-900 font-semibold mr-2">
                - Tracking Range:
              </span>
              <span>
                Depth between 10cm to 60cm preferred, up to 80cm maximum
              </span>
            </div>
            <div className="text-gray-500 font-normal pb-3">
              <span className="text-gray-900 font-semibold mr-2">
                - Field of View:
              </span>
              <span>140×120° typical field of view</span>
            </div>
            <Button
              className="rounded-full transition duration-300"
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="https://www.ultraleap.com/leap-motion-controller-overview/">
                More Information <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceInfoSection;
