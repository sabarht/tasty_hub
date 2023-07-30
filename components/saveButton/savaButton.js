export default function SaveButton({
  recipe,
  savedRecipes,
  handleToggleFavorite,
  isSaved,
}) {
  console.log("isSaved9", isSaved);

  return (
    <>
      {savedRecipes.includes(recipe._id) ? (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleToggleFavorite(recipe._id);
          }}
        >
          saved
        </button>
      ) : (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleToggleFavorite(recipe._id);
          }}
        >
          not
        </button>
      )}
    </>
  );
}
