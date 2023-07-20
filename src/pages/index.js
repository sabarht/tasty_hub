import { Inter } from "next/font/google";
import RecipeList from "../../components/recipesList/recipeList";
import useSWR from "swr";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useSWR("/api/recipes");
  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <RecipeList data={data} />
    </main>
  );
}
