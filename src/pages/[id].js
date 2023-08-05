import RecipeDetails from "../../components/recipeDetails/recipeDetails";
import Navigation from "../../components/navigation/navigation";
import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Layout from "../../components/layout/layout";
import Button from "../../components/button/button";
import Link from "next/link";
import CommentForm from "../../components/commentForm/commentForm";

export default function RecipeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? `/api/recipes/${id}` : null);
  const { data: session, status } = useSession();
  console.log("data", data);
  const sessionId = session?.user._id;
  console.log("sessionId", sessionId);

  console.log("data", data);

  const userId = data?.user?._id;

  console.log("userId", userId);

  const { data: allComments, mutate } = useSWR(`/api/comments?id=${id}`);
  const [comments, setComments] = useState([]);
  async function deleteRecipe() {
    await fetch(`/api/recipes/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }
  async function handleComment(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const commentData = Object.fromEntries(formData);

    console.log("comment", commentData);

    const response = await fetch(`/api/comments?id=${id}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      mutate();
      setComments([...comments, commentData.comment]);

      e.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }
  if (!data) {
    return (
      <>
        <Navigation />
        <h1>Loading...</h1>;
      </>
    );
  }

  return (
    <>
      <Navigation />
      <Button className="p-2 rounded border-black border-solid border-2">
        <Link href={"/"}>BACK</Link>
      </Button>
      <Layout>
        {/* {
        if (userId === sessionId ) {
                return(<Link href={`/edit/${data._id}`} passHref legacyBehavior>
            <button className="border-2 p-1.5 px-6 rounded-lg">edit</button>
          </Link>)
     }
     } */}
        {userId == sessionId ? (
          <Link href={`/edit/${data._id}`} passHref legacyBehavior>
            <button className="border-2 p-1.5 px-6 rounded-lg">edit</button>
          </Link>
        ) : null}

        {userId == sessionId ? (
          <button
            className="border-2 p-1.5 px-6 rounded-lg"
            onClick={deleteRecipe}
          >
            DELETEEEEEE
          </button>
        ) : null}
        <RecipeDetails data={data} />
        <CommentForm onSubmit={handleComment} />
        <ul>
          {allComments &&
            allComments.map((comment, index) => (
              <li key={`database-comment-${index}`}>{comment.comment}</li>
            ))}
        </ul>
      </Layout>
    </>
  );
}
