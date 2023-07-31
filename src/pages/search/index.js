import SearchForm from "../../../components/searchForm/searchForm";
import RecipeList from "../../../components/recipesList/recipeList";
import Navigation from "../../../components/navigation/navigation";
import { useState } from "react";
import useSWR from "swr";
import Layout from "../../../components/layout/layout";
// import Button from "../../../components/button/button";
export default function SearchPage({ savedRecipes }) {
  const { data } = useSWR("/api/recipes");
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState(" ");

  function handleSearchResults(e) {
    e.preventDefault();
    setSearchValue(e.target.value);
    console.log("search", searchValue);
    if (data) {
      const filteredResults = data.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log("filter", filteredResults);
      setSearchResults(filteredResults);
    }
  }
  function handleFilter(category) {
    const results = data.filter((recipe) => recipe.category == category);
    console.log(results);
    setSearchResults(results);
  }
  return (
    <>
      <Navigation />
      <Layout>
        <ul className="flex space-x-4 m-2">
          <li>
            <button
              className="border-2 p-1.5 px-6 rounded-lg"
              onClick={() => {
                handleFilter("Iranian");
              }}
            >
              Iranian
            </button>
          </li>
          <li>
            <button
              className="border-2 p-1.5 px-6 rounded-lg"
              onClick={() => {
                handleFilter("Italian");
              }}
            >
              Italian
            </button>
          </li>
        </ul>

        <SearchForm onChange={handleSearchResults} />
        <RecipeList data={searchResults} savedRecipes={savedRecipes} />
      </Layout>
    </>
  );
}
