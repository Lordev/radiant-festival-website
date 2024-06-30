"use client";
import { useEffect, useState, useRef, PropsWithChildren } from "react";

export default function HeaderContainer({ children }: PropsWithChildren) {
    const [sticky, setSticky] = useState(false);
    const [direction, setDirection] = useState("up");
    const headerRef = useRef<HTMLDivElement>(null);
    const [prevScroll, setPrevScroll] = useState(0);
    const [currentScroll, setCurrentScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setCurrentScroll(scrollY);
            if (currentScroll > prevScroll) {
                setDirection("down");
            } else {
                setDirection("up");
            }
        };
        setPrevScroll(window.scrollY);

        if (headerRef.current) {
            const headerHeight = headerRef.current.clientHeight;
            if (window.scrollY > headerHeight) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentScroll]); //eslint-disable-line

    return (
        <div className="min-h-20 lg:min-h-28">
            <header
                className={`grid grid-cols-3 items-center bg-amber-100 max-md:flex-wrap w-full z-40 shadow-lg header transition-all duration-300 ease-in-out min-h-20  lg:min-h-28 ${!sticky ? "block" : "fixed"} ${sticky && direction === "up" && "top-0"} ${sticky && direction === "down" && " top-[-100%]"}`}
                ref={headerRef}
            >
                {children}
            </header>
        </div>
    );
}
