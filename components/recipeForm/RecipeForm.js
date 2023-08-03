export default function RecipeForm({
  onSubmit,
  formName,
  onChange,
  onClick,
  onClickDelete,
  appendedInput,
  onAddDirection,
  onDirectionDelete,
  onChangeDirection,
  appendedDirection,
}) {
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
        <label htmlFor="ingredients" className="block">
          Add ingredients:
        </label>
        <div className="w-full flex">
          <input
            onChange={onChange}
            name="ingredients"
            id="ingredients"
            type="text"
            className="mr-1.5 flex-grow  border-2 p-2 rounded-md"
          />{" "}
          <button
            type="button"
            className="border-2 p-1.5 px-4 rounded-lg p-2 rounded-md"
            onClick={onClick}
          >
            +
          </button>
        </div>
        <ul>
          {appendedInput.map((ing, index) => (
            <li key={index}>
              <div>{ing}</div>
              <button onClick={() => onClickDelete(index)}>-</button>
            </li>
          ))}
        </ul>
        <label htmlFor="direction" className="block">
          Add the directions:{" "}
        </label>
        <div className="w-full flex">
          <input
            onChange={onChangeDirection}
            name="direction"
            id="direction"
            type="text"
            className="mr-1.5 flex-grow  border-2  p-2 rounded-md"
          />
          <button
            type="button"
            className="border-2 p-1.5 px-4 rounded-lg p-2 rounded-md"
            onClick={onAddDirection}
          >
            +
          </button>
        </div>
        <ul>
          {appendedDirection.map((ing, index) => (
            <li key={index}>
              <div>{ing}</div>
              <button onClick={() => onDirectionDelete(index)}>-</button>
            </li>
          ))}
        </ul>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
