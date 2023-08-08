import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../../components/footer/footer";
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
              className="p-1.5 px-4 m-2"
            >
              Sign out
            </button>
          </li>
        </ul>
        <div className="w-full m-8 border-t-2 border-gray-200"></div>

        <ul className="flex flex-col items-center w-full space-y-6 m-4">
          <li>
            {" "}
            <button className=" text-center bg-customGreenLight py-1.5 w-36 rounded-lg">
              <Link href="/create" passHref>
                Add New Recipe
              </Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customGreenLight py-1.5 w-36 rounded-lg">
              <Link
                href="/profile/saved"
                className="flex items-center justify-center space-x-2"
                passHref
              >
                <span> Saved Recipes</span>
                <AiOutlineArrowRight />
              </Link>
            </button>
          </li>
          {/* <li>
            {" "}
            <button className="bg-customGreenLight py-1.5 w-36 rounded-lg">
              <Link
                href="/profile/usersRecipes"
                className="flex items-center justify-center space-x-2"
                passHref
              >
                <span> My Recipes </span>
                <AiOutlineArrowRight />
              </Link>
            </button>
          </li> */}
        </ul>
        <div className="m-20 text-transparent">.</div>
        <div className="m-20 text-transparent ">.</div>

        <span className="fixed bottom-0 w-full ">
          <Footer>
            <ul className="text-xs flex justify-center">
              Illustrations by:
              <li>
                <a href="https://www.freepik.com/free-vector/recipe-book-concept-illustration_19245712.htm#query=recipe%20illustration&position=0&from_view=search&track=ais">
                  storyset
                </a>
                on Freepik &{" "}
              </li>
              <li>
                <a href="https://www.freepik.com/free-vector/cat-astronaut-concept-illustration_22896103.htm#query=illustration%20lcat&position=38&from_view=search&track=ais">
                  {" "}
                  storyset
                </a>
                on Freepik
              </li>
            </ul>
          </Footer>
        </span>
      </>
    );
  }
  return (
    <>
      <br />
      <p className="m-2 font-semibold">
        Sign in to access all of the amazing features!
      </p>
      <img
        className="w-3/4 max-w-lg md:max-w-3xl"
        src="/recipes.png"
        width="100%"
        alt="recipes book illustration"
      />{" "}
      <button
        onClick={() => signIn()}
        type="button"
        className="mb-6 border-2 p-1.5 px-6 rounded-lg border-customOrange bg-customOrange"
      >
        Sign in
      </button>
      <br />
      {/* <div className="m-20 text-transparent md:hidden">.</div> */}
      <span className="relative bottom-0 w-full md:static">
        <Footer>
          <ul className="text-xs">
            Illustrations by:
            <li>
              <a href="https://www.freepik.com/free-vector/recipe-book-concept-illustration_19245712.htm#query=recipe%20illustration&position=0&from_view=search&track=ais">
                storyset
              </a>
              on Freepik
            </li>
            <li>
              <a href="https://www.freepik.com/free-vector/cat-astronaut-concept-illustration_22896103.htm#query=illustration%20lcat&position=38&from_view=search&track=ais">
                storyset
              </a>
              on Freepik
            </li>
          </ul>
        </Footer>
      </span>
    </>
  );
}
