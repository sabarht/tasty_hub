import Image from "next/image";
import { useRouter } from "next/router";

export default function RecipeDetails({ data }) {
  const router = useRouter();

  const { title, image, creator, direction, ingredients, description } = data;
  // const arrayOfIngredients = ingredients.split("\n");
  // const arrayOfDirections = direction.split("\n");
  return (
    <>
      <div>
        <ul className="max-w-sm">
          <li>
            <h1 className="text-3xl font-semibold">{title}</h1>
          </li>
          <li>
            <h4 className="text-xl font-semibold ">recipe by: {creator}</h4>
          </li>
        </ul>
        <ul className="mx-auto max-w-lg md:max-w-xl ">
          {/* <ul className="max-w-sm"> */}
          <li>
            <Image
              src={image}
              width={600}
              height={600}
              alt={description}
            ></Image>
          </li>
          <p>{description}</p>
          <h3 className="text-2xl font-semibold text-gray-800 my-4">
            Ingredients:
          </h3>
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <h3 className="text-2xl font-semibold text-gray-800 my-4">
            Directions:
          </h3>

          <ul>
            {direction.map((string) => (
              <li key={string}>{string}</li>
            ))}
          </ul>
        </ul>
      </div>
    </>
  );
}
