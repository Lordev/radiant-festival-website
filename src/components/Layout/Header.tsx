"use client";
import { useMenuState } from "@/hooks/useMenuState";
import Image from "next/image";
import NavMenu from "./NavMenu";
import { IconFacebook, IconTwitter, IconInstagram, IconMenu } from "../Svg//Index";

export default function Header() {
    const { isMenuOpen, openMenu } = useMenuState();

    return (
        <>
            <NavMenu />
            <header>
                <div
                    className={`grid grid-cols-3 items-center bg-amber-100 max-md:flex-wrap max-md:px-5 fixed w-full z-50 shadow-lg px-14`}
                >
                    <div className="flex gap-2.5 items-center self-stretch my-auto">
                        <a href="#">
                            <IconFacebook className="text-[var(--primary-foreground)] hover:text-[var(--primary)]" />
                        </a>
                        <a href="#">
                            <IconTwitter className="text-[var(--primary-foreground)] hover:text-[var(--accent)]" />
                        </a>
                        <a href="#">
                            <IconInstagram className="text-[var(--primary-foreground)] hover:text-[var(--accent-secondary)]" />
                        </a>
                    </div>
                    <div className="justify-center grid">
                        <a href="/">
                            <Image
                                src={"/logo-company.png"}
                                width={126}
                                height={126}
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div className="grid justify-end">
                        <a onClick={!isMenuOpen ? openMenu : undefined}>
                            <IconMenu className="text-[var(--primary-foreground)] hover:text-[var(--accent-secondary)]" />
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}
