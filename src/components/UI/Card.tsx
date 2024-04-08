import { PropsWithChildren } from "react";

interface cardProps extends PropsWithChildren {
    backgroundColor: string;
    className?: string;
}

export default function Card({ children, backgroundColor, className }: cardProps) {
    return (
        <div
            className={`w-full h-[1092px] rounded-[50px] ${backgroundColor}  shadow-2xl overflow-hidden relative ${className}`}
        >
            {children}
        </div>
    );
}
