import React from "react";

export default function Navbar() {
  return (

    <header className="sm:pr-32 flex flex-col sm:flex-row items-center justify-between py-6 text-gray-700 relative">
      <h3 className="text-2xl font-bold uppercase">Logo</h3>
      <nav className="hidden md:flex text-lg">
        <a
          href="#Home"
          className="pr-6 py-3 hover:underline focus:underline active:underline text-xl font-medium"
        >
          Classes
        </a>
        <a
          href="#products"
          className="py-3 px-6 hover:underline focus:underline active:underline text-xl font-medium"
        >
          Teachers
        </a>
        <a
          href="#products"
          className="py-3 px-6 hover:underline focus:underline active:underline text-xl font-medium"
        >
          Libaray
        </a>
        <a
          href="#products"
          className="py-3 px-6 hover:underline focus:underline active:underline text-xl font-medium"
        >
          Academy
        </a>
      </nav>
      <nav className="hidden md:flex text-lg">
        <button className="px-7 py-2 border border-gray-700 text-center uppercase font-medium bg-transparent text-gray-700 rounded-full">
          Sign In
        </button>
      </nav>
    </header>
  );
}
