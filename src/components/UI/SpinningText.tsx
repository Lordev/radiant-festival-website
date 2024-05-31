import Image from "next/image";

interface SpinningTextProps {
    size?: "lg" | "sm";
}

export default function SpinningText({ size = "lg" }: SpinningTextProps) {
    return (
        <>
            {size === "lg" ? (
                <div className="relative w-[35rem] ">
                    <Image
                        src={"/curve-text.png"}
                        alt="curve text"
                        width={616}
                        height={616}
                        className="mt-52 animate-spin-slow"
                    />
                    <Image
                        src={"/ellipse.png"}
                        alt="ellipse"
                        width={420}
                        height={420}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                </div>
            ) : size === "sm" ? (
                <div className="relative lg:w-[328px] w-[228px] aspect-square">
                    <Image
                        src={"/curve-text-sm.png"}
                        alt="curve text"
                        width={328}
                        height={238}
                        className="animate-spin-slow lg:w-[328px] w-[228px]"
                    />
                    <Image
                        src={"/ellipse-sm.png"}
                        alt="ellipse"
                        width={212}
                        height={212}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[212px] w-[142px]"
                    />
                </div>
            ) : (
                ""
            )}
        </>
    );
}
