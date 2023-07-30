import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Button from "../button/button";
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
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  );
}
