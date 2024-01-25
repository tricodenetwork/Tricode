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
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      // },
    }),
    SlackProvider({
      clientId: process.env.SLACK_ID,
      clientSecret: process.env.SLACK_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      // Redirect based on user role
      if (user?.user?.role === "talent") {
        return "/menu/dashboard"; // Replace with your talent dashboard route
      } else if (user?.user?.role === "company") {
        return "/menu/dashboard"; // Replace with your company dashboard route
      } else {
        return "/role"; // Default redirect URL
      }
    },
  },
});
