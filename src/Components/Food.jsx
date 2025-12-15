import React from "react";
import FoodItem from "./FoodItem";

const Food = ({ foodData }) => {
  return (
    <section id="recipes" className="py-16 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Discover, Create, Share
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Check our most popular recipes of this week
            </p>
          </div>
          <div className="text-center md:text-right">
            <button className="text-primary font-semibold hover:text-primary-hover transition-colors text-lg flex items-center justify-center md:justify-end gap-2 mx-auto md:mx-0">
              See All Recipes <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodData && foodData.length > 0 ? (
            foodData.map((food) => (
              <FoodItem food={food} key={food.id} foodName={food.title} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 text-lg">
                Search for something tasty above!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Food;
