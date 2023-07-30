export default function SaveButton({ recipe, handleToggleFavorite, isSaved }) {
  console.log("isSaved9", isSaved);
  return (
    <button type="button" onClick={() => handleToggleFavorite(recipe._id)}>
      {isSaved ? "meow" : "save"}
    </button>
  );
}
