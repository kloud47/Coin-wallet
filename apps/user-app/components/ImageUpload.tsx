"use client"
import { ChangeEvent, FormEvent, useRef, useState } from "react"
import ReactCrop, { Crop, makeAspectCrop, centerCrop } from 'react-image-crop'
import axios from "axios"
import 'react-image-crop/dist/ReactCrop.css'
import { Button } from "@repo/ui/button"
import { CropProfileImage } from "../app/lib/actions/ProfileFunc"
import { convertToPixelCrop } from "react-image-crop";


interface ProfileFormInterface {
    user: string | null | undefined,
    imageUrl: string | null | undefined
}

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 200;

export default function ImageUpload ({ user, imageUrl} : ProfileFormInterface) {
    const imageRef = useRef(null)
    const canvasRef = useRef(null)
    const [image, setImage] = useState(undefined as File | undefined)// type casting
    const [preview, setPreview] = useState<string | File | undefined | Blob | MediaSource>(String(imageUrl));
    const [crop, setCrop] = useState<Crop>()

    const ChooseFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setPreview(URL.createObjectURL(e.target.files[0]))
            setImage(e.target.files[0])
        }
    }

    const submitImage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!image) {
                return
            }
            const formData = new FormData();
            formData.append("image", image);
            formData.append("user", String(user))

            const response = await axios.post("/api/upload-image", formData);

        } catch (err:any) {
            console.log("Error", err.message);
        }

    }

    const onImageLoad = (e: any) => {
        const {width, height} = e.currentTarget;
        // to always get 200px image width in crop:
        const cropWidth = (MIN_DIMENSION/width) * 100;

        const crop = makeAspectCrop(
            {
                unit: "%",
                width: cropWidth,
            },
            ASPECT_RATIO,
            width,
            height
        );
        const centeredCrop = centerCrop(crop, width, height)
        setCrop(centeredCrop);
    }

    console.log("imageUrl => ", imageUrl)
    return (
        <div className="flex flex-col items-center w-full h-full">
            <form onSubmit={submitImage} className="flex flex-col items-center w-full h-full bg-[#342f39]">
                <div className="flex flex-col items-center my-8">
                    {!preview && <div className="text-[#fff]">No image present</div>}
                    <ReactCrop 
                        crop={crop}
                        onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
                        circularCrop
                        keepSelection
                        aspect={ASPECT_RATIO}
                        minWidth={MIN_DIMENSION}
                    >
                        <img 
                            ref={imageRef}
                            src={preview} 
                            alt="" 
                            className="h-[55vh] overflow-hidden"
                            onLoad={onImageLoad}
                        />
                    </ReactCrop>
                </div>
                <div className="flex items-center space-x-[80px]">
                    <label htmlFor="profilePic" className="flex justify-center items-center  hover:cursor-pointer rounded-full h-[40px] w-[80px] bg-[#3f364d] hover:bg-[#26222c] text-[#fff]" >Gallery</label>
                    <input type="file" className="hidden" name="profilePic" id="profilePic"  onChange={ChooseFile}/>
                    <Button 
                        className={"border border-[#35aab9] hover:bg-[#35aab9] hover:text-[#fff] text-[#35aab9]"}
                        // onClick={() => 
                        //     CropProfileImage(
                        //         imageRef.current,
                        //         convertToPixelCrop(
                        //             crop,
                        //             imageRef.current.width,
                        //             imageRef.current.height
                        //         )
                        //     )
                        // }
                    >
                        Save
                    </Button>
                </div>
            </form>
        </div>
    )
}