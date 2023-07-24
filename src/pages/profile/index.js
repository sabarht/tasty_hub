import Navigation from "../../../components/navigation/navigation";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <>
      <Navigation />
      <button className="border-2 p-2">
        <Link href="/create" passHref>
          Add New Recipe
        </Link>
      </button>
      <div className="p-2">Saved Recipes</div>
    </>
  );
}
