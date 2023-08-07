import RecipeListItem from "../../../components/recipeListItem/recipeListItem";
import useSWR from "swr";
import Layout from "../../../components/layout/layout";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function SavedPage() {
  const { data: session } = useSession();
  console.log("aaaaa", session);
  // const [renderContent, setRenderContent] = useState(false);

  // const renderWithDelay = () => {
  //   setTimeout(() => {
  //     setRenderContent(true);
  //   }, 500);
  // };

  // const { data: userData } = useSWR("/api/users");
  const { data: savedRecipes } = useSWR(`/api/users/${session?.user._id}`);
  // const { data: recipesData } = useSWR("/api/recipes");
  console.log("suserData", savedRecipes);

  if (!savedRecipes) {
    return <h1>You have no saved Recipes Yet...</h1>;
  }
  return (
    <Layout>
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
