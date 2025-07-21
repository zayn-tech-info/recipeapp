import React from "react";
import { useContext } from "react";
import { foodContext } from "../context/foodContextInstance";
function FoodDetail() {
  const {foodItem, isloading } = useContext(foodContext)
  return (
    <div>
      {isloading ? (
        <>Loading</>
      ) : (
        <div>
          <div className="w-100 bg-white border-1 border-gray-300 shadow-xl p-4 rounded-md">
            <p className="mb-2 font-medium text-gray-600">{foodItem.title}</p>
            <img
              className="rounded-md"
              src={foodItem.image}
              alt={foodItem.title}
            />
          </div>
          <div className="mt-10">
            <div className="border-1 p-5 rounded-md border-gray-300">
              <p className="text-2xl mb-5 font-medium">Ingredients</p>
              <div className="grid gap-10 grid-cols-4">
                {foodItem.extendedIngredients.map((ingredients) => (
                  <div key={crypto.randomUUID()}>
                    <div className="h-30 w-30">
                      <div className="flex flex-col items-center space-y-3">
                        <p className="font-medium text-gray-600">{ingredients.name}</p>
                        <img
                          className="w-35mt-10"
                          src={
                            `https://img.spoonacular.com/ingredients_100x100/` +
                            ingredients.image
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodDetail;
