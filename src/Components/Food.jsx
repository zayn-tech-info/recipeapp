import React from "react";
import FoodItem from "./FoodItem";

const Food = ({ foodData }) => {
  return (
    <>
      <div>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-15">
          <div className="flex justify-between">
            <div>
              <p className="text-3xl font-bold">Discover, Create, Share</p>
              <p className="opac">
                Check our most popular recipes of this week
              </p>
            </div>
            <div>
              <button className="bg-[#F79F1A] text-xl rounded-2xl text-white px-3 py-2">
                See All
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="grid gap-10 my-5 grid-cols-3">
            {foodData.map((food) => (
              <FoodItem
                food={food}
                key={food.id}
                foodName={food.title}
                recipeImage={food.title}
                cookingTime="10mins"
                serving="2 servings"
                foodType="Easy"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
