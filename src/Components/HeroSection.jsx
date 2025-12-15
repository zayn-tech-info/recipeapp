import React from "react";
import HeroImage from "../assets/hero section.png";
import Right from "../assets/comment 1.png";
import Left from "../assets/comment 2.png";

const HeroSection = () => {
  return (
    <div className="relative isolate pt-14 lg:pt-20 pb-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-16 items-center">
          <div className="max-w-2xl lg:max-w-none text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-[1.1]">
              Cooking Made Fun <br className="hidden lg:block" /> and Easy:
              Unleash <br className="hidden lg:block" /> Your Inner Chef
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              Discover more than{" "}
              <span className="font-semibold text-primary">10,000 recipes</span>{" "}
              in your hand with the best recipe app. We help you find the
              easiest way to cook delicious meals.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="rounded-full bg-primary px-8 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 transform hover:scale-105">
                Explore Recipes
              </button>
              <button className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2 hover:text-primary transition-colors">
                Learn more <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end perspective-1000">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <img
                src={HeroImage}
                alt="Delicious Dish"
                className="w-full h-full object-contain drop-shadow-2xl z-10 relative animate-spin-slow"
              />

              <img
                src={Right}
                alt="Comment"
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-32 md:w-48 bg-white p-2 rounded-lg shadow-xl z-20 animate-bounce-slow hidden sm:block"
                style={{ animationDuration: "3s" }}
              />
              <img
                src={Left}
                alt="Comment"
                className="absolute -left-8 bottom-10 w-32 md:w-48 z-20 hidden sm:block drop-shadow-lg"
              />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-100/50 to-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
