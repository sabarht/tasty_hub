import RecipeListItem from "../../../components/recipeListItem/recipeListItem";
import useSWR from "swr";
import Layout from "../../../components/layout/layout";

export default function SavedPage({ savedRecipes, handleToggleFavorite }) {
  const { data } = useSWR("/api/recipes");
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <Layout>
      <ul>
        {data.map((recipe) => {
          return (
            <li key={recipe._id}>
              {savedRecipes.includes(recipe._id) && (
                <RecipeListItem
                  recipe={recipe}
                  handleToggleFavorite={handleToggleFavorite}
                  savedRecipes={savedRecipes}
                />
              )}
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
