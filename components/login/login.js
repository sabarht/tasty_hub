import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <Image
          src={session.user.image}
          width={50}
          height={50}
          alt="Image of user"
        />
        <button
          onClick={() => signOut()}
          type="button"
          className="border-2 p-1.5 px-6 rounded-lg"
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() => signIn()}
        type="button"
        className="border-2 p-1.5 px-6 rounded-lg"
      >
        Sign in
      </button>
    </>
  );
}
