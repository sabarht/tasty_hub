import Image from "next/image";
import SaveButton from "../saveButton/savaButton";

export default function RecipeListItem({ recipe, handleToggleFavorite }) {
  return (
    <ul
      key={recipe._id}
      className="flex-col  m-2 p-2 border-2 rounded-md border-gray-400"
    >
      <span onClick={() => router.push(`/${recipe._id}`)} className="flex-col">
        <div className="w-80 h-80">
          <Image
            src={recipe.image}
            width={400}
            height={400}
            alt={recipe.description}
            className="w-full h-full  object-cover  rounded-md"
          ></Image>
        </div>

        <li className="flex justify-between">
          <ul className="flex-column">
            <li>{recipe.title}</li>
            <li>{recipe.creator} </li>
          </ul>
        </li>
      </span>
      <SaveButton handleToggleFavorite={handleToggleFavorite} recipe={recipe} />
    </ul>
  );
}