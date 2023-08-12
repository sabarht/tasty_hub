import SearchForm from "../../../components/searchForm/searchForm";
import RecipeList from "../../../components/recipesList/recipeList";
import { useState } from "react";
import useSWR from "swr";
import Layout from "../../../components/layout/layout";
import Footer from "../../../components/footer/footer";
import Image from "next/image";
// import Button from "../../../components/button/button";
export default function SearchPage({ savedRecipes }) {
  const { data } = useSWR("/api/recipes");
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState(" ");
  const categries = ["Iranian", "Italian", "Indian", "Turkish"];
  function handleSearchResults(e) {
    e.preventDefault();
    setSearchValue(e.target.value);
    if (data) {
      const filteredResults = data.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log("filter", filteredResults);
      console.log("   filteredResults.length", filteredResults.length);
      filteredResults.length > 0
        ? setSearchResults(filteredResults)
        : setSearchResults("No result");
      // setSearchResults(filteredResults);
    }
  }
  function handleFilter({ category }) {
    const results = data.filter((recipe) => recipe.category == category);

    setSearchResults(results);
  }
  return (
    <>
      <Layout className="w-full ">
        <section className="search-header">
          {" "}
          <p> Search your cravings</p>
        </section>
        <SearchForm onChange={handleSearchResults} />
        <ul className="flex space-x-1 sm:space-x-2 m-2 flex-wrap text-sm ">
          {categries.map((category) => (
            <li key={category}>
              <button
                className=" border-2 p-1 px-3 rounded-lg border-customGreenLight"
                onClick={() => {
                  handleFilter({ category });
                }}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        {searchResults == "No result" ? (
          <div className="mt-6 flex flex-col">
            <h2 className="-mb-4 text-center text-xl font-semibold">
              No search results found!
            </h2>
            <img src="cat.png" width="100%" alt="astronut cat" />
          </div>
        ) : (
          <RecipeList data={searchResults} savedRecipes={savedRecipes} />
        )}
      </Layout>

      <div className="m-20 text-transparent ">.</div>

      <span className="fixed bottom-0 w-full ">
        <Footer />
      </span>
    </>
  );
}
