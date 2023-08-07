import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdEdit, MdDelete } from "react-icons/md";
export default function RecipeDetails({
  data,
  userId,
  sessionId,
  handleDelete,
}) {
  const router = useRouter();
  const { title, image, creator, direction, ingredients, description } = data;

  return (
    <>
      <div className="text-gray-800 my-6">
        <div className="flex justify-between">
          <ul className="max-w-sm">
            <li>
              <h1 className="text-3xl font-semibold">{title}</h1>
            </li>
            <li>
              <h4 className="text-xl font-medium ">recipe by: {creator}</h4>
            </li>
          </ul>
          {userId == sessionId ? (
            <ul className=" top-20 text-2xl space-y-2">
              <li>
                <Link href={`/edit/${data._id}`} passHref legacyBehavior>
                  <button className=" bg-gray-100 p-1.5 px-2 rounded-lg">
                    <MdEdit />
                  </button>
                </Link>
              </li>
              <li>
                <button
                  className="bg-gray-100 p-1.5 px-2 rounded-lg"
                  onClick={handleDelete}
                >
                  <MdDelete />
                </button>
              </li>
            </ul>
          ) : null}
        </div>

        <ul className="mx-auto max-w-lg md:max-w-xl ">
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
