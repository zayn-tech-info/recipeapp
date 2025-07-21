import React from "react";
import HeroImage from "../assets/hero section.png";
import Right from "../assets/comment 1.png";
import left from "../assets/comment 2.png";

const HeroSection = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 pt-5">
          <div className="space-y-10">
            <p className="text-6xl font-bold leading-18">
              Cooking Made Fun <br /> and Easy: Unleash <br /> Your Inner Chef
            </p>
            <p className="opacity-60">
              Discover more than{" "}
              <span className="text-[#F79F1A]">10,000 recipes</span> in your
              hand with the <br /> best recipe. Help you to find the easiest way
              to cook.
            </p>
            <button className="bg-[#F79F1A] text-white text-2xl p-5 inline rounded-2xl cursor-pointer">
              Explore Recipes
            </button>
          </div>
          <div className="relative">
            <img src={HeroImage} />
          </div>
          <div>
            <img className="absolute right-50 shadow-2xl bg-white p-3 rounded-md bottom-30" src={Right} />
          </div>
          <div>
            <img className="absolute right-120  bottom-1" src={left} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
