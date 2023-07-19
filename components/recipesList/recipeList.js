// import { useRouter } from "next/router";
export default function RecipeList({ data }) {
  // const router = useRouter();

  return (
    <section>
      meow
      {data.map((recipe) => (
        <ul key={recipe._id}>
          <li>{recipe.name}</li>
          <li>{recipe.description}</li>
        </ul>
      ))}
    </section>
  );
}
