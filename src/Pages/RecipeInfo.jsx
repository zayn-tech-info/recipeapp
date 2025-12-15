import React from "react";
import RecipeIngredients from "../Components/RecipeIngredients";
import RecipeInstruction from "../Components/RecipeInstruction";
import { FoodProvider } from "../context/foodContext";

const RecipeInfo = () => {
  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FoodProvider>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <RecipeIngredients />
            </div>

            <div>
              <RecipeInstruction />
            </div>
          </div>
        </FoodProvider>
      </div>
    </div>
  );
};

export default RecipeInfo;
