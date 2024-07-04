import { UploadImage, DeleteImage } from "../../lib/actions/imageFunc";
import prisma from "@repo/coindb/client";
import { NextResponse, NextRequest } from 'next/server';

export const POST = async (req:NextRequest) => {
    const formData = await req.formData();

    const image = formData.get("image") as unknown as File
    const username = formData.get("user") as string

    const picExist = await prisma.user.findFirst({
        where: {
            name: username
        },
        select: {
            public_id: true
        }
    })

    if (picExist?.public_id) {
        await DeleteImage(picExist.public_id)
    }

    const data = await UploadImage(image, "CoinWallet-Profile");

    await prisma.user.update({
        where: {
            name: username
        },
        data: {
            profile_url: data?.secure_url,
            public_id: data?.public_id
        }
    })
    await prisma.contacts.updateMany({
        where: {
            contactName: username
        },
        data: {
            contactProfile: data?.secure_url
        }
    })

    return NextResponse.json({ msg: image}, {status: 200});
} 