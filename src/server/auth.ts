import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type User,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { jwtDecode } from "jwt-decode";
import CredentialsProvider from "next-auth/providers/credentials";

import { type JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User;
  }
  interface User {
    iat: number;
    exp: number;
    token?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: (session) => {
      session.session.user = session.token.user;
      return session.session;
    },
    async jwt({ user, token }) {
      if (user) {
        return {
          user: user,
        } as JWT;
      }
      return token;
    },
  },
  providers: [
    CredentialsProvider({
      name: "login",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, _) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Missing username or password");
        }

        // const result = await LoginService(
        //   credentials?.username,
        //   credentials?.password,
        // );

        // if (!result?.refreshToken || !result?.token) {
        //   throw new Error("Not found any token or refresh token");
        // }

        const decoded = jwtDecode<User & { userId: string }>("result.token");

        return {
          id: decoded.userId,
          exp: decoded.exp,
          iat: decoded.iat,
          token: "result.token",
        };
      },
    }),
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
