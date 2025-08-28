// "use client";
// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// const Hero = () => {
//   const emojis = ["💰", "🏦", "📈", "💳"];
//   const [emoji, setEmoji] = useState(emojis[0]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-gradient-to-r from-blue-100 to-blue-200">
//       <div className="flex-1 text-left">
//         <h1 className="text-5xl font-bold mb-4">Welcome to MyBank {emoji}</h1>
//         <p className="text-lg text-gray-700">
//           Experience banking like never before. Pay, Save, Invest, Borrow, Insure, and get amazing offers!
//         </p>
//       </div>
//       <div className="flex-1">
//         <Image src="/girlimg1.jpg" alt="Bank Hero" width={500} height={400} className="rounded-lg shadow-lg" />
//       </div>
//     </section>
//   );
// };

// export default Hero;



"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const emojis = ["💰", "🏦", "📈", "💳"];
  const [emoji, setEmoji] = useState(emojis[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative top-[-40px] min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 sm:opacity-20">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 sm:top-40 right-4 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-8 sm:left-40 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-float"></div>
      </div>

      {/* Left: Text */}
      <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 relative z-10 max-w-none lg:max-w-2xl">
        <div className="mb-4 sm:mb-6">
          <span className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg animate-pulse">
            ✨ Premium Banking Experience
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
            WELCOME TO HDFC
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Bank
          </span>
          <span className="inline-block ml-2 sm:ml-4 text-2xl sm:text-4xl lg:text-6xl animate-bounce">
            {emoji}
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-full lg:max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
          Experience banking like never before with our 
          <span className="font-semibold text-blue-700"> revolutionary platform</span>. 
          Pay, Save, Invest, Borrow, Insure, and unlock 
          <span className="font-semibold text-purple-700"> amazing offers</span>!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
          <a href="#features">
          <button className="group relative text-xs mx-36 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 sm:text-base">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          </a>

        </div>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Secure & Trusted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span>Instant Access</span>
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="flex-1 flex justify-center relative z-10 w-full max-w-4xl mx-auto lg:mx-0">
        <div className="relative group w-full">
          {/* Glowing background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-500 transform scale-105"></div>
          
          {/* Image container */}
          <div className="relative bg-gradient-to-br from-white to-gray-50 p-1.5 sm:p-2 rounded-2xl shadow-2xl border border-white/50 backdrop-blur-sm">
            <Image
              src="/img.jpg"
              alt="Bank Hero - Modern Banking Experience"
              width={800}
              height={500}
              className="rounded-xl shadow-lg object-cover w-full h-[330px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[690px] transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-1.5 sm:inset-2 rounded-xl bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Floating badge */}
            <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg animate-bounce">
              🚀 Trusted by 1M+
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-4 sm:w-8 h-4 sm:h-8 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-3 sm:w-6 h-3 sm:h-6 bg-pink-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite 1s;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;





