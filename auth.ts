import { iUser } from "@/types/next-auth";
import { userLogin } from "@/types/user";
import NextAuth, { AuthError } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const validatedFields = await userLogin.safeParseAsync(credentials);
          if (!validatedFields.success) return null;

          const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(validatedFields.data),
          });

          const data = await res.json();

          if (data.statusCode !== 201) return null;

          if (res.ok && data) {
            return data.data;
          }

          return null;
        } catch (error: any) {
          if (error instanceof AuthError) {
            throw error;
          }
          throw new AuthError("An unexpected error occured");
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.user = user as iUser;
      }

      return token;
    },
    session({ session, token }) {
      (session.user as iUser) = token.user;
      return session;
    },
    authorized: async ({ auth, request: req }) => {
      const isLoggedIn = !!auth;
      const { pathname } = req.nextUrl;
      const role = auth?.user.role;

      const isAuthRoute = pathname.startsWith("/auth");
      const isAccountRoute = pathname.startsWith("/account");

      if (isLoggedIn && isAuthRoute) {
        return NextResponse.redirect(new URL("/", req.nextUrl.origin));
      }

      if (role !== "user" && isAccountRoute) {
        return NextResponse.redirect(new URL("/", req.nextUrl.origin));
      }

      return true;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
});
