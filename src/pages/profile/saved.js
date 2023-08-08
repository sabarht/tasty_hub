import RecipeListItem from "../../../components/recipeListItem/recipeListItem";
import useSWR from "swr";
import Layout from "../../../components/layout/layout";
import { useSession } from "next-auth/react";
export default function SavedPage() {
  const { data: session } = useSession();

  const { data: savedRecipes } = useSWR(`/api/users/${session?.user._id}`);

  if (!savedRecipes || savedRecipes[0] == null) {
    return (
      <div className="flex flex-col items-center justify-center m-10">
        <h1 className="text-xl font-semibold ">You have no saved recipes!</h1>
        <img className="max-w-md" src="/meow.png" width="100%" alt="cat" />
      </div>
    );
  }
  return (
    <Layout>
      <h4 className="m-4 font-semibold text-lg"> Your Saved Recipes:</h4>
      <ul>
        {savedRecipes.map((recipe) => {
          return (
            <li key={recipe._id}>
              <RecipeListItem recipe={recipe} />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
