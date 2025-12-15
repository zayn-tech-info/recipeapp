import React from "react";
import { Link } from "react-router-dom";
import {
  ClockIcon,
  UserGroupIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

const FoodItem = ({ food }) => {
  return (
    <div className="group relative block h-full">
      <div className="relative flex flex-col h-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-sm hover:ring-primary/50">
        <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[3/2] lg:aspect-[4/3]">
          <img
            src={food.image}
            alt={food.title}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
            <FireIcon className="w-3 h-3 text-orange-500" /> Easy
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-bold leading-6 text-gray-900 transition-colors line-clamp-2 mb-2">
            {food.title}
          </h3>
          <Link
            to={`/recipeinfo/${food.id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary mb-4 hover:text-primary-hover transition-colors group/link"
          >
            View details
            <span
              className="transition-transform group-hover/link:translate-x-1"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </Link>
          <div className="mt-auto flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4" />
              <span>20 min</span>
            </div>
            <div className="flex items-center gap-1">
              <UserGroupIcon className="w-4 h-4" />
              <span>2 ppl</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
