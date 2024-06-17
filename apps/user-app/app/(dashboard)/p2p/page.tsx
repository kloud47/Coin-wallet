import { SendCard } from "../../../components/SendCard";

export default function() {
    return <div className="w-full">
        <div className="text-4xl text-[#fff] pb-3 font-bold italic border-b-4 border-[#000]">
            <div className="hover:tracking-wider tracking-widest duration-500">P2P Transfer</div>
        </div>
        <SendCard />
    </div>
}