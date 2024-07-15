import { MountainIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pt-28 md:py-8 md:pt-4">
      <div className="container flex  flex-col items-center justify-between gap-4 md:flex-row">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image
            src="/assets/img/provoks-logo.png"
            height={500}
            width={500}
            alt="provoks-logo"
            className="w-8 h-8 mr-2"
          />
          <span className="text-sm font-medium">
            Pro<span className="text-red-600">v</span>oks Teams
          </span>
        </Link>
        <div className="flex lg:flex-row flex-col items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2024 Provoks Teams. All rights reserved.</p>
          <Link href="#" className="hover:underline" prefetch={false}>
            About Provoks
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Our Showcase
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
