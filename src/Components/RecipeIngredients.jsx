import React, { useContext } from "react";
import { foodContext } from "../context/foodContextInstance";

function RecipeIngredients() {
  const { foodItem, isloading } = useContext(foodContext);

  if (isloading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!foodItem) return null;

  return (
    <div className="space-y-8">
 
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
        <div className="relative h-64 sm:h-80 w-full">
          <img
            src={foodItem.image}
            alt={foodItem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <h1 className="absolute bottom-6 left-6 right-6 text-3xl sm:text-4xl font-bold text-white shadow-sm">
            {foodItem.title}
          </h1>
        </div>
      </div>

   
      <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="text-primary">🥕</span> Ingredients
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {foodItem.extendedIngredients &&
            foodItem.extendedIngredients.map((ingredient) => (
              <div
                key={ingredient.id || index}
                className="flex flex-col items-center p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all text-center group"
              >
                <div className="w-16 h-16 mb-3 bg-white rounded-full p-2 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img
                    src={`https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`}
                    alt={ingredient.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <p className="font-semibold text-gray-900 capitalize">
                  {ingredient.name}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {ingredient.amount} {ingredient.unit}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeIngredients;
