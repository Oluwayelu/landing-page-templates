import React from "react";

export default function Navbar() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between py-6 text-gray-300 relative">
      <h3 className="text-2xl font-bold uppercase text-white">Logo</h3>
      <nav className="hidden md:flex text-lg">
        <a
          href="#Home"
          className="py-3 px-6 active:underline text-white hover:text-white focus:text-white active:text-white text-xl font-medium"
        >
          Home
        </a>
        <a
          href="#products"
          className="py-3 px-6 hover:text-white focus:text-white active:text-white text-xl font-medium"
        >
          Categories
        </a>
        <a
          href="#products"
          className="py-3 px-6 hover:text-white focus:text-white active:text-white text-xl font-medium"
        >
          Store
        </a>
      </nav>
      <nav className="hidden md:flex text-lg">
        <a
          href="#products"
          className="py-3 px-6 hover:text-white focus:text-white active:text-white text-xl font-medium"
        >
          Support
        </a>
        <a
          href="#products"
          className="py-3 pl-6 hover:text-white focus:text-white active:text-white text-xl font-medium"
        >
          About
        </a>
      </nav>
    </header>
  );
}
