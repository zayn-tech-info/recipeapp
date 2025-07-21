import React from "react";
import { useContext } from "react";
import { foodContext } from "../context/foodContextInstance";

const RecipeInstruction = () => {
  const { foodItem, isLoading } = useContext(foodContext);
  console.log(foodItem);

  return (
    <div>
      <div>
        <p className="text-2xl mb-10 font-medium">Recipe Instructions</p>
        {isLoading ? (
          <p>Loading Instructions</p>
        ) : foodItem ? (
          <div>
            <div className="flex justify-between">
              <div>
                <p className="text-gray-500 text-xl font-medium">Ready in</p>
                <i> {foodItem.readyInMinutes} mins</i>
              </div>

              <div>
                <p className="text-gray-500 text-xl font-medium">Servings</p>
                <i>{foodItem.servings}</i>
              </div>

              <div>
                <p className="text-gray-500 text-xl font-medium">Type</p>
                <p>
                  {foodItem.vegetarian ? (
                    <i>Vegetarian</i>
                  ) : (
                    <i>Non Vegetarian</i>
                  )}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>No food item available</p>
        )}
      </div>

      <div>
        <div>
          <p className="text-2xl font-md my-10">Steps</p>
        </div>
        <div>
          {isLoading ? (
            <p>Loading</p>
          ) : (
            foodItem?.analyzedInstructions?.[0]?.steps?.map((step) => (
              <li key={crypto.randomUUID()}>{step.step}</li>
            )) ?? <p>No steps available</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default RecipeInstruction;
