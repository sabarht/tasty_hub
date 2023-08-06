import Image from "next/image";
import { useRouter } from "next/router";

export default function RecipeDetails({ data }) {
  const router = useRouter();

  const { title, image, creator, direction, ingredients, description } = data;
  return (
    <>
      <div className="text-gray-800">
        <ul className="max-w-sm">
          <li>
            <h1 className="text-3xl font-semibold">{title}</h1>
          </li>
          <li>
            <h4 className="text-xl font-medium ">recipe by: {creator}</h4>
          </li>
        </ul>
        <ul className="mx-auto max-w-lg md:max-w-xl ">
          {/* <ul className="max-w-sm"> */}
          <li className="py-4 ">
            <Image
              className="rounded"
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
              <li key={ingredient} className="list-disc">
                {ingredient}
              </li>
            ))}
          </ul>
          <h3 className="text-2xl font-semibold text-gray-800 my-4">
            Directions:
          </h3>

          <ul>
            {direction.map((string, index) => (
              <li key={string}>
                <span className="font-semibold">Step {index + 1}: </span>
                {string}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </>
  );
}
