"use server"
import { getServerSession } from "next-auth"
import prisma from "@repo/coindb/client";
import { authoptions } from "../auth";


export async function FetchProfile () {
    const session = await getServerSession(authoptions);
    const userId = session?.user?.id;
    console.log(userId)

    if (!userId) return null;

    const data = await prisma.user.findFirst({
        where: {
            id: Number(userId)
        },
        select: {
            profile_url: true
        }
    })
    .then(data => data?.profile_url)

    // console.log(data)

    return data;
}

export const CropProfileImage = (image : any, crop: any) => {
    const ctx = image.getContext("2D");
    if (!ctx) {
        throw new Error("No 2D context");
    }

    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    image.width = Math.floor(crop.width * scaleX * pixelRatio)
    image.height = Math.floor(crop.height * scaleY * pixelRatio)

    image.scale(pixelRatio, pixelRatio);
    image.imageSmoothingQuality = "high";
    image.save();

    const cropX = crop.x * scaleX;
    const cropY = crop.y * scaleY;

    image.translate(-cropX, -cropY);
    // ctx.drawImage(
    //     image,
    //     0,
    //     0,
    //     image.naturalWidth,
    //     image.naturalHeight,
    //     0,
    //     0,
    //     image.naturalWidth,
    //     image.naturalHeight,
    // )
    // ctx.restore();
}