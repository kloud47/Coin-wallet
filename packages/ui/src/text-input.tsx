"use client"

export const TextInput = ({
    placeholder,
    label,
    onChange,
    value
}: {
    placeholder: string;
    label: string;
    value: any;
    onChange: (value: string) => void;
}) => {
    return <div className="pt-2">
        <label className="block mb-2 text-sm font-medium">{label}</label>
        <input onChange={(e) => onChange(e.target.value)} value={value} type="text" id="first_name" className="bg-[#231b28] hover:bg-gradient-to-t from-[#493259] border-b border-gray-300  text-sm rounded-[40px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} />
    </div>
}