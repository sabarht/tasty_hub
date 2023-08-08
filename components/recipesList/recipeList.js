import RecipeListItem from "../recipeListItem/recipeListItem";
import SaveButton from "../saveButton/saveButton";

export default function RecipeList({ data }) {
  return (
    <section className="flex justify-center flex-wrap md:flex-row">
      {data.map((recipe) => (
        <>
          <RecipeListItem recipe={recipe} key={recipe._id}>
            <span className=" absolute bottom-0 right-0">
              <SaveButton recipeId={recipe._id} />
            </span>
          </RecipeListItem>
        </>
      ))}
    </section>
  );
}
