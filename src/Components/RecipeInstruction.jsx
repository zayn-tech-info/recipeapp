import React, { useContext } from "react";
import { foodContext } from "../context/foodContextInstance";
import {
  ClockIcon,
  UserGroupIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

const RecipeInstruction = () => {
  const { foodItem, isLoading } = useContext(foodContext);

  if (isLoading || !foodItem) {
    return null;
  }

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-wrap gap-4 justify-around sm:justify-start">
        <div className="flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-700 rounded-xl">
          <ClockIcon className="w-6 h-6" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-70">
              Ready In
            </p>
            <p className="font-bold">{foodItem.readyInMinutes} mins</p>
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 bg-green-50 text-green-700 rounded-xl">
          <UserGroupIcon className="w-6 h-6" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-70">
              Servings
            </p>
            <p className="font-bold">{foodItem.servings}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 bg-orange-50 text-orange-700 rounded-xl">
          <FireIcon className="w-6 h-6" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-70">
              Diet
            </p>
            <p className="font-bold">
              {foodItem.vegetarian ? "Vegetarian" : "Non-Veg"}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <span className="text-primary">📝</span> Instructions
        </h2>

        <div className="space-y-6">
          {foodItem.analyzedInstructions?.[0]?.steps?.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold text-sm shadow-md mt-1">
                {index + 1}
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {step.step}
                </p>
              </div>
            </div>
          ))}

          {(!foodItem.analyzedInstructions ||
            foodItem.analyzedInstructions.length === 0) && (
            <p className="text-gray-500 italic">
              No detailed instructions available for this recipe.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeInstruction;
