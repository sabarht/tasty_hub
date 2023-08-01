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

  function handleInputChange(event) {
    setIngredient(event.target.value);
  }

  function addIngredient() {
    if (ingredient.trim() !== "") {
      setAppendedInput([...appendedInput, ingredient]);
      setIngredient("");
    }
  }
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("meow");
    const newData = { ...data, ingredients: appendedInput };
    console.log({ newData });
    const response = await fetch("/api/recipes", {
      method: "POST",
      body: JSON.stringify(data),
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
          onChange={handleInputChange}
          formName={"add-recipe"}
          appendedInput={appendedInput}
        />
      </Layout>
    </>
  );
}
