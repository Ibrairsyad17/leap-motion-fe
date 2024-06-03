// import React from 'react';
// import Link from 'next/link';

// const Home = () => {
 
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#203459] to-black">
//       <div className="relative w-full max-w-4xl p-4">

//         <iframe
//           className="w-full h-64 sm:h-96 rounded-lg shadow-xl"
//           src="https://www.youtube.com/embed/-Kh8pMTr_hI?si"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>

//         <div className="mt-4 flex justify-center">
//           <h1 className="text-white mt-4 font-bold text-4xl text-center">Selamat Datang di Vocafe!</h1>
//         </div>
//         <div className="flex flex-col space-y-3 items-center">
//           <Link href="/home">
//             <div className="mt-8 bg-yellow-400 py-4 px-8 text-sm text-neutral-700 rounded-full hover:bg-yellow-600 cursor-pointer ">
//               {/* <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="font-light w-14 h-14 text-yellow-500"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="5" y1="12" x2="19" y2="12" />
//                 <polyline points="12 5 19 12 12 19" />
//               </svg> */}
//               <span className="font-sm text-xl text-white">Mulai</span>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import Link from 'next/link';

// const Home = () => {
//   return (
//     <div className="relative min-h-screen flex flex-col justify-between bg-white">
//       {/* Bagian atas putih */}
//       <div className="flex-1 mt-8 flex items-center justify-center">
//         <div className="w-full max-w-3xl p-4">
//           <iframe 
//             className="w-full h-64 sm:h-96 rounded-lg shadow-xl" 
//             src="https://www.youtube.com/embed/-Kh8pMTr_hI?si" 
//             title="YouTube video player" 
//             frameBorder="0" 
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//       <div className="w-full overflow-hidden relative">
//       <svg
//   className="relative block w-full h-84 md:h-116 lg:h-148"
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 1440 320"
//   preserveAspectRatio="none"
// >
//   <path
//     fill="#203459"
//     fillOpacity="1"
//     d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,240C672,224,768,160,864,128C960,96,1056,96,1152,122.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//   ></path>
// </svg>

//         <div className="absolute inset-x-0 flex justify-center top-0">
//           <h1 className="text-gray-900 mt-8 font-bold text-4xl text-center z-10">Selamat Datang di Vocafe!</h1>
//         </div>
//         <div className="absolute inset-x-0 flex justify-center top-24 z-10">
//           <Link href="/home">
//             <div className="bg-yellow-400 mt-4 py-4 px-8 text-sm text-neutral-700 rounded-full hover:bg-yellow-600 cursor-pointer ">
//               <span className="font-sm text-xl text-white">Mulai</span>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
      <div className="relative w-full max-w-2xl p-2 z-10">

        <iframe
          className="w-full h-64 sm:h-96 rounded-lg shadow-xl mt-[-30px]" // Adjust the margin-top to move it upwards
          src="https://www.youtube.com/embed/-Kh8pMTr_hI?si"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="mt-6 flex justify-center">
          <h1 className="text-white mt-4 font-bold text-4xl text-center">Selamat Datang di Vocafe!</h1>
        </div>
        <div className="flex flex-col space-y-3 items-center">
          <Link href="/home">
            <div className="mt-8 bg-yellow-400 py-4 px-8 text-sm text-neutral-700 rounded-full hover:bg-yellow-600 cursor-pointer">
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
        <rect x="-1" y="230" width="1921" height="540" fill="url(#paint0_linear_952_1005)" />
        <defs>
          <linearGradient id="paint0_linear_952_1005" x1="959.5" y1="230" x2="959.5" y2="770" gradientUnits="userSpaceOnUse">
            <stop stop-color="#203459" />
            <stop offset="1" stop-color="#060D18" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Home;

