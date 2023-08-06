import Navigation from "../../../components/navigation/navigation";
import Login from "../../../components/login/login";
import Link from "next/link";
import Layout from "../../../components/layout/layout";
import Button from "../../../components/button/button";
import Footer from "../../../components/footer/footer";

export default function ProfilePage() {
  return (
    <>
      <Navigation />
      <Layout>
        <Login />
        <Button>
          <Link href="/create" passHref>
            Add New Recipe
          </Link>
        </Button>

        <Link href="/profile/saved" passHref>
          Saved Recipes
        </Link>
      </Layout>
      <span className="fixed bottom-0 w-full">
        <Footer />
      </span>
    </>
  );
}
