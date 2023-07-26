import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
export default function LoginButton() {
  const { data: session, status } = useSession();
  console.log(session);
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <Image src={session.user.image} width={50} height={50} />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
