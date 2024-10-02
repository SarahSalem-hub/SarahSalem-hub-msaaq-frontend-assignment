import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare, genSalt, hash } from "bcrypt";
import { prisma } from "@/prisma";

async function hashAndSaltPassword(password: string, saltRounds = 10) {
  const salt = await genSalt(saltRounds);
  return hash(password, salt);
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials) {
        const { email, password } = credentials as Record<
          "email" | "password",
          string
        >;

        // Check if credentials are null
        if (!credentials) return null;

        // Find the user by email
        const user = await prisma.user.findUnique({
          where: { email },
        });

        // If no user found, return null
        if (!user) {
          return null; // User does not exist
        }
        // Compare the provided password with the stored hashed password
        const isValidPassword = password === user.password;

        // If password is incorrect, return null
        if (!isValidPassword) {
          return null; // Invalid credentials
        }

        // Return user details if everything is valid
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],

  pages: {
    signIn: "/login",
    error: "/error",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnProfile = nextUrl.pathname.startsWith("/profile");
      console.log("isLoggedIn", isLoggedIn);
      if (isOnProfile) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/login", nextUrl)); // Redirect logged-in users to /profile if they try to access other routes
      }

      return true;
    },
  },

  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig);
