


// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { HiMenu, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Left side: Logo + Bank Name */}
//         <div className="flex items-center gap-4">
//           <Image src="/logo.jpg" alt="Bank Logo" width={70} height={70} />
//           <span className="font-bold text-2xl text-blue-700">MyBank</span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8">
//           <p className="text-gray-700 font-medium">Sushma</p>
//           <p className="text-gray-700 font-medium">Sushma@gmail.com</p>
//           <a
//             href="#features"
//             className="text-blue-600 font-semibold hover:underline"
//           >
//             Features
//           </a>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-gray-700 focus:outline-none"
//           >
//             {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4">
//           <p className="text-gray-700 font-medium">Sushma</p>
//           <p className="text-gray-700 font-medium">Sushma@gmail.com</p>
//           <a
//             href="#features"
//             className="text-blue-600 font-semibold hover:underline"
//             onClick={() => setMenuOpen(false)}
//           >
//             Features
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { HiMenu, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showContact, setShowContact] = useState(false);
//   const toggleContact = () => setShowContact(!showContact);
  
//   return (
//     <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-xl sticky top-0 z-50 backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Left: Logo + Bank Name */}
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <Image 
//               src="/logo1.png" 
//               alt="Bank Logo" 
//               width={70} 
//               height={70}
//               className="rounded-full border-2 border-purple-400 shadow-lg"
//             />
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20"></div>
//           </div>
//           <span className="font-bold text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
//             MyBank
//           </span>
//         </div>
        
//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8 text-gray-200">
//           <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
//             <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
//             <p className="font-medium text-gray-100">Sushma</p>
//             <p className="text-gray-700 font-medium">Sushma@gmail.com</p>
//           </div>
//           <a
//             href="#features"
//             className="relative group px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:text-purple-300 hover:bg-white/10"
//           >
//             Features
//             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
//           </a>
//           <button
//             onClick={toggleContact}
//             className="relative group px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:text-purple-300 hover:bg-white/10"
//           >
//             Contact
//             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
//           </button>
//           {showContact && (
//             <div className="animate-fadeIn bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg border border-purple-400/30">
//               <span className="font-medium">+91 98765 43210</span>
//             </div>
//           )}
//         </div>
        
//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="focus:outline-none text-gray-200 hover:text-purple-300 transition-colors p-2 rounded-lg hover:bg-white/10"
//           >
//             {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
//           </button>
//         </div>
//       </div>
      
//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-gradient-to-b from-slate-800/95 to-purple-800/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-4 border-t border-white/10">
//           <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
//             <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
//             <p className="font-medium text-gray-100">Sushma</p>
//             <p className="text-gray-700 font-medium">Sushma@gmail.com</p>
//           </div>
//           <a
//             href="#features"
//             className="text-gray-200 hover:text-purple-300 transition-colors font-semibold py-2 px-4 rounded-lg hover:bg-white/10"
//             onClick={() => setMenuOpen(false)}
//           >
//             Features
//           </a>
//           <button
//             onClick={toggleContact}
//             className="text-gray-200 hover:text-purple-300 transition-colors font-semibold text-left py-2 px-4 rounded-lg hover:bg-white/10"
//           >
//             Contact
//           </button>
//           {showContact && (
//             <div className="animate-fadeIn bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg shadow-lg ml-4 border border-purple-400/30">
//               <span className="font-medium">+91 98765 43210</span>
//             </div>
//           )}
//         </div>
//       )}
      
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;




"use client";
import { useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const toggleContact = () => setShowContact(!showContact);
  
  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Logo + Bank Name */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image 
              src="/logo1.png" 
              alt="Bank Logo" 
              width={70} 
              height={70}
              className="rounded-full border-2 border-purple-400 shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20"></div>
          </div>
          <span className="font-bold text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            MyBank
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-200">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <p className="font-medium text-gray-100">Sushma</p>
            <p className="text-gray-300 font-medium">dsuvarchala12345@gmail.com</p>
          </div>
          <a
            href="#features"
            className="relative group px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:text-purple-300 hover:bg-white/10"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <button
            onClick={toggleContact}
            className="relative group px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:text-purple-300 hover:bg-white/10"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
          </button>
          {showContact && (
            <div className="animate-fadeIn bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg border border-purple-400/30">
              <span className="font-medium">+91 8985873381</span>
            </div>
          )}
        </div>
        
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none text-gray-200 hover:text-purple-300 transition-colors p-2 rounded-lg hover:bg-white/10"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-slate-800/95 to-purple-800/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-4 border-t border-white/10">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <p className="font-medium text-gray-100">Sushma</p>
            <p className="text-gray-300 font-medium">Sushma@gmail.com</p>
          </div>
          <a
            href="#features"
            className="text-gray-200 hover:text-purple-300 transition-colors font-semibold py-2 px-4 rounded-lg hover:bg-white/10"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </a>
          <button
            onClick={toggleContact}
            className="text-gray-200 hover:text-purple-300 transition-colors font-semibold text-left py-2 px-4 rounded-lg hover:bg-white/10"
          >
            Contact
          </button>
          {showContact && (
            <div className="animate-fadeIn bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg shadow-lg ml-4 border border-purple-400/30">
              <span className="font-medium">+91 98765 43210</span>
            </div>
          )}
        </div>
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;