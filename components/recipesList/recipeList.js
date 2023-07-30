import { useRouter } from "next/router";
import RecipeListItem from "../recipeListItem/recipeListItem";

export default function RecipeList({ data, handleToggleFavorite, isSaved }) {
  const router = useRouter();

  return (
    <section className="flex justify-center flex-wrap md:flex-row">
      {data.map((recipe) => (
        <RecipeListItem
          recipe={recipe}
          key={recipe._id}
          handleToggleFavorite={handleToggleFavorite}
          isSaved={isSaved}
        />
      ))}
    </section>
  );
}
