import { useRouter } from "next/navigation";

interface CardInterface {
  children: React.ReactNode,
  imgUrl?: string,
  name: string,
  phone: string
}

export const UserCard = ({ children, imgUrl, name, phone }: CardInterface) => {
  const router = useRouter();

  return (
    <>
      <div onClick={() => router.push(`/ContactDetail/${name}`)} className="h-[110px] w-[110px] bg-[#b8b1bc] m-1 duration-500 rounded-2xl flex flex-col items-center p-2 justify-between hover:bg-[#fff] hover:cursor-pointer">
        {!imgUrl && name && <div className="bg-[#ec3232] flex items-center justify-center text-2xl p-1 h-[70px] w-[70px] boxShadow shadow-lg text-[#fff] border-[#fff] rounded-2xl">
          {name?.substring(0, 2)}
        </div>}
        {imgUrl && <img src={imgUrl} alt="user" className="h-[70px] w-[70px] shadow-xl boxShadow  text-[#fff] border-[#fff] rounded-2xl" />}
        <div className="text-black font-thin">
          {children}
        </div>
      </div>
    </>
  );
};
