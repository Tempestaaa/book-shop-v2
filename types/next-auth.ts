import { DefaultSession, User } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

export interface iUser extends User {
  _id: string;
  email: string;
  role: string;
  access_token: string;
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    user: iUser;
  }
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: iUser;
  }
}
