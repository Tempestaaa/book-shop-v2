import { api } from "@/lib/api";
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

          const res = await api.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
            validatedFields.data
          );

          if (res.success) return res.data;
          else return null;
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
      const isAccountRoute = pathname.startsWith("/user");

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
