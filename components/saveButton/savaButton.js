export default function SaveButton({ data }) {
  // const { savedRecipes, handleToggleSave } = useStore();
  // const selectedRecipe = data?.find((Recipe) => Recipe._id === id);
  // const isSaved = savedRecipes.find((rest) => rest === selectedRecipe?._id);
  return (
    <button
      type="button"
      // onClick={(e) => {
      //   e.preventDefault;
      //   handleToggleSave(data._id);
      // }}
    >
      Save
    </button>
  );
}
