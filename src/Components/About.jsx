import React from "react";
import Bread from "../assets/Bread.png"
const About = () => {
  return (
    <div className="mx-auto my-20 max-w-7xl px-2 sm:px-6 lg:px-8 mt-15">
      <div>
        <div className="about relative my-10">
          <div className="bg-white w-60 rounded-xl shadow-xl absolute bottom-25 left-20 p-4 text-[#046E1B]">
            <p>50+ Quick Food Recipes That Easy To Do!</p>
          </div>
          <div>
            <div className="bg-white w-90 absolute top-10 right-30 shadow-2xl space-y-4 rounded-2xl py-5 px-10">
              <img src={Bread} className="absolute bottom-35 right-10" alt="Bread" />
              <p className="text-2xl font-medium">About Us</p>
              <p>
                Our recipes are the heart and soul of our culinary community,
                and they reflect our commitment to providing you with memorable
                and delightful dining experiences.
              </p>
              <button className="bg-[#F79F1A] cursor-pointer font-medium px-5 rounded-md text-white py-1">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
