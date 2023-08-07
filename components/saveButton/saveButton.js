import { MdFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import { useSession } from "next-auth/react";
export default function SaveButton({ recipeId }) {
  console.log("recipe id", recipeId);
  const { data: user } = useSession();

  console.log("userID", user?.user._id);
  const [isSaved, setIsSaved] = useState(false);

  const { data: savedRecipes, error } = useSWR(
    `/api/users/savedRecipes/${user?.user._id}`
  );
  console.log("savedRecipes11", savedRecipes);
  if (error) {
    console.log("Error fetching user data:", error);
  }

  async function handleToggleSave() {
    try {
      if (isSaved) {
        // Make a DELETE request to remove the spot from favorites
        const res = await fetch(`/api/users/${user?.user._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ recipeId }),
        });
        if (res.ok) {
          setIsSaved(false);
        }
        // if (isSaved) {
        //   const updatedSavedRecipes = savedRecipes.filter(
        //     (id) => id !== recipeId
        //   );
        //   await fetch(`/api/users/${user?.user._id}`, {
        //     method: "DELETE",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ savedRecipes: updatedSavedRecipes }),
        //   });
      } else {
        const updatedSavedRecipes = [...savedRecipes, recipeId];
        setIsSaved(!isSaved);

        await fetch(`/api/users/${user?.user._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ savedRecipes: updatedSavedRecipes }),
        });
      }
      // if (isSaved) {
      //   const updatedSavedRecipes = savedRecipes.filter(
      //     (id) => id !== recipeId
      //   );
      //   await fetch(`/api/users/${user?.user._id}`, {
      //     method: "PATCH",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ savedRecipes: updatedSavedRecipes }),
      //   });
      // } else {
      //   const updatedSavedRecipes = [...savedRecipes, recipeId];
      //   await fetch(`/api/users/${user?.user._id}`, {
      //     method: "PATCH",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ savedRecipes: updatedSavedRecipes }),
      //   });
      // }

      mutate();
    } catch (error) {
      console.log("Error saving/unsaving recipe:", error);
    }
  }

  // let buttonText = "";
  // if (savedRecipes?.includes(recipeId)) {
  //   buttonText = <MdFavorite />;
  // } else {
  //   buttonText = <MdOutlineFavoriteBorder />;
  // }

  const buttonText = isSaved ? <MdFavorite /> : <MdOutlineFavoriteBorder />;

  return (
    <button
      onClick={() => {
        setIsSaved((prevIsSaved) => !prevIsSaved);
        handleToggleSave();
      }}
    >
      {buttonText}
    </button>
  );
}
