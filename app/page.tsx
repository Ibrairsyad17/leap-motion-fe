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

import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-white">
      {/* Bagian atas putih */}
      <div className="flex-1 mt-8 flex items-center justify-center">
        <div className="w-full max-w-4xl p-4">
          <iframe 
            className="w-full h-64 sm:h-96 rounded-lg shadow-xl" 
            src="https://www.youtube.com/embed/-Kh8pMTr_hI?si" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-full overflow-hidden relative">
      <svg
  className="relative block w-full h-84 md:h-116 lg:h-148"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 320"
  preserveAspectRatio="none"
>
  <path
    fill="#203459"
    fillOpacity="1"
    d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,240C672,224,768,160,864,128C960,96,1056,96,1152,122.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  ></path>
</svg>

        <div className="absolute inset-x-0 flex justify-center top-0">
          <h1 className="text-gray-900 mt-8 font-bold text-4xl text-center z-10">Selamat Datang di Vocafe!</h1>
        </div>
        <div className="absolute inset-x-0 flex justify-center top-24 z-10">
          <Link href="/home">
            <div className="bg-yellow-400 mt-4 py-4 px-8 text-sm text-neutral-700 rounded-full hover:bg-yellow-600 cursor-pointer ">
              <span className="font-sm text-xl text-white">Mulai</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
