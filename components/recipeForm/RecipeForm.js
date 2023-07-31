import React, { useState } from "react";
import Button from "../button/button";
export default function RecipeForm({ onSubmit, formName }) {
  const [appendedInput, setAppendedInput] = useState("");
  function addIngredients() {
    const newAppendInput = (
      <div>
        <input
          name="ingredients"
          id="ingredients"
          type="text"
          className="border-2"

          //   defaultValue={defaultData?.name}
        />
        <button
          onClick={removeIngredients}
          className="border-2 p-1.5 px-4 rounded-lg"
        >
          -
        </button>
      </div>
    );
    setAppendedInput([...appendedInput, newAppendInput]);
    console.log("add", appendedInput);
  }
  function removeIngredients() {
    console.log("remove", appendedInput.slice(0, -1));

    const deleteInput = [...appendedInput];

    setAppendedInput(deleteInput.slice(0, deleteInput.length));
  }
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

            //   defaultValue={defaultData?.name}
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

            //   defaultValue={defaultData?.name}
          />
        </div>
        <div>
          <label htmlFor="ingredients" className="block">
            Add ingredients:
          </label>
          <input
            name="ingredients"
            id="ingredients"
            type="text"
            className="border-2 w-full p-2 rounded-md"

            //   defaultValue={defaultData?.name}
          />{" "}
          {<p>{appendedInput}</p>}
        </div>

        <button
          type="button"
          className="border-2 p-1.5 px-4 rounded-lg p-2 rounded-md"
          onClick={addIngredients}
        >
          +
        </button>
        <div>
          <label htmlFor="direction" className="block">
            Add the directions:{" "}
          </label>
          <input
            name="direction"
            id="direction"
            type="text"
            className="border-2 w-full p-2 rounded-md"

            //   defaultValue={defaultData?.name}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
