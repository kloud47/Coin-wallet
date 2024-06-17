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
        <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
        <input onChange={(e) => onChange(e.target.value)} value={value} type="text" id="first_name" className="hover:bg-gradient-to-r from-[#bfffef] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} />
    </div>
}