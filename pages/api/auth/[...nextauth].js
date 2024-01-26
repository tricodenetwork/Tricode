// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import SlackProvider from "next-auth/providers/slack";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

// add providers with NextAuth
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GitHubProvider({
      secret: process.env.SECRET,
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      checks: "both",
    }),
    SlackProvider({
      clientId: process.env.SLACK_ID,
      clientSecret: process.env.SLACK_SECRET,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/menu/dashboard`;
    },

    async session({ session, token, user }) {
      console.log("user", user);
      session.user.role = user.role;

      return session;
    },
  },
});
