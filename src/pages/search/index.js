import SearchForm from "../../../components/searchForm/searchForm";
import RecipeList from "../../../components/recipesList/recipeList";
import Navigation from "../../../components/navigation/navigation";
import { useState } from "react";
import useSWR from "swr";

export default function SearchPage() {
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
  return (
    <>
      <Navigation />
      <SearchForm onChange={handleSearchResults} />
      <RecipeList data={searchResults} />
    </>
  );
}
