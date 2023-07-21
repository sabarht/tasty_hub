import Image from "next/image";
import { useRouter } from "next/router";

export default function RecipeDetails({ data }) {
  const router = useRouter();

  const { title, image, direction, description } = data;
  return (
    <section>
      <button
        onClick={() => {
          router.push(`/`);
        }}
      >
        BACK
      </button>
      <ul>
        <li>
          <Image src={image} width={400} height={400} alt={description}></Image>
        </li>
        <li>
          <h2>{title}</h2>
          <h4>creator</h4>
        </li>
      </ul>
    </section>
  );
}
