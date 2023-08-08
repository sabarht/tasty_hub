import Link from "next/link";
export default function Navigation() {
  return (
    <ul className="px-4 md:px-20 sticky top-0 z-10 flex justify-around py-4 bg-customGreen text-white">
      <li>
        <Link
          className="flex flex-col items-center font-serif text-xl font-semibold"
          href="/"
        >
          Tasty Hub
        </Link>
      </li>
      <li className="text-transparent"></li>
      <li className="text-transparent"></li>
      <li className="space-x-4">
        <Link href="/">Home </Link>
        <Link href="/search">Search </Link>
        <Link href="/profile">Profile</Link>
      </li>
    </ul>
  );
}

// return (
//   <ul className="sticky top-0 z-10 flex justify-around p-4 bg-customGreen text-white">
//     <li>
//       <Link href="/">Home</Link>
//     </li>
//     <li className="border-l-2"></li>
//     <li>
//       <Link href="/search">Search </Link>
//     </li>
//     <li className="border-l-2"></li>
//     <li>
//       <Link href="/profile">Profile</Link>
//     </li>
//   </ul>
// );
