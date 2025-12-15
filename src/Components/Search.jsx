import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = ({ setFoodData }) => {
  const [query, setQuery] = useState("pizza");
  const [inputValue, setInputValue] = useState("");
  const apiKey = "fd813fc248e843e89abfd1eaa306dcf5";
  const URL = "https://api.spoonacular.com/recipes/complexSearch";

  useEffect(() => {
    async function fetchFood() {
      if (!query) return;
      try {
        const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
        const data = await res.json();
        setFoodData(data.results || []);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    }
    fetchFood();
  }, [query, setFoodData]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setQuery(inputValue);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <form
        onSubmit={handleSearch}
        className="relative flex items-center shadow-lg rounded-2xl bg-white overflow-hidden border border-gray-100 ring-4 ring-gray-50/50"
      >
        <div className="pl-4 text-gray-400">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none text-lg placeholder-gray-400"
          type="text"
          placeholder="What do you want to cook today?"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary-hover text-white font-semibold py-2 px-8 m-2 rounded-xl transition-colors duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
