import { MdFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
export default function SaveButton({
  recipe,
  savedRecipes,
  handleToggleFavorite,
}) {
  return (
    <>
      {savedRecipes.includes(recipe._id) ? (
        <button
          className="absolute bottom-4 right-4 "
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleToggleFavorite(recipe._id);
          }}
        >
          <MdFavorite className="text-2xl " />
        </button>
      ) : (
        <button
          className="absolute bottom-4 right-4 "
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleToggleFavorite(recipe._id);
          }}
        >
          <MdOutlineFavoriteBorder className="text-2xl " />
        </button>
      )}
    </>
  );
}
