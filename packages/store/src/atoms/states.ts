import { atom } from "recoil";

export const balanceAtom = atom<number>({
    key: "balance",
    default: 0,
})

export const profileAtom = atom<string | null | undefined>({
    key: "profile",
    default: "https://res.cloudinary.com/dt0wvlwmp/image/upload/v1719074273/CoinWallet-Profile/nrn7zsk3xtoxhl8bjx40.jpg",
})