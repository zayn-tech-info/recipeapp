import React from "react";
import AppleDl from "../assets/App Store Blue.png";
import GoogleDl from "../assets/Google Play Blue.png";
import iPhone15 from "../assets/iPhone 15 Pro.png";

const Download = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Embrace the joy of cooking.
              <br />
              Start your kitchen adventure.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Get our app on your iPhone or Android device and unlock over
              10,000 recipes. Cooking has never been easier.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="transform transition-transform hover:scale-105"
              >
                <img
                  className="h-12 w-auto"
                  src={AppleDl}
                  alt="Download on App Store"
                />
              </a>
              <a
                href="#"
                className="transform transition-transform hover:scale-105"
              >
                <img
                  className="h-12 w-auto"
                  src={GoogleDl}
                  alt="Get it on Google Play"
                />
              </a>
            </div>
          </div>

          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[24rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 lg:-left-20 lg:w-[30rem]"
              src={iPhone15}
              alt="App screenshot"
              style={{ objectFit: "contain", height: "100%" }}
            />

            <div className="absolute top-10 left-10 lg:left-0 lg:top-0 w-full h-[500px] flex justify-center items-center pointer-events-none">
              <img
                src={iPhone15}
                className="w-[300px] h-auto lg:w-[400px] drop-shadow-2xl"
                alt="App Preview"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
