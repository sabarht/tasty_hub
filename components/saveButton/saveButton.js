import { MdBookmark } from "react-icons/md";
import { MdBookmarkBorder } from "react-icons/md";
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { useSession } from "next-auth/react";
export default function SaveButton({ recipeId }) {
  const { data: user } = useSession();
  console.log("user", user);
  console.log("userID", user?.user._id);
  const [isSaved, setIsSaved] = useState(false);
  const { data: savedRecipes, error } = useSWR(
    `/api/users/savedRecipes/${user?.user._id}`
  );
  console.log("savedRecipes11", savedRecipes);
  const [isSavedArray, setIsSavedArray] = useState();

  useEffect(() => {
    setIsSavedArray(savedRecipes);
  }, [savedRecipes]);

  console.log("setIsSavedArray", isSavedArray);
  if (error) {
    console.log("Error fetching user data:", error);
  }

  async function handleToggleSave() {
    try {
      if (user == null) {
        const confirmation = window.confirm(
          "You need to sign in to save recipes!"
        );
      } else if (isSaved) {
        const result = isSavedArray.filter((id) => id !== recipeId);
        setIsSavedArray([...result]);
        console.log("SAVED setIsSavedArray", isSavedArray);
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
        setIsSavedArray([...updatedSavedRecipes]);
        console.log("NOt Saved setIsSavedArray", isSavedArray);
      }

      mutate();
    } catch (error) {
      console.log("Error saving/unsaving recipe:", error);
    }
  }
  console.log("lastlog", isSavedArray);

  let buttonText = "";
  if (isSavedArray?.includes(recipeId)) {
    buttonText = <MdBookmark />;
  } else {
    buttonText = <MdBookmarkBorder />;
  }
  // const buttonText = isSaved ? <MdFavorite /> : <MdOutlineFavoriteBorder />;

  return (
    <button
      className="save-button text-2xl text-red-800 p-4 absolute bottom-0 right-0"
      onClick={() => {
        setIsSaved((prevIsSaved) => !prevIsSaved);
        handleToggleSave();
      }}
    >
      {buttonText}
    </button>
  );
}
