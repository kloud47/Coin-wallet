import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";
import { cloudinary } from "../cloudinary";

export const UploadImage = async (file: File, folder: string) : Promise<UploadApiResponse | UploadApiErrorResponse | undefined> => {
    const buffer = await file.arrayBuffer();
    const bytes = Buffer.from(buffer);

    return new Promise(async (resolve, reject) => {
        await cloudinary.uploader.upload_stream({
            resource_type: 'image',
            folder: folder
            }, 
            async(err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            }
        ).end(bytes);
    })
}

export const DeleteImage = async (public_id: string | null) => {
    try {
        if (public_id) {
            await cloudinary.uploader.destroy(
                public_id
            )
        } else throw new Error("Public_Id not present");
        return true
    } catch (e) {
        console.error(e)
        return false
    }
}