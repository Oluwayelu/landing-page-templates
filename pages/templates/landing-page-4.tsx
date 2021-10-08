import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar/landing-page-4";

export default function landingPage() {
  return (
    <div
      className="px-5 sm:pl-32  bg-left"
      style={{
        backgroundImage: "url('/images/landing-page-4/woman.svg')",
      }}
    >
      <div className="h-screen container flex flex-col justify-between">
        <Navbar />
        <main className="flex flex-col-reverse sm:flex-row jusitfy-between items-center">
          <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="text-4xl sm:text-6xl text-gray-700 font-medium leading-none tracking-wide mb-2">
              Meditation
            </h1>
            <h3 className="text-lg sm:text-xl text-gray-700 font-medium">
              Plates | Relaxing | Massage | Acupunter
            </h3>
            <p className="my-10 text-gray-700 text-lg">
              unlimited access to the thousands of online videos and 24*7
              support lorem ipusm doller sit with lazy dog jumps over the fox.
              unlimited access to the thousands of online videos and 24*7
              support lorem ipusm doller sit with lazy dog jumps over the fox.
            </p>
            <a
              href="#"
              className="bg-gray-700 hover:bg-gray-600 py-3 px-6 text-lg font-bold text-white rounded-full"
            >
              Read More
            </a>
          </div>
        </main>
        <div />
      </div>
    </div>
  );
}
