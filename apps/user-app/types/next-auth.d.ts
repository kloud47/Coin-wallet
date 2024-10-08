import nextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        phone: string
    }
    interface Session {
        user: User & {
            phone: string
        }
        token: {
            username: string
        }
    }
}