import RecipeListItem from "../recipeListItem/recipeListItem";

export default function RecipeList({
  data,
  savedRecipes,
  handleToggleFavorite,
  isSaved,
}) {
  return (
    <section className="flex justify-center flex-wrap md:flex-row">
      {data.map((recipe) => (
        <RecipeListItem
          recipe={recipe}
          key={recipe._id}
          savedRecipes={savedRecipes}
          handleToggleFavorite={handleToggleFavorite}
          isSaved={isSaved}
        />
      ))}
    </section>
  );
}
