import RecipeForm from "../../components/recipeForm/RecipeForm";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "../../components/layout/layout";

export default function CreatePage() {
  const router = useRouter();
  const recipes = useSWR("/api/recipes");
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("meow", data);
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
      <Layout>
        <RecipeForm onSubmit={handleSubmit} formName={"add-recipe"} />
      </Layout>
    </>
  );
}
