import React from "react";
import Navbar from "../../components/Navbar/landing-page-3";

export default function landingPage() {
  return (
    <div
      className="px-10 sm:px-32 bg-cover bg-left"
      style={{
        backgroundImage: "url('/images/landing-page-3/landing.svg')",
      }}
    >
      <div className="h-screen container mx-auto flex flex-col justify-between">
        <Navbar />
        <main className="flex flex-col-reverse sm:flex-row jusitfy-between items-center">
          <div className="sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="text-4xl sm:text-6xl text-white font-bold leading-none tracking-wide mb-2">
              We Design 3D
            </h1>
            <p className="my-10 text-gray-300 text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              doloremque dolore, modi soluta nulla commodi ex. Fugiat, sapiente?
              Omnis dolores aspernatur laborum quibusdam, doloribus commodi
              facere officia facilis blanditiis maxime.
            </p>
            <a
              href="#"
              className="bg-[#8A92C6] hover:bg-purple-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-xl"
            >
              Contact Us
            </a>
          </div>
        </main>
        <div />
      </div>
    </div>
  );
}
