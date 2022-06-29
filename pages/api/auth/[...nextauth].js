import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "lib/prisma";
import { previewClient } from "lib/sanity-server";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      id: "google",
      name: "google",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      id: "github",
      name: "github",
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    FacebookProvider({
      id: "facebook",
      name: "facebook",
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session(session) {
      const { user, session: data } = session;
      await previewClient.createOrReplace({
        _id: user.id,
        _type: "author",
        name: user.name,
        slug: {
          current: user.name.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
        },
        image: user.image,
      });
      if (data) {
        data.userId = user.id;
      }
      return data;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
});
