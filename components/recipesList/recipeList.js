import RecipeListItem from "../recipeListItem/recipeListItem";
import SaveButton from "../saveButton/saveButton";

export default function RecipeList({ data }) {
  return (
    <section className="flex justify-center flex-wrap md:flex-row">
      {data.map((recipe) => (
        <>
          <RecipeListItem recipe={recipe} key={recipe._id}>
            <SaveButton recipeId={recipe._id} />
          </RecipeListItem>
        </>
      ))}
    </section>
  );
}
