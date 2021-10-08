import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar/landing-page-5";

export default function landingPage() {
  return (
    <div className="px-5 sm:pl-32 bg-[#101010]">
      <div className="h-screen container flex flex-col justify-between">
        <Navbar />
        <main className="flex flex-col-reverse sm:flex-row jusitfy-between items-center">
          <div className="sm:w-2/3 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="text-4xl sm:text-6xl text-white uppercase font-medium leading-none tracking-wide mb-2">
              Bitcoin Exchange <br /> and{" "}
              <span className="text-[#F2994A]">Wallet</span>
            </h1>
            <p className="my-10  text-gray-400 text-lg uppercase">
              bitcoin excahnge you can trust.
            </p>
            <a
              href="#"
              className="bg-[#F2C94C] hover:bg-[#F2994A]  py-3 px-6 text-lg uppercase font-medium text-[#101010] rounded-lg"
            >
              Sign Up for free
            </a>
          </div>

          <div className="hidden sm:block w-1/3 ">
            <Image
              src="/images/landing-page-5/bitcoin.svg"
              layout="fill"
              alt="bitcoin"
              objectPosition="right"
              className="object-contain filter"
            />
          </div>
        </main>
        <div />
      </div>
    </div>
  );
}
