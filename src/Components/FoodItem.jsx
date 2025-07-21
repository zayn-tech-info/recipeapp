import React from "react";
import { Link } from "react-router-dom";

const FoodItem = ({ foodName, food }) => {
  // function handClick(e) {
  //   e.preventDefault();
  //   console.log(food.id);
  // }
  return (
    <div>
      <div className="relative">
        <div className="relativ">
          <img className="w-1/1 h-70" src={food.image} />
        </div>
        <div className="space-y-1">
          <p className="text-xl pt-1 font-medium">{foodName}</p>
            <Link to={`recipeinfo/${food.id}`}>
              <li className="list-none">View</li>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
