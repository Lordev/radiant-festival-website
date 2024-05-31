import { PropsWithChildren } from "react";

interface cardProps extends PropsWithChildren {
    backgroundColor: string;
    className?: string;
}

export default function Card({ children, backgroundColor, className }: cardProps) {
    return (
        <div
            className={`py-32 w-full md:aspect-[3/5] lg:aspect-auto xl:aspect-[3/5] 3xl:max-h-screen rounded-[50px] ${backgroundColor} shadow-2xl overflow-hidden relative ${className}`}
        >
            {children}
        </div>
    );
}
