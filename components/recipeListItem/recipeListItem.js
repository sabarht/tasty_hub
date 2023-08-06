import Image from "next/image";
import SaveButton from "../saveButton/saveButton";
import { useRouter } from "next/router";

export default function RecipeListItem({
  recipe,
  handleToggleFavorite,
  isSaved,
  savedRecipes,
}) {
  const router = useRouter();

  return (
    <article
      key={recipe._id}
      className="flex-col  m-3  rounded-md bg-gray-300
      relative"
    >
      <span onClick={() => router.push(`/${recipe._id}`)} className="flex-col">
        <div className="w-80 h-80">
          <Image
            src={recipe.image}
            width={400}
            height={400}
            alt={recipe.description}
            className="w-full h-full  object-cover rounded-t"
          ></Image>
        </div>

        <ul className="flex flex-col justify-between py-4 px-2">
          <li>{recipe.title}</li>
          <li>{recipe.creator} </li>
        </ul>
      </span>
      <SaveButton
        handleToggleFavorite={handleToggleFavorite}
        isSaved={isSaved}
        recipe={recipe}
        savedRecipes={savedRecipes}
      />
    </article>
  );
}
