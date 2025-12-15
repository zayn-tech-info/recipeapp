import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import RecipeInfo from "./Pages/RecipeInfo";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  const [foodData, setFoodData] = useState([]);

  if (!localStorage.getItem("foodData")) {
    localStorage.setItem("foodData", JSON.stringify(foodData));
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ScrollToTop />
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={<Home foodData={foodData} setFoodData={setFoodData} />}
          />
          <Route path="/recipeinfo/:id" element={<RecipeInfo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
