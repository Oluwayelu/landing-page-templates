import React from "react";

export default function Navbar() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between py-6 relative">
      <h3 className="text-2xl font-bold uppercase text-gray-700">Logo</h3>
      <nav className="hidden md:flex text-lg">
        <a
          href="#Home"
          className="py-3 px-6 hover:underline focus:underline active:underline hover:text-gray-700 focus:text-gray-700 active:text-gray-700 text-xl font-medium"
        >
          Home
        </a>
        <a
          href="#products"
          className="py-3 px-6 hover:underline focus:underline active:underline hover:text-gray-700 focus:text-gray-700 active:text-gray-700 text-xl font-medium"
        >
          Products
        </a>
        <a
          href="#products"
          className="py-3 px-6 hover:underline focus:underline active:underline hover:text-gray-700 focus:text-gray-700 active:text-gray-700 text-xl font-medium"
        >
          Store
        </a>
        <a
          href="#products"
          className="py-3 px-6 hover:underline focus:underline active:underline hover:text-gray-700 focus:text-gray-700 active:text-gray-700 text-xl font-medium"
        >
          Support
        </a>
      </nav>
      <nav className="hidden md:flex text-lg">
        <a
          href="#products"
          className="py-3 px-6 hover:underline focus:underline active:underline hover:text-gray-700 focus:text-gray-700 active:text-gray-700 text-xl font-medium"
        >
          About
        </a>
        <button className="px-7 py-2 bg-gray-700 text-center text-white rounded-full">
          Contact Us
        </button>
      </nav>
    </header>
  );
}
