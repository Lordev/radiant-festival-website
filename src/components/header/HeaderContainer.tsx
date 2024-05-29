"use client";
import { useEffect, useState, useRef, PropsWithChildren } from "react";

export default function HeaderContainer({ children }: PropsWithChildren) {
    const [sticky, setSticky] = useState(false);
    const [direction, setDirection] = useState("up");
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerHeight, setHeaderHeight] = useState(0);
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
            setHeaderHeight(headerRef.current.offsetHeight);
        }
        setSticky(currentScroll > headerHeight);

        // Initial calculations

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentScroll]); // Empty dependency array to run the effect only once on mount

    return (
        <div
            style={{
                height: headerHeight + "px",
            }}
        >
            <header
                className={`grid grid-cols-3 items-center bg-amber-100 max-md:flex-wrap w-full z-40 shadow-lg header transition-all duration-300 ease-in-out  ${!sticky ? "block" : "fixed"} ${sticky && direction === "up" && "top-0"} ${sticky && direction === "down" && " top-[-100%]"}`}
                ref={headerRef}
            >
                {children}
            </header>
        </div>
    );
}
