export default function RecipeForm({
  onSubmit,
  formName,
  onChange,
  onClick,
  appendedInput,
}) {
  console.log("mmm", appendedInput);
  return (
    <>
      <form
        aria-labelledby={formName}
        onSubmit={onSubmit}
        className="w-1/2 border-2 p-3 flex-col justify-center space-y-3"
      >
        <div>
          <label htmlFor="title" className="block">
            Add recipes title:{" "}
          </label>
          <input
            name="title"
            id="title"
            type="text"
            className="border-2 w-full p-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="description" className="block">
            Add a description:{" "}
          </label>
          <input
            name="description"
            id="description"
            type="text"
            className="border-2 w-full p-2 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="ingredients" className="block">
            Add ingredients:
          </label>
          <input
            onChange={onChange}
            name="ingredients"
            id="ingredients"
            type="text"
            className="border-2 w-full p-2 rounded-md"
          />{" "}
          {/* {<p>{appendedInput}</p>} */}
        </div>

        <button
          type="button"
          className="border-2 p-1.5 px-4 rounded-lg p-2 rounded-md"
          onClick={onClick}
        >
          +
        </button>
        <ul>
          {appendedInput.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>
        <div>
          <label htmlFor="direction" className="block">
            Add the directions:{" "}
          </label>
          <input
            name="direction"
            id="direction"
            type="text"
            className="border-2 w-full p-2 rounded-md"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
