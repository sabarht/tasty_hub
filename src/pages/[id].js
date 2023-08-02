import RecipeDetails from "../../components/recipeDetails/recipeDetails";
import Navigation from "../../components/navigation/navigation";
import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import Button from "../../components/button/button";
import Link from "next/link";
import CommentForm from "../../components/commentForm/commentForm";
// import { useState } from "react";
export default function RecipeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(id ? `/api/recipes/${id}` : null);

  console.log(id);
  const { mutate } = useSWR("/api/comments");
  const [comments, setComments] = useState([]);

  async function handleComment(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const commentData = Object.fromEntries(formData);

    console.log("comment", commentData);

    const response = await fetch("/api/comments", {
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
        <RecipeDetails data={data} />
        <CommentForm onSubmit={handleComment} />
        <ul>
          {comments.map((comment, index) => (
            <li key={`local-comment-${index}`}>{comment}</li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
