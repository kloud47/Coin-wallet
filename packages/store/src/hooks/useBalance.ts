import { useRecoilState, useRecoilValue } from "recoil"
import { profileAtom } from "../atoms/states";

export const getProfile = () => {
    const value = useRecoilValue(profileAtom);
    return value;
}

export const profileState = ( ImageUrl: string | null | undefined ) => {
    const [imageUrl, setImageUrl] = useRecoilState(profileAtom)
    setImageUrl(imageUrl)
}