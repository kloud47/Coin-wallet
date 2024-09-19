import prisma from "@repo/coindb/client"
import CredentialsProvider  from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

export const authoptions = {
    providers: [
        CredentialsProvider({
            name: 'phone number',
            credentials: { },
            async authorize(credentials: any) {
                const hashpass = await bcrypt.hash(credentials.password, 10);
                const existingUser = await  prisma.user.findFirst({
                    where: {
                        phone: credentials.phone
                    }
                });

                if (existingUser) {
                    const passwordValid = await bcrypt.compare(credentials.password, existingUser.password)
                    if (passwordValid) {
                        return {
                            id: existingUser.id.toString(),
                            phone: existingUser.phone,
                            name: existingUser.name
                        }
                    }
                    return null;
                }

                try {
                    const user = await prisma.user.create({
                        data: {
                            phone: credentials.phone,
                            password: hashpass,
                            name: credentials.name
                        }
                    });
                    await prisma.balance.create({
                        data: {
                            userId: user.id,
                            amount: 2000*100,
                            locked: 0
                        }
                    })
                    return {
                        id: user.id.toString(),
                        name: user.name,
                        phone: user.phone
                    }
                } catch (e) {
                    console.error(0)
                }
                return null;
            },
        })
    ],
    secret: process.env.JWT_SECRET || "",
    callbacks: {
        async jwt({ token, user }: any) {
            // console.log("jwt token", { token, user, session });
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (user) {
                token.phone = user.phone
            }
                return token;
        },
        async session({ token, session }: any) {
            session.user.id = token.sub
            session.user.phone = token.phone
            return session;
        },
    },
    pages: {
        signIn: "/signup"
    }
}