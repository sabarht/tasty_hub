import Navigation from "../../../components/navigation/navigation";
import Layout from "../../../components/layout/layout";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import RecipeListItem from "../../../components/recipeListItem/recipeListItem";
export default function ProfilePage() {
  const { data: session } = useSession();
  const sessionId = session?.user._id;
  const { data: recipes } = useSWR("/api/recipes");
  console.log(recipes);

  return (
    <>
      <Navigation />
      <Layout>
        <ul>
          {recipes.map((recipe) =>
            recipe.user == sessionId ? (
              <div key={recipe._id}>
                <RecipeListItem
                  recipe={recipe}
                  //   handleToggleFavorite={handleToggleFavorite}
                  //   isSaved={isSaved}
                  //   savedRecipes={savedRecipes}
                />
              </div>
            ) : null
          )}
        </ul>
      </Layout>
    </>
  );
}
