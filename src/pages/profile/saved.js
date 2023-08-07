import RecipeListItem from "../../../components/recipeListItem/recipeListItem";
import useSWR from "swr";
import Layout from "../../../components/layout/layout";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function SavedPage() {
  const [renderContent, setRenderContent] = useState(false);

  const renderWithDelay = () => {
    setTimeout(() => {
      setRenderContent(true);
    }, 500);
  };

  const { data: userData } = useSWR("/api/users");
  const { data: recipesData } = useSWR("/api/recipes");
  console.log("suserData", userData);
  console.log("srecipesData", recipesData);
  useEffect(() => {
    if (!userData) {
      renderWithDelay();
    }
  }, [userData]);
  if (!renderContent) {
    return <h1>Loading...</h1>;
  }
  if (!userData) {
    return <h1>You have no saved Recipes Yet...</h1>;
  }
  const savedRecipes = userData[1].savedRecipes;
  return (
    <Layout>
      <ul>

        {recipesData.map((recipe) => {

          return (
            <li key={recipe._id}>
              {savedRecipes.includes(recipe._id) && (
                <RecipeListItem
                  recipe={recipe}
                  // handleToggleFavorite={handleToggleFavorite}
                  // savedRecipes={savedRecipes}
                />
              )}
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
