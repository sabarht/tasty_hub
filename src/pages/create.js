import RecipeForm from "../../components/recipeForm/RecipeForm";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "../../components/layout/layout";
import React, { useState } from "react";

export default function CreatePage() {
  const router = useRouter();
  const recipes = useSWR("/api/recipes");
  const [appendedInput, setAppendedInput] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [appendedDirection, setAppendedDirection] = useState([]);
  const [direction, setDirection] = useState("");

  function handleInputChange(event) {
    setIngredient(event.target.value);
  }

  function addIngredient() {
    if (ingredient.trim() !== "") {
      setAppendedInput([...appendedInput, ingredient]);
      setIngredient("");
    }
  }

  function deleteIngredient(index) {
    const updatedIngredients = [...appendedInput];
    updatedIngredients.splice(index, 1);
    setAppendedInput(updatedIngredients);
  }
  /////

  function handleDirectionChange(event) {
    setDirection(event.target.value);
  }

  function addDirection() {
    if (direction.trim() !== "") {
      setAppendedDirection([...appendedDirection, direction]);
      setDirection("");
    }
  }

  function deleteDirection(index) {
    const updatedDirection = [...appendedDirection];
    updatedDirection.splice(index, 1);
    setAppendedDirection(updatedDirection);
  }
  /////
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("meow");
    const newData = {
      ...data,
      ingredients: appendedInput,
      direction: appendedDirection,
    };
    console.log({ newData });
    const response = await fetch("/api/recipes", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      recipes.mutate();
      event.target.reset();
      router.push("/");
    } else {
      console.error(`Error: ${response.status}`);
    }
  }
  return (
    <>
      <Link href="/profile">Back </Link>
      <Layout className="w-3/4">
        <RecipeForm
          onSubmit={handleSubmit}
          onClick={addIngredient}
          onClickDelete={deleteIngredient}
          onChange={handleInputChange}
          onAddDirection={addDirection}
          onDirectionDelete={deleteDirection}
          onChangeDirection={handleDirectionChange}
          formName={"add-recipe"}
          appendedInput={appendedInput}
          appendedDirection={appendedDirection}
        />
      </Layout>
    </>
  );
}
