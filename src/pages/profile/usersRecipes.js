import Layout from "../../../components/layout/layout";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import RecipeListItem from "../../../components/recipeListItem/recipeListItem";
export default function UsersRecipes() {
  const { data: session } = useSession();
  console.log("session", session);
  const sessionId = session?.user._id;
  const { data: recipes } = useSWR("/api/recipes");

  return (
    <>
      <Layout>
        {/* <ul>
          {recipes?.map((recipe) => {
            recipe.user === sessionId ? (
              <li key={recipe._id}>
                <RecipeListItem recipe={recipe} />
              </li>
            ) : null;
          })}
        </ul> */}
      </Layout>
    </>
  );
}

// {recipes?.map((recipe) => {
//   recipe.user === sessionId && (
//     <li key={recipe._id}>
//       <article
//         key={recipe._id}
//         className=" relative flex flex-col  m-3  rounded-md bg-gray-300
// relative"
//       >
//         <span
//           onClick={() => router.push(`/${recipe._id}`)}
//           className="flex-col"
//         >
//           <div className="w-80 h-80">
//             <Image
//               src={recipe.image}
//               width={400}
//               height={400}
//               alt={recipe.description}
//               className="w-full h-full  object-cover rounded-t"
//             ></Image>
//           </div>

//           <ul className="flex flex-col justify-between py-4 px-2">
//             <li>{recipe.title}</li>
//             <li>{recipe.creator} </li>
//           </ul>
//         </span>
//       </article>
//     </li>
//   );
// })}
