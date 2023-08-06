import Login from "../../../components/login/login";
import Layout from "../../../components/layout/layout";
import Footer from "../../../components/footer/footer";

export default function ProfilePage() {
  return (
    <>
      <Layout>
        <Login />
      </Layout>

      <Footer>
        <ul className="text-xs">
          Illustrations by:
          <li>
            {" "}
            <a href="https://www.freepik.com/free-vector/recipe-book-concept-illustration_19245712.htm#query=recipe%20illustration&position=0&from_view=search&track=ais">
              storyset
            </a>{" "}
            on Freepik
          </li>
          <li>
            <a href="https://www.freepik.com/free-vector/cat-astronaut-concept-illustration_22896103.htm#query=illustration%20lcat&position=38&from_view=search&track=ais">
              storyset
            </a>{" "}
            on Freepik
          </li>
        </ul>
      </Footer>
    </>
  );
}
