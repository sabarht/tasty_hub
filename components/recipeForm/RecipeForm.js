import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsArrowRightCircle } from "react-icons/bs";
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
  defaultValue,
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
            defaultValue={defaultValue?.title}
            name="title"
            id="title"
            type="text"
            className="border-2 w-full p-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="image" className="block">
            Add recipes image:{" "}
          </label>
          <input
            name="image"
            id="image"
            type="text"
            className="border-2 w-full p-2 rounded-md"
            defaultValue={defaultValue?.image}
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
            defaultValue={defaultValue?.description}
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
            defaultValue={defaultValue?.ingredients}
          />{" "}
          <button
            type="button"
            className="border-2 p-1.5 px-2.5 rounded-lg p-2 rounded-md"
            onClick={onClick}
          >
            <IoIosAddCircleOutline className="text-xl" />
          </button>
        </div>
        <ul className="flex space-x-2">
          {appendedInput.map((ing, index) => (
            <li
              key={index}
              className="rounded-lg px-3 py-1.5 border flex space-x-2"
            >
              <div>{ing}</div>
              <button onClick={() => onClickDelete(index)}>
                {" "}
                <IoIosRemoveCircleOutline />
              </button>
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
            defaultValue={defaultValue?.direction}
          />
          <button
            type="button"
            className="border-2 p-1.5 px-2.5 rounded-lg p-2 rounded-md"
            onClick={onAddDirection}
          >
            <IoIosAddCircleOutline className="text-xl" />
          </button>
        </div>

        <ul className="flex space-x-2">
          {appendedDirection.map((step, index) => (
            <li
              key={index}
              className="rounded-lg px-3 py-1.5 border flex space-x-2"
            >
              <div>{step}</div>
              <button onClick={() => onDirectionDelete(index)}>
                {" "}
                <IoIosRemoveCircleOutline />
              </button>
            </li>
          ))}
        </ul>
        <label for="category">Select the category: </label>
        <select
          id="category"
          name="category"
          className="p-1.5 border-2 rounded-lg"
        >
          <option value="" disabled selected></option>
          <option value="Iranian">Iranian</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
        </select>
        <button
          className="flex items-center  hover:bg-green-600 hover:font-medium  bg-green-800 text-white p-2 px-3  rounded-xl"
          type="submit"
          name="Submit a recipe"
        >
          post
          <BsArrowRightCircle className="ml-1.5" />
        </button>
      </form>
    </>
  );
}
