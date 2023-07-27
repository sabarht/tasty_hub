import Image from "next/image";
import { useRouter } from "next/router";

export default function RecipeDetails({ data }) {
  const router = useRouter();

  const { title, image, creator, direction, description } = data;
  return (
    // <div className="flex-col m-2 p-2 justify-items-stretch max-w-sm">
    <>
      <button
        onClick={() => {
          router.push(`/`);
        }}
        className="p-2 rounded border-black border-solid border-2"
      >
        BACK
      </button>
      <div className="flex flex-col items-center">
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
    </>
    // <>
    //   {" "}
    //   <button
    //     onClick={() => {
    //       router.push(`/`);
    //     }}
    //   >
    //     BACK
    //   </button>
    //   <ul className="flex ">
    //     <li>
    //       <Image src={image} width={400} height={400} alt={description}></Image>
    //     </li>
    //     <p>
    //       Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    //       nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    //       sed diam voluptua.
    //     </p>
    //   </ul>
    //   <ul>
    //     <li>
    //       <h2>{title}</h2>
    //       <h4>creator</h4>
    //     </li>
    //   </ul>
    // </>
  );
}
