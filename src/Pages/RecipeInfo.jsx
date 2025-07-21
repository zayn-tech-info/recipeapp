import React from "react";
import RecipeIngredients from "../Components/RecipeIngredients";
import RecipeInstruction from "../Components/RecipeInstruction";
import { FoodProvider } from "../context/foodContext";
import Footer from "../Components/Footer";

const RecipeInfo = () => {
  return (
    <>
    <div className="grid grid-cols-2 gap-8 my-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <FoodProvider>
        <RecipeIngredients />
        <RecipeInstruction />
      </FoodProvider>
    </div>
    <Footer/>
    </>
  );
};

export default RecipeInfo;
