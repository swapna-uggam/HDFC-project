"use client";
import { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa";

const CallButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) setShow(true);
      else setShow(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="tel:+918985873381"
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 group z-50"
    >
      <FaPhone className="text-xl" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Call Us
      </span>
    </a>
  );
};

export default CallButton;
