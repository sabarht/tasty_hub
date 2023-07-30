import Link from "next/link";
export default function Navigation() {
  return (
    <ul className="flex justify-around p-4 bg-customGreen text-white">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li className="border-l-2"></li>
      <li>
        <Link href="/search">Search </Link>
      </li>
      <li className="border-l-2"></li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
    </ul>
  );
}
