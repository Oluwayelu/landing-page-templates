import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar/landing-page-1";

export default function landingPage() {
  return (
    <div
      className="px-5 sm:px-32 bg-cover bg-right"
      style={{
        backgroundImage: "url('/images/landing-page-1/landing.svg')",
      }}
    >
      <div className="h-screen container mx-auto flex flex-col justify-between">
        <Navbar />
        <div className="flex justify-center">
          <h1 className="text-4xl sm:text-6xl text-white text-center font-bold leading-none tracking-wide">
            We believe in <span className="text-gray-700"> Minimalism</span>
          </h1>
        </div>
        <div className="my-5 flex justify-end">
          <div className="mr-3 sm:mr-10">
            <Image
              src="/icons/landing-page-1/instagram.svg"
              height={40}
              width={40}
              alt="twitter"
            />
          </div>
          <div>
            <Image
              src="/icons/landing-page-1/twitter.svg"
              height={40}
              width={40}
              alt="twitter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
