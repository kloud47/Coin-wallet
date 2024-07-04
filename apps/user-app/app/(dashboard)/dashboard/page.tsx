import { Card } from "@repo/ui/card";
import Credit from "../../public/credit.png";
import Contacts from "../../../components/Contacts/Contacts";

export default function Dashboard (): JSX.Element {
    return (
        <>
            <div className="w-[95%] p-2">
                <div className=" text-[#fff] w-full h-[80vh] CardBG1 p-5 duration-500 rounded-lg CardBG-Profile shadow-lg grid grid-cols-3">
                    <div className="h-[70%] space-y-2">
                        <Card ClassName="h-[50%] bg-[#b0a7b6]"></Card>
                        <Card ClassName="h-[50%] bg-[#A89EAF]"></Card>
                    </div>
                    <Card ClassName="col-span-2 p-0 shadow-none w-[100%] h-[70%] overflow-clip">
                        <img src={Credit.src} alt="" className="rounded-md w-full"/>
                    </Card>
                    <div className="col-span-3 grid grid-cols-3 space-x-1 h-[30%]">
                        <Card ClassName="rounded-r-none h-full bg-[#fff]"></Card>
                        <Card ClassName="rounded-l-none rounded-r-none bg-[#fff]"></Card>
                        <Card ClassName="rounded-l-none bg-[#fff]"></Card>
                    </div>
                </div>
            </div>
            <div className="w-[95%] p-4">
                <div className="w-full text-[#fff] pb-3 CardBG1 p-6 rounded-lg duration-500 CardBG-Profile shadow-lg">
                    <div className="text-3xl font-bold tracking-widestp-5">
                        {/* <div className="ml-5 duration-500">Contacts</div> */}
                    </div>
                    <Contacts />
                </div>
            </div>
        </>
    );
}