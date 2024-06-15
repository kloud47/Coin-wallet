import prisma from "@repo/coindb/client"
import CredentialsProvider  from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

export const authoptions = {
    providers: [
        CredentialsProvider({
            name: 'phone number',
            credentials: {
                phone: { label: 'Phone number', type: 'number', placeholder: '1234567..' },
                password: { label: 'password', type: 'password', placeholder: 'password' }
            },
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
                            phone: existingUser.phone
                        }
                    }
                    return null;
                }

                try {
                    const user = await prisma.user.create({
                        data: {
                            phone: credentials.phone,
                            password: hashpass
                        }
                    });

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
        async session({ token, session }: any) {
            session.user.id = token.sub
            return session;
        }
    }
}