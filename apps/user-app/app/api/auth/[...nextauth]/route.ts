import NextAuth from "next-auth/next";
import { authoptions } from "./auth";

const handler = NextAuth(authoptions)

export { handler as GET, handler as POST }