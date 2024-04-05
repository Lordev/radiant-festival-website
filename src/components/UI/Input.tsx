import Image from "next/image";

interface inputProps {
    type: string;
    placeholder: string;
}

export default function Input({ type, placeholder }: inputProps) {
    return (
        <>
            <input
                type={type}
                className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-2 focus:outline-none border-b-black border-b-[1px] text-lg placeholder:font-thin placeholder:text-black placeholder:opacity-20 custom-input font-sans "
                placeholder={placeholder}
            />
        </>
    );
}
