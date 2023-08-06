import SearchForm from "../../../components/searchForm/searchForm";
import RecipeList from "../../../components/recipesList/recipeList";
import Navigation from "../../../components/navigation/navigation";
import { useState } from "react";
import useSWR from "swr";
import Layout from "../../../components/layout/layout";
import Footer from "../../../components/footer/footer";
// import Button from "../../../components/button/button";
export default function SearchPage({ savedRecipes }) {
  const { data } = useSWR("/api/recipes");
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState(" ");

  function handleSearchResults(e) {
    e.preventDefault();
    setSearchValue(e.target.value);
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
    setSearchResults(results);
  }
  return (
    <>
      <Navigation />
      <Layout>
        <section className="search-header ">
          {" "}
          <p> Search your cravings</p>
        </section>
        <SearchForm onChange={handleSearchResults} />

        <ul className="flex space-x-4 m-2">
          <li>
            <button
              className=" border-2 p-1.5 px-6 rounded-lg"
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

        <RecipeList data={searchResults} savedRecipes={savedRecipes} />
      </Layout>
      <div className="m-20 text-transparent">.</div>
      <span className="fixed bottom-0 w-full">
        <Footer />
      </span>
    </>
  );
}
