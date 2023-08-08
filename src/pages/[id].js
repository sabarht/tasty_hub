import RecipeDetails from "../../components/recipeDetails/recipeDetails";
import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Layout from "../../components/layout/layout";
import CommentForm from "../../components/commentForm/commentForm";
import Footer from "../../components/footer/footer";

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
    const confirmation = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (confirmation) {
      await fetch(`/api/recipes/${id}`, {
        method: "DELETE",
      });
      router.push("/");
    }
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
        <h1>Loading...</h1>;
      </>
    );
  }

  return (
    <>
      <Layout>
        <RecipeDetails
          data={data}
          userId={userId}
          sessionId={sessionId}
          handleDelete={deleteRecipe}
        />
        <CommentForm onSubmit={handleComment} />
        <ul className="mb-6 w-full px-4 text-gray-700 max-w-lg md:max-w-xl flex flex-col items-start space-y-2">
          {allComments &&
            allComments.map((comment, index) => (
              <li
                className="w-full p-2 rounded bg-gray-100"
                key={`database-comment-${index}`}
              >
                {comment.comment}
              </li>
            ))}
        </ul>
      </Layout>
      <Footer />
    </>
  );
}
