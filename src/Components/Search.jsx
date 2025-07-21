import React, { useEffect, useState } from "react";
const Search = ({ setFoodData }) => {

  const [query, setQuery] = useState("jelly");
  const [inputValue, setInputValue] = useState()
  // const [data, setData] = useState(null)

  const apiKey = "fd813fc248e843e89abfd1eaa306dcf5";
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  
  useEffect(() => {
    async function fetchFood() {
      if (!query) return;
      try {
        const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
        const data = await res.json();
        setFoodData(data.results || []);
        console.log(data)
      } catch (error) {
        console.log("Error fetching food data:", error);
      }
    }
    fetchFood();
  }, [query, setFoodData, URL]);

  useEffect(()=>{
    if(inputValue !== "") {
      setQuery(inputValue)
    }
  }, [inputValue])

  return (
    <div className="mx-auto flex justify-center my-10">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border-1 px-2 outline-0 w-100 rounded-md p-1"
        type="text"
        placeholder="Search for recipe"
      />
    </div>
  );
};

export default Search;
