import Link from "next/link";
export default function Navigation() {
  return (
    <ul className="flex justify-around bg-red-600 ">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/search">Search </Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
    </ul>
  );
}
