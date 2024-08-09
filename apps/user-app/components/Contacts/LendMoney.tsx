import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";

export default function () {
    return (
        <Card ClassName="w-[80%] flex justify-center bg-[#231B28]">
            <form action="" className="w-[70%] flex flex-col">
                <label htmlFor="" className="block text-[#828282]">Amount</label>
                <input type="number" className="w-full bg-[#493a52] rounded-full p-1 focus:outline-none focus:border-b focus:border-[#35AAB9]"/>
                <label htmlFor="" className="block text-[#828282]">Duration</label>
                <input type="date" className="w-full bg-[#493a52] rounded-full p-1 focus:outline-none focus:border-b focus:border-[#35AAB9]"/>
                <Button  className={"mt-[40px] mx-auto mb-[10px] border-2 w-[70%] border-[#35aab9] hover:bg-[#35aab9] hover:text-[#fff] text-[#35aab9]"}>Lend Money</Button>
            </form>
        </Card>
    );
}