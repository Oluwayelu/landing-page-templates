import React from "react";

export default function Navbar() {
  return (
    <header className="sm:pr-32 flex flex-col sm:flex-row items-center justify-between py-6 text-gray-700 relative">
      <h3 className="text-2xl font-bold uppercase text-[#F2994A]">Logo</h3>

      <nav className="hidden md:flex text-lg">
        <button className="px-7 py-2 border border-[#F2994A] text-center uppercase font-medium bg-transparent text-[#F2994A] rounded-lg">
          Sign In
        </button>
      </nav>
    </header>
  );
}
