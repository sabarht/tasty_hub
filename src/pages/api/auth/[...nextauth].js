import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import clientPromise from "../../../../lib/mongoose";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  adapter: MongoDBAdapter(clientPromise),

  callbacks: {
    async session({ session, user }) {
      session.user._id = user.id;
      return session;
    },
  },
};
export default NextAuth(authOptions);
