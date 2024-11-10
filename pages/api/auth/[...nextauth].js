// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import SlackProvider from "next-auth/providers/slack";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import { baseUrl } from "@/config/config";

const nextAuthUrl = process.env.NEXTAUTH_URL;
const useSecureCookies = nextAuthUrl.startsWith("https://");
const cookiePrefix = useSecureCookies ? "__Secure-" : "";
const hostName = new URL(nextAuthUrl).hostname;
// add providers with NextAuth
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // console.log(credentials);
        // Your authentication logic here
        const { email, password } = credentials;
        const res = await fetch(`${baseUrl}api/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        // If authentication is successful, return user data
        if (res.ok && user) {
          // console.log("this user is not showing", user);
          return user;
        }

        // Return null if authentication fails
        return null;
      },
    }),
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
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  cookies: {
    sessionToken: {
      name: `${cookiePrefix}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        domain: "." + hostName,
        secure: useSecureCookies,
      },
    },
  },
  callbacks: {
    // async redirect({ url, baseUrl }) {
    //   return `${baseUrl}/menu/dashboard`;
    // },
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin

      // console.log("jwt-user", user);
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token, user }) {
      // console.log("user", user);
      if (user) {
        session.user.role = user.role;
      }

      return session;
    },
  },
});
