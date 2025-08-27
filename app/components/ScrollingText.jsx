


// "use client";

// import { useEffect, useRef, useState } from "react";

// const ScrollingText = () => {
//   const marqueeRef = useRef(null);
//   const [paused, setPaused] = useState(false);
//   const [offset, setOffset] = useState(0);

//   const speed = 0.5; // pixels per frame

//   useEffect(() => {
//     let animationFrame;

//     const animate = () => {
//       if (!paused && marqueeRef.current) {
//         setOffset((prev) => {
//           const width = marqueeRef.current.scrollWidth / 2; // half width for seamless loop
//           let newOffset = prev - speed;
//           if (newOffset <= -width) newOffset = 0; // loop seamlessly
//           return newOffset;
//         });
//       }
//       animationFrame = requestAnimationFrame(animate);
//     };

//     animate();
//     return () => cancelAnimationFrame(animationFrame);
//   }, [paused]);

//   return (
//     <div
//       className="bg-blue-500 text-white overflow-hidden relative h-14 flex items-center cursor-default"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//       onTouchStart={() => setPaused(true)}
//       onTouchEnd={() => setPaused(false)}
//     >
//       {/* Fade overlays */}
//       <div className="absolute left-0 w-16 h-full bg-gradient-to-r from-blue-500 to-transparent pointer-events-none"></div>
//       <div className="absolute right-0 w-16 h-full bg-gradient-to-l from-blue-500 to-transparent pointer-events-none"></div>

//       <div
//         ref={marqueeRef}
//         className="flex min-w-max"
//         style={{ transform: `translateX(${offset}px)` }}
//       >
//         <span className="mx-4 text-lg whitespace-nowrap cursor-default">
//           🏦 HAII I am Sushma. I am an employee of HDFC Bank for you.
//         </span>
//         <span className="mx-4 text-lg whitespace-nowrap cursor-default">
//           💼 Welcome to Our Bank! Enjoy seamless banking experience & special offers now available today
//         </span>
//         {/* Duplicate for seamless loop */}
//         <span className="mx-4 text-lg whitespace-nowrap cursor-default">
//           🏦 HAII I am Sushma. I am an employee of HDFC Bank for you.
//         </span>
//         <span className="mx-4 text-lg whitespace-nowrap cursor-default">
//           💼 Welcome to Our Bank! Enjoy seamless banking experience & special offers now available today
//         </span>
//       </div>
//     </div>
//   );
// };

// export default ScrollingText;




// "use client";
// import { useEffect, useRef, useState } from "react";

// const ScrollingText = () => {
//   const marqueeRef = useRef(null);
//   const [paused, setPaused] = useState(false);
//   const [offset, setOffset] = useState(0);

//   const speed = 0.5; // pixels per frame

//   useEffect(() => {
//     let animationFrame;

//     const animate = () => {
//       if (!paused && marqueeRef.current) {
//         setOffset((prev) => {
//           const width = marqueeRef.current.scrollWidth / 2; // half width for seamless loop
//           let newOffset = prev - speed;
//           if (newOffset <= -width) newOffset = 0; // loop seamlessly
//           return newOffset;
//         });
//       }
//       animationFrame = requestAnimationFrame(animate);
//     };

//     animate();
//     return () => cancelAnimationFrame(animationFrame);
//   }, [paused]);

//   return (
//     <div
//       className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden relative h-16 flex items-center cursor-default shadow-2xl border-y border-white/10 backdrop-blur-sm"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//       onTouchStart={() => setPaused(true)}
//       onTouchEnd={() => setPaused(false)}
//     >
//       {/* Enhanced fade overlays with shimmer effect */}
//       <div className="absolute left-0 w-20 h-full bg-gradient-to-r from-indigo-600 via-purple-600/50 to-transparent pointer-events-none z-10">
//         <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent animate-pulse"></div>
//       </div>
//       <div className="absolute right-0 w-20 h-full bg-gradient-to-l from-pink-500 via-purple-600/50 to-transparent pointer-events-none z-10">
//         <div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent animate-pulse"></div>
//       </div>

//       {/* Subtle animated background pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 w-32 animate-shimmer"></div>
//       </div>

//       {/* Glowing border effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-pink-400/20 blur-sm"></div>

//       <div
//         ref={marqueeRef}
//         className="flex min-w-max relative z-20"
//         style={{ transform: `translateX(${offset}px)` }}
//       >
//         <span className="mx-6 text-lg font-medium whitespace-nowrap cursor-default flex items-center gap-3 drop-shadow-lg">
//           <span className="text-2xl animate-bounce">🏦</span>
//           <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent font-semibold">
//             HELLO! I'm Sushma
//           </span>
//           <span className="text-gray-100">
//             - Your dedicated HDFC Bank representative here to assist you
//           </span>
//         </span>
        
//         <span className="mx-6 text-lg font-medium whitespace-nowrap cursor-default flex items-center gap-3 drop-shadow-lg">
//           <span className="text-2xl animate-pulse">💎</span>
//           <span className="bg-gradient-to-r from-cyan-200 to-blue-400 bg-clip-text text-transparent font-semibold">
//             Premium Banking Experience
//           </span>
//           <span className="text-gray-100">
//             - Exclusive offers & seamless digital services available now!
//           </span>
//         </span>

//         <span className="mx-6 text-lg font-medium whitespace-nowrap cursor-default flex items-center gap-3 drop-shadow-lg">
//           <span className="text-2xl animate-bounce">🌟</span>
//           <span className="bg-gradient-to-r from-pink-200 to-rose-400 bg-clip-text text-transparent font-semibold">
//             24/7 Support
//           </span>
//           <span className="text-gray-100">
//             - Your financial goals are our priority, let's achieve them together
//           </span>
//         </span>

//         {/* Duplicate for seamless loop */}
//         <span className="mx-6 text-lg font-medium whitespace-nowrap cursor-default flex items-center gap-3 drop-shadow-lg">
//           <span className="text-2xl animate-bounce">🏦</span>
//           <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent font-semibold">
//             HELLO! I'm Sushma
//           </span>
//           <span className="text-gray-100">
//             - Your dedicated HDFC Bank representative here to assist you
//           </span>
//         </span>
        
//         <span className="mx-6 text-lg font-medium whitespace-nowrap cursor-default flex items-center gap-3 drop-shadow-lg">
//           <span className="text-2xl animate-pulse">💎</span>
//           <span className="bg-gradient-to-r from-cyan-200 to-blue-400 bg-clip-text text-transparent font-semibold">
//             Premium Banking Experience
//           </span>
//           <span className="text-gray-100">
//             - Exclusive offers & seamless digital services available now!
//           </span>
//         </span>

//         <span className="mx-6 text-lg font-medium whitespace-nowrap cursor-default flex items-center gap-3 drop-shadow-lg">
//           <span className="text-2xl animate-bounce">🌟</span>
//           <span className="bg-gradient-to-r from-pink-200 to-rose-400 bg-clip-text text-transparent font-semibold">
//             24/7 Support
//           </span>
//           <span className="text-gray-100">
//             - Your financial goals are our priority, let's achieve them together
//           </span>
//         </span>
//       </div>

//       <style jsx>{`
//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%) skewX(-12deg);
//           }
//           100% {
//             transform: translateX(300%) skewX(-12deg);
//           }
//         }
//         .animate-shimmer {
//           animation: shimmer 3s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ScrollingText;


"use client";
import { useEffect, useRef, useState } from "react";

const ScrollingText = () => {
  const marqueeRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState(0);

  const speed = 0.5; // pixels per frame

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      if (!paused && marqueeRef.current) {
        setOffset((prev) => {
          const width = marqueeRef.current.scrollWidth / 2; // half width for seamless loop
          let newOffset = prev - speed;
          if (newOffset <= -width) newOffset = 0; // loop seamlessly
          return newOffset;
        });
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [paused]);

  return (
    <div
      className="bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-500 text-white overflow-hidden relative h-16 flex items-center cursor-default shadow-2xl border-y border-emerald-300/20 backdrop-blur-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Enhanced fade overlays with shimmer effect */}
      <div className="absolute left-0 w-20 h-full bg-gradient-to-r from-emerald-500 via-teal-600/50 to-transparent pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent animate-pulse"></div>
      </div>
      <div className="absolute right-0 w-20 h-full bg-gradient-to-l from-cyan-500 via-teal-600/50 to-transparent pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent animate-pulse"></div>
      </div>

      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 w-32 animate-shimmer"></div>
      </div>

      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 blur-sm"></div>

      <div
        ref={marqueeRef}
        className="flex min-w-max relative z-20"
        style={{ transform: `translateX(${offset}px)` }}
      >
        <span className="mx-6 text-lg font-medium whitespace-nowrap cursor-default flex items-center gap-3 drop-shadow-lg">
          <span className="text-2xl animate-bounce">🏦</span>
          <span className="bg-gradient-to-r from-amber-200 to-orange-300 bg-clip-text text-transparent font-semibold">
            HELLO! I'm Sushma
          </span>
          <span className="text-white">
            - Your dedicated HDFC Bank representative here to assist you
          </span>
        </span>
        
        <span className="mx-6 text-lg font-medium whitespace-nowrap cursor-default flex items-center gap-3 drop-shadow-lg">
          <span className="text-2xl animate-pulse">💎</span>
          <span className="bg-gradient-to-r from-yellow-200 to-amber-300 bg-clip-text text-transparent font-semibold">
            Premium Banking Experience
          </span>
          <span className="text-white">
            - Exclusive offers & seamless digital services available now!
          </span>
        </span>

        <span className="mx-6 text-lg font-medium whitespace-nowrap cursor-default flex items-center gap-3 drop-shadow-lg">
          <span className="text-2xl animate-bounce">🌟</span>
          <span className="bg-gradient-to-r from-orange-200 to-red-300 bg-clip-text text-transparent font-semibold">
            24/7 Support
          </span>
          <span className="text-white">
            - Your financial goals are our priority, let's achieve them together
          </span>
        </span>

        {/* Duplicate for seamless loop */}
        <span className="mx-6 text-lg font-medium whitespace-nowrap cursor-default flex items-center gap-3 drop-shadow-lg">
          <span className="text-2xl animate-bounce">🏦</span>
          <span className="bg-gradient-to-r from-amber-200 to-orange-300 bg-clip-text text-transparent font-semibold">
            HELLO! I'm Sushma
          </span>
          <span className="text-white">
            - Your dedicated HDFC Bank representative here to assist you
          </span>
        </span>
        
        <span className="mx-6 text-lg font-medium whitespace-nowrap cursor-default flex items-center gap-3 drop-shadow-lg">
          <span className="text-2xl animate-pulse">💎</span>
          <span className="bg-gradient-to-r from-yellow-200 to-amber-300 bg-clip-text text-transparent font-semibold">
            Premium Banking Experience
          </span>
          <span className="text-white">
            - Exclusive offers & seamless digital services available now!
          </span>
        </span>

        <span className="mx-6 text-lg font-medium whitespace-nowrap cursor-default flex items-center gap-3 drop-shadow-lg">
          <span className="text-2xl animate-bounce">🌟</span>
          <span className="bg-gradient-to-r from-orange-200 to-red-300 bg-clip-text text-transparent font-semibold">
            24/7 Support
          </span>
          <span className="text-white">
            - Your financial goals are our priority, let's achieve them together
          </span>
        </span>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(300%) skewX(-12deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingText;