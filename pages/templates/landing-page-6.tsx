import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/Navbar/landing-page-6";

export default function landingPage() {
  return (
    <div className=" bg-[#101010]">
      <Head>
        <title>Nike</title>
        <meta
          name="description"
          content="Landing Page Templates for differnt site designs"
        />
        <link rel="icon" href="/images/landing-page-6/logo.svg" />
      </Head>
      <div className="h-screen relative container mx-auto flex flex-col justify-between overflow-hidden">
        <Navbar />
        <main className="px-5 sm:pl-20 flex flex-col-reverse sm:flex-row jusitfy-between items-center">
          <div className="sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="text-2xl sm:text-4xl text-white uppercase font-medium leading-none tracking-wide mb-2">
              Are you ready?
            </h1>
            <div className="ml-20">
              <h1 className="text-4xl sm:text-6xl text-[#C2FA2B] uppercase font-medium leading-none tracking-wide mb-2">
                Lead the way
              </h1>
              <p className="my-10  text-gray-300 text-lg uppercase">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate impedit officiis similique eaque, accusantium nostr ad
                ad ratione odio quam nesciunt a corporis quos dolorum quia illum
                illum distinctio voluptates dolore!
              </p>
              <a
                href="#"
                className="bg-[#C2FA2B] py-3 px-6 text-lg uppercase font-medium text-[#101010] rounded-lg"
              >
                Shop now
              </a>
            </div>
          </div>

          <div className="sm:w-1/3 flex flex-col items-center sm:items-end text-center sm:text-right">
            <a
              href="#"
              className="bg-[#C2FA2B] py-3 px-6 text-lg uppercase font-medium text-[#101010] rounded-lg"
            >
              Shop now
            </a>
            <div className=" h-40 w-40 absolute ">
              <Image
                src="/images/landing-page-6/dots.svg"
                layout="fill"
                alt="bitcoin"
                className="object-contain filter"
              />
            </div>
            <div className="absolute">
              <Image
                src="/images/landing-page-6/shoe.svg"
                layout="fill"
                alt="shoe"
                className="object-contain filter"
              />
            </div>

            <div className="h-40 w-40 absolute top-0 right-0">
              <Image
                src="/images/landing-page-6/dots.svg"
                layout="fill"
                alt="bitcoin"
                className="object-contain filter"
              />
            </div>
          </div>
        </main>

        <div className="flex justify-between relative">
          <div className="h-40 w-40 absolute -left-10 -bottom-20">
            <Image
              src="/images/landing-page-6/dots.svg"
              layout="fill"
              alt="bitcoin"
              className="object-contain filter"
            />
          </div>
          <div className="h-20 w-20 sm:h-80 sm:w-80  absolute -bottom-32 right-0">
            <Image
              src="/images/landing-page-6/logo.svg"
              layout="fill"
              alt="bitcoin"
              className="object-contain filter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
