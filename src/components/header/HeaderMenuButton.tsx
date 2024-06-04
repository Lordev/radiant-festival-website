"use client";
import { IconMenu } from "../svg";
import { useMenuState } from "../../lib/hooks/useMenuState";

export default function HeaderMenuButton() {
    const { isMenuOpen, openMenu } = useMenuState();
    return (
        <div className="flex justify-end pr-2 lg:pr-8 cursor-pointer">
            <a onClick={!isMenuOpen ? openMenu : undefined}>
                <IconMenu className="text-[var(--primary-foreground)] hover:text-[var(--accent-secondary)] lg:w-[37px] w-[30px] max-sm:w-7 " />
            </a>
        </div>
    );
}
