import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import AllContact from "../../../../components/Contacts/AllContact";
import CreateSplitForm from "../../../../components/CreateSplitForm";

export default function CreateSplit () {
    return (
        <div className="flex flex-col w-[90%] font-Roboto CardBG-Profile rounded-xl p-4">
            <div className="text-3xl font-bold tracking-widest p-5">
                <div className="font-Roboto text-[#B7ACBF]">Split</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-x-2">
                <Card ClassName=" text-[#fff]">
                    <div className="w-full p-4">
                        <div className="flex mb-2">
                            <input type="text" placeholder="Search for contacts" className="rounded-lg bg-[#aaa1af] placeholder:text-[#000] w-[50%] p-2 mx-2 focus:outline-none focus:border-b-[3px] focus:border-b-[#9959C6]"/>
                        </div>
                        <AllContact />
                    </div>
                </Card>
                <Card title="fill details" ClassName="bg-[#8e759d] text-[#e8e2f2] lg:mt-0 mt-2">
                    <CreateSplitForm />
                </Card>
            </div>
        </div>
    )
}