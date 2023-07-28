export default function SaveButton({ recipe, handleToggleFavorite }) {
  return (
    <button type="button" onClick={() => handleToggleFavorite(recipe._id)}>
      {/* <button type="button" onClick={handleSave}> */}
      Save
    </button>
  );
}
