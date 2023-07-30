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
        <Button onClick={removeIngredients}>-</Button>
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
        className="border-2 p-3 flex-col justify-center space-y-3"
      >
        <div>
          <label htmlFor="title" className="block">
            Add recipes title:{" "}
          </label>
          <input
            name="title"
            id="title"
            type="text"
            className="border-2"

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
            className="border-2"

            //   defaultValue={defaultData?.name}
          />{" "}
        </div>
        <div>
          <label htmlFor="ingredients" className="block">
            Add a ingredients:{" "}
          </label>
          <input
            name="ingredients"
            id="ingredients"
            type="text"
            className="border-2"

            //   defaultValue={defaultData?.name}
          />{" "}
          {<p>{appendedInput}</p>}
        </div>

        <Button onClick={addIngredients}>+</Button>
        <div>
          <label htmlFor="direction" className="block">
            Add the directions:{" "}
          </label>
          <input
            name="direction"
            id="direction"
            type="text"
            className="border-2 "

            //   defaultValue={defaultData?.name}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
