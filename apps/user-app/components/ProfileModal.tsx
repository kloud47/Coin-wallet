import ReactDom from "react-dom";
import ImageUpload from "./ImageUpload";
import { Button } from "@repo/ui/button";
import { CropProfileImage } from "../app/lib/actions/ProfileFunc";

interface ModalProfile {
    Open: boolean,
    close: () => void,
    user: string | null | undefined,
    imageUrl: string | null | undefined
}

export const ModalProfile = ({ Open, close, imageUrl, user }: ModalProfile) => {
    if (!Open) return
    return ReactDom.createPortal(
        <>
            <div className="bg-[#000] opacity-70 fixed w-screen h-screen z-50" />
            <div className="bg-[#2d2934] w-[40vw] z-50 flex flex-col items-end h-[80vh] center rounded-lg shadow-xl">
                <button className="flex items-center justify-center rounded-md p-1 hover:bg-[#4c3242] w-[5%] text-[#fff]" onClick={close}><Cross /></button>
                <ImageUpload user={user} imageUrl={imageUrl}>
                    <Button 
                        className={"border border-[#35aab9] hover:bg-[#35aab9] hover:text-[#fff] text-[#35aab9]"}
                        onClick={() => CropProfileImage()}
                    >
                        Save
                    </Button>
                </ImageUpload>
            </div>
        </>,
        document.getElementById('portal')!
    )
}

function Cross () {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>

}