import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
      <div className="relative w-full max-w-2xl p-2 z-10">
        <iframe
          className="w-full h-64 sm:h-96 rounded-lg shadow-xl mt-[-30px]"
          src="https://www.youtube.com/embed/tCLmmTk4S90?si"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="mt-6 flex justify-center">
          <h1 className="text-white mt-4 font-bold text-4xl text-center">
            Selamat Datang di Vocafe!
          </h1>
        </div>
        <div className="flex flex-col space-y-3 items-center">
          <Link href="/home">
            <div className="mt-8 bg-gradient-to-r from-amber-500 to-amber-300 py-4 px-8 text-sm text-neutral-700 rounded-full cursor-pointer transition-all duration-300 hover:from-amber-600 hover:to-amber-400">
              <span className="font-sm text-xl text-white">Mulai</span>
            </div>
          </Link>
        </div>
      </div>
      <svg
        className="absolute bottom-0 w-full h-[300px] md:h-[400px] lg:h-[500px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 770"
        preserveAspectRatio="none"
      >
        <path
          d="M-1 12.2743L52.3611 28.2743C105.722 44.2743 212.444 76.2743 319.167 97.5743C425.889 119.274 532.611 129.274 639.333 102.974C746.056 76.2743 852.778 12.2743 959.5 1.57428C1066.22 -8.72572 1172.94 33.2743 1279.67 76.2743C1386.39 119.274 1493.11 161.274 1599.83 150.974C1706.56 140.274 1813.28 76.2743 1866.64 44.2743L1920 12.2743V236.274H1866.64C1813.28 236.274 1706.56 236.274 1599.83 236.274C1493.11 236.274 1386.39 236.274 1279.67 236.274C1172.94 236.274 1066.22 236.274 959.5 236.274C852.778 236.274 746.056 236.274 639.333 236.274C532.611 236.274 425.889 236.274 319.167 236.274C212.444 236.274 105.722 236.274 52.3611 236.274H-1V12.2743Z"
          fill="#203459"
        />
        <rect
          x="-1"
          y="230"
          width="1921"
          height="540"
          fill="url(#paint0_linear_952_1005)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_952_1005"
            x1="959.5"
            y1="230"
            x2="959.5"
            y2="770"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#203459" />
            <stop offset="1" stop-color="#060D18" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Home;
