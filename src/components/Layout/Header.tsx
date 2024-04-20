"use client";
import { useMenuState } from "@/hooks/useMenuState";
import Image from "next/image";
import NavMenu from "./NavMenu";
import {
    IconFacebook,
    IconMenu,
    IconInstagramRound,
    IconTwitterRound,
} from "../Svg//Index";
import Link from "next/link";

export default function Header() {
    const { isMenuOpen, openMenu } = useMenuState();

    return (
        <>
            <NavMenu />
            <header
                className={`grid grid-cols-3 items-center bg-amber-100 max-md:flex-wrap w-full z-50 shadow-lg header`}
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
                            className="lg:w-[126px] w-[80px]"
                        />
                    </Link>
                </div>
                <div className="flex justify-end pr-2 lg:pr-8 ">
                    <a onClick={!isMenuOpen ? openMenu : undefined}>
                        <IconMenu className="text-[var(--primary-foreground)] hover:text-[var(--accent-secondary)] lg:w-[37px] w-[30px]" />
                    </a>
                </div>
            </header>
        </>
    );
}
