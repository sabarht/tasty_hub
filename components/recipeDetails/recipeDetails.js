import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../layout/layout";

export default function RecipeDetails({ data }) {
  const router = useRouter();

  const { title, image, creator, direction, ingredients, description } = data;
  return (
    <>
      <button
        onClick={() => {
          router.push(`/`);
        }}
        className="p-2 rounded border-black border-solid border-2"
      >
        BACK
      </button>
      <Layout>
        <div>
          <ul className="max-w-sm">
            <li>
              <h1 className="text-3xl font-semibold">{title}</h1>
            </li>
            <li>
              <h4 className="text-xl font-semibold ">recipe by: {creator}</h4>
            </li>
          </ul>
          <ul className="max-w-sm">
            <li>
              <Image
                src={image}
                width={400}
                height={400}
                alt={description}
              ></Image>
            </li>
            <p>description</p>
            <p>direction</p>
          </ul>
        </div>
      </Layout>
    </>
  );
}
