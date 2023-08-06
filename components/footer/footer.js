import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-200 p-4 space-y-4 text-center text-gray-800">
      <div className="space-y-2 ">
        <h4 className="text-customGreen font-serif text-xl font-semibold">
          {" "}
          Tasty Hub
        </h4>
        <p>Tasty Hub is a platform to share and enhance your cooking skills.</p>
        <ul className="flex justify-center space-x-2 text-xl">
          <li>
            <Link href="https://www.linkedin.com/in/saba-rahrotaban/">
              <BsLinkedin />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/t4sty_hub_">
              <BsInstagram />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/sabarht/tasty_hub">
              <BsGithub />
            </Link>
          </li>
        </ul>
      </div>

      <div className="border-t-2 border-gray-300"></div>
      <p className="text-center text-gray-500 text-sm">
        © Tasty Hub 2023. All rights reserved.
      </p>
    </footer>
  );
}
