import { Inter } from "next/font/google";
import RecipeList from "../../components/recipesList/recipeList";
import Navigation from "../../components/navigation/navigation";
import LoginButton from "../../components/loginButton/loginButton";
import useSWR from "swr";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ handleToggleFavorite, savedRecipes }) {
  const { data } = useSWR("/api/recipes");

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Navigation />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <LoginButton />

        <RecipeList
          data={data}
          handleToggleFavorite={handleToggleFavorite}
          savedRecipes={savedRecipes}
        />
      </main>
    </>
  );
}
