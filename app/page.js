// import Footer from "./components/ScrollingText";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import ScrollingText from "./components/Footer";

// export default function Home() {
//   return (
//     <div>
//       <ScrollingText />
//       <Navbar />
//       <Hero />
//       <Features />
//       <Footer />
//     </div>
//   );
// }


import ScrollingText from "./components/ScrollingText";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer"; // corrected
import CallButton from "./components/CallButton";

export default function Home() {
  return (
    <div>
      <ScrollingText />
      <Navbar />
      <Hero />
      <Features />
      <Footer />
      <CallButton/>
    </div>
  );
}
