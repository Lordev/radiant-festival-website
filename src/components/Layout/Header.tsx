"use client";
import { useMenuState } from "@/hooks/useMenuState";
import Image from "next/image";
import {
    IconFacebook,
    IconMenu,
    IconInstagramRound,
    IconTwitterRound,
} from "../Svg//Index";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Header() {
    const { isMenuOpen, openMenu } = useMenuState();
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
                <div className="flex flex-wrap gap-2.5 items-center my-auto pl-2 lg:pl-8">
                    <a href="#">
                        <IconFacebook className="text-primary-foreground hover:text-accent-tertiary lg:w-[44px] w-[22px]" />
                    </a>
                    <a href="#">
                        <IconTwitterRound className="text-primary-foreground hover:text-accent lg:w-[44px] w-[22px]" />
                    </a>
                    <a href="#">
                        <IconInstagramRound className="text-primary-foreground hover:text-accent-secondary lg:w-[48px] w-[25px]" />
                    </a>
                </div>
                <div className="justify-center flex">
                    <Link href="/">
                        <Image
                            src={"/logo-company.png"}
                            width={126}
                            height={126}
                            alt="logo"
                            className="w-[80px] h-fit lg:w-[126px] lg:h-[126px]"
                        />
                    </Link>
                </div>
                <div className="flex justify-end pr-2 lg:pr-8 cursor-pointer">
                    <a onClick={!isMenuOpen ? openMenu : undefined}>
                        <IconMenu className="text-[var(--primary-foreground)] hover:text-[var(--accent-secondary)] lg:w-[37px] w-[30px]" />
                    </a>
                </div>
            </header>
        </div>
    );
}
