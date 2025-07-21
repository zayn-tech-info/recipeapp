import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import RecipeInfo from "./Pages/RecipeInfo";
import { useState } from "react";

const App = () => {
  const [foodData, setFoodData] = useState([])
  if (!localStorage.getItem("foodData")) {
    localStorage.setItem("foodData", JSON.stringify(foodData));
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home foodData={foodData} setFoodData={setFoodData} />}/>
        <Route path="/recipeinfo/:id" element={<RecipeInfo foodData={foodData} />}/>
      </Routes>
    </>
  );
};

export default App;
