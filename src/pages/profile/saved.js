import RecipeListItem from "../../../components/recipeListItem/recipeListItem";
import useSWR from "swr";
import Link from "next/link";

export default function SavedPage({ savedRecipes, handleToggleFavorite }) {
  const { data } = useSWR("/api/recipes");
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <ul>
      <Link href="/profile" passHref>
        Back to Profile{" "}
      </Link>
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
  );
}
