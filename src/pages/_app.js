import "@/styles/globals.css";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import Navigation from "../../components/navigation/navigation";

let isSaved = false;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [savedRecipes, setSavedRecipes] = useState([]);

  function handleToggleFavorite(_id) {
    if (savedRecipes.includes(_id)) {
      setSavedRecipes(savedRecipes.filter((element) => element !== _id));
      isSaved = false;
    } else {
      setSavedRecipes([...savedRecipes, _id]);
      isSaved = true;
    }
  }
  return (
    <SessionProvider session={session}>
      <SWRConfig
        value={{
          fetcher: async (...args) => {
            const response = await fetch(...args);
            if (!response.ok) {
              throw new Error(`Request with ${JSON.stringify(args)} failed.`);
            }
            return await response.json();
          },
        }}
      >
        <Navigation />
        <Component
          {...pageProps}
          handleToggleFavorite={handleToggleFavorite}
          savedRecipes={savedRecipes}
          isSaved={isSaved}
        />
      </SWRConfig>
    </SessionProvider>
  );
}
//
