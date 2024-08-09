import { NextRequest, NextResponse } from "next/server";
import prisma from "@repo/coindb/client";

export const POST = async ( req:NextRequest ) =>  {
    const FormData = await req.formData();
    const name= String(FormData.get('name'));
    const phone = String(FormData.get("phone"));
    const id = String(FormData.get("id"));

    try {
        const userData = await prisma.user.findFirst({
            where: {
                phone: phone
            },
            select: {
                profile_url: true,
                name: true
            }
        });

        console.log(userData?.profile_url)

        await prisma.contacts.upsert({
            where: {
                contactID: {
                    userID: Number(id),
                    ContactPhone: phone
                }
            },
            update: {
                userID: Number(id),
                givenName: name,
            },
            create: {
                userID: Number(id),
                givenName: name,
                contactName: userData?.name || "",
                ContactPhone: phone,
                contactProfile: userData?.profile_url,
                Created: new Date()
            }
        })
    } catch (e) {
        return NextResponse.json({ msg: "Contact was not created." });
    }
    return NextResponse.json({ msg: "done" }, {status: 200});
}