import { Inter } from "next/font/google";
import RecipeList from "../../components/recipesList/recipeList";
import useSWR from "swr";
import Footer from "../../components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({}) {
  const { data } = useSWR("/api/recipes");

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section className="home-header ">
        <div className="py-16 min-h-screen flex flex-col items-center">
          <p className="my-3 text-white text-lg font-semibold">
            Explore New Recipes
          </p>
        </div>
      </section>
      <main
        className={`flex min-h-screen flex-col items-center justify-between px-24 ${inter.className}`}
      >
        <RecipeList data={data} />
      </main>
      <Footer />
    </>
  );
}
