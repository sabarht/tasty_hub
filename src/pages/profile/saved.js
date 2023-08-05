import RecipeListItem from "../../../components/recipeListItem/recipeListItem";
import useSWR from "swr";
import Link from "next/link";
import Layout from "../../../components/layout/layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
export default function SavedPage() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id, "id");
  const { data: user } = useSession();

  const { data: recipes } = useSWR("/api/recipes");

  // const { data: savedRecipes } = useSWR(`/api/users/savedRecipes`);
  // const { data: usersid } = useSWR(`/api/users`);
  // console.log("savedpage", savedRecipes);
  if (!recipes) {
    return <h1>Loading...</h1>;
  }
  return (
    <Layout>
      <ul>
        <Link href="/profile" passHref>
          Back to Profile{" "}
        </Link>
        wellllll
        {/* {savedRecipes.map((recipe) => (
          <li key={recipe._id}>
            <RecipeListItem recipe={recipe} />
          </li>
        ))} */}
        {/* {recipes.map((recipe) => {
          return (
            <li key={recipe._id}>
              {savedRecipes.includes(recipe._id) && (
                <RecipeListItem
                  recipe={recipe}
                  // handleToggleFavorite={handleToggleFavorite}
                  // savedRecipes={savedRecipes}
                />
              )}
            </li>
          );
        })} */}
      </ul>
    </Layout>
  );
}
