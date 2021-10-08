import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="px-5 sm:px-20 flex flex-col sm:flex-row items-center justify-between py-6 text-white relative">
      <Image
        src="/images/landing-page-6/logo.svg"
        width={100}
        height={100}
        alt="bitcoin"
        className="object-contain filter"
      />
      <nav className="hidden md:flex text-lg">
        <a
          href="#Home"
          className="pr-6 py-3 hover:underline focus:underline active:underline text-xl font-medium"
        >
          Review
        </a>
        <a
          href="#products"
          className="py-3 px-6 hover:underline focus:underline active:underline text-xl font-medium"
        >
          About
        </a>
      </nav>

      <nav className="hidden md:flex text-lg">
        <button className="px-7 py-2 border border-[#C2FA2B] text-center uppercase font-medium bg-transparent text-[#C2FA2B] rounded-lg">
          Sign In
        </button>
      </nav>
    </header>
  );
}
