import { X } from "lucide-react";

interface CardInterface {
    children: React.ReactNode,
    imgUrl?: string,
    name: string,
    CardClass?: String,
    del?: boolean,
    ClickFunc?: () => void,
    deleteFunc?: () => void,
}

export const ContactCard = ({ children, imgUrl, name, ClickFunc, CardClass, deleteFunc, del } : CardInterface) => {

    return (
        <>
            <div  onClick={ClickFunc} className={`${CardClass} relative h-[110px] w-[110px] bg-[#b8b1bc] m-1 duration-500 rounded-2xl flex flex-col items-center p-2 justify-between hover:bg-[#fff] hover:cursor-pointer`}>
                {!imgUrl && name && <div className="bg-[#ec3232] flex items-center justify-center text-2xl p-1 h-[70px] w-[70px] boxShadow shadow-lg text-[#fff] border-[#fff] rounded-2xl">
                    {name?.substring(0, 2)}
                </div>}
                {imgUrl && <img src={imgUrl} alt="user" className="h-[70px] w-[70px] shadow-xl  text-[#fff] border-[#fff] rounded-2xl" />}
                <div className="text-black font-thin">
                    {children}
                </div>
                {del && <div onClick={deleteFunc} className={`bg-[#c73939] group-hover:scale-125 duration-150 absolute top-0 right-0 z-10 rounded-full`} ><X size={15} /></div>}
            </div>
        </>
    );
};
