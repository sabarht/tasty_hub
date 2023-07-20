// import { useRouter } from "next/router";
import Image from "next/image";
export default function RecipeList({ data }) {
  // const router = useRouter();

  return (
    <section>
      {data.map((recipe) => (
        <ul key={recipe._id} className="flex-column border-2">
          <Image
            src={recipe.image}
            width={400}
            height={400}
            alt={recipe.description}
          ></Image>
          <li className="flex justify-between">
            <ul className="flex-column">
              <li>{recipe.name}</li>
              <li>creator </li>
            </ul>
            <div>SAVE</div>
          </li>
        </ul>
      ))}
    </section>
  );
}
