import React from "react";
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { foodContext } from "./foodContextInstance";

const FoodProvider = ({ children }) => {
  const [foodItem, setFoodItem] = useState();
  const [isloading, setIsLoading] = useState(true);
  const { id } = useParams();

  const URL = `https://api.spoonacular.com/recipes/${id}/information`;
  const apiKey = "fd813fc248e843e89abfd1eaa306dcf5";

  useEffect(() => {
    async function fetchInfo() {
      const res = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await res.json();
      setFoodItem(data);
      setIsLoading(false);
      console.log(data)
    }
	fetchInfo();
  }, [URL]);

  return (
    <foodContext.Provider value={{ foodItem, isloading }}>
      {children}
    </foodContext.Provider>
  );
};

export { FoodProvider};
