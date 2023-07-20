// import { useRouter } from "next/router";
import Image from "next/image";
export default function RecipeList({ data }) {
  // const router = useRouter();

  return (
    <section className="flex justify-center flex-wrap md:flex-row">
      {data.map((recipe) => (
        <ul
          key={recipe._id}
          className="flex-col max-w-md   m-2 p-2 border-2 rounded-md border-gray-400"
        >
          <div>
            <Image
              src={recipe.image}
              width={400}
              height={700}
              alt={recipe.description}
              className="w-full max-h-52 h-full object-cover rounded-md"
            ></Image>
          </div>

          <li className="flex justify-between">
            <ul className="flex-column">
              <li>{recipe.title}</li>
              <li>{recipe.creator} </li>
            </ul>
            <div>SAVE</div>
          </li>
        </ul>
      ))}
    </section>
  );
}
