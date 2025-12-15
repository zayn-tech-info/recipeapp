import React from "react";
import HeroSection from "../Components/HeroSection";
import Search from "../Components/Search";
import Food from "../Components/Food";
import About from "../Components/About";
import Community from "../Components/Community";
import Download from "../Components/Download";

const Home = ({ foodData, setFoodData }) => {
  return (
    <div className="bg-white">
      <HeroSection />
      <Search setFoodData={setFoodData} />
      <Food foodData={foodData} />
      <About />
      <Community />
      <Download />
    </div>
  );
};

export default Home;
