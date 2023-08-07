import Layout from "../../../components/layout/layout";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import RecipeListItem from "../../../components/recipeListItem/recipeListItem";
export default function UsersRecipes() {
  const { data: session } = useSession();
  console.log("session", session);
  const sessionId = session?.user._id;
  const { data: recipes } = useSWR("/api/recipes");
  console.log("sessionId", sessionId);

  return (
    <>
      <Layout>
        <ul>
          {recipes?.map((recipe) => {
            recipe.user === sessionId ? (
              <li key={recipe._id}>
                <RecipeListItem recipe={recipe} />
              </li>
            ) : null;
          })}
        </ul>
      </Layout>
    </>
  );
}
