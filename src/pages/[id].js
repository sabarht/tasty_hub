import RecipeDetails from "../../components/recipeDetails/recipeDetails";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function RecipeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(id ? `/api/recipes/${id}` : null);

  if (!data) {
    return <h1>Loading...</h1>;
  }
  return <RecipeDetails data={data} />;
}
