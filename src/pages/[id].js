import RecipeDetails from "../../components/recipeDetails/recipeDetails";
import Navigation from "../../components/navigation/navigation";
import useSWR from "swr";
import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import Button from "../../components/button/button";
import Link from "next/link";
export default function RecipeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(id ? `/api/recipes/${id}` : null);

  if (!data) {
    return (
      <>
        <Navigation />
        <h1>Loading...</h1>;
      </>
    );
  }
  return (
    <>
      <Navigation />
      <Button className="p-2 rounded border-black border-solid border-2">
        <Link href={"/"}>BACK</Link>
      </Button>
      <Layout>
        <RecipeDetails data={data} />;
      </Layout>
    </>
  );
}
