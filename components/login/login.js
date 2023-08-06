import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
export default function Login() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (session) {
    return (
      <>
        <ul className="mt-8 flex justify-between space-x-10">
          <li className="space-y-2">
            <p className="text-gray-700"> Hello {session.user.name}</p>
            <p className="text-lg font-semibold">
              What would you like to cook today?
            </p>
          </li>
          <li className=" flex flex-col items-center">
            <Image
              className="rounded-full"
              src={session.user.image}
              width={50}
              height={50}
              alt="Image of user"
            />
            <button
              onClick={() => signOut()}
              type="button"
              className="p-1.5 px-6 "
            >
              Sign out
            </button>
          </li>
        </ul>
        <div className="w-full border-t-2 border-gray-200"></div>
        <button className="border-2 p-1.5 px-6 rounded-lg">
          <Link href="/create" passHref>
            Add New Recipe
          </Link>
        </button>

        <Link href="/profile/saved" passHref>
          Saved Recipes
        </Link>
      </>
    );
  }
  return (
    <>
      <br />
      <p className="m-2">You are not signed in</p>
      <img
        className="w-3/4 max-w-3xl"
        src="recipes.png"
        width="100%"
        alt="astronut cat"
      />{" "}
      <button
        onClick={() => signIn()}
        type="button"
        className="mb-6 border-2 p-1.5 px-6 rounded-lg border-customOrange bg-customOrange"
      >
        Sign in
      </button>
      <br />
    </>
  );
}
