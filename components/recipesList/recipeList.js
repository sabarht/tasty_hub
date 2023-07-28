import { useRouter } from "next/router";
import RecipeListItem from "../recipeListItem/recipeListItem";
// import { useRecipesStore } from "../../src/store/store";

export default function RecipeList({ data, handleToggleFavorite }) {
  const router = useRouter();
  // const { recipes } = useRecipesStore();

  return (
    <section className="flex justify-center flex-wrap md:flex-row">
      {data.map((recipe) => (
        <RecipeListItem
          recipe={recipe}
          key={recipe._id}
          handleToggleFavorite={handleToggleFavorite}
        />
      ))}
    </section>
  );
}
