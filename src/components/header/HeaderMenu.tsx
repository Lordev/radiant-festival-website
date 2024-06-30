import Image from "next/image";
import { IconFacebook, IconInstagramRound, IconTwitterRound } from "../svg";
import Link from "next/link";
import HeaderMenuButton from "./HeaderMenuButton";
import ShoppingCartButton from "./ShoppingCartButton";

export default function HeaderMenu() {
    return (
        <>
            <div className="flex flex-wrap gap-2.5 items-center my-auto pl-2 lg:pl-8">
                <a href="#">
                    <IconFacebook className="text-primary-foreground hover:text-accent-tertiary lg:w-9 w-6" />
                </a>
                <a href="#">
                    <IconTwitterRound className="text-primary-foreground hover:text-accent lg:w-9 w-6" />
                </a>
                <a href="#">
                    <IconInstagramRound className="text-primary-foreground hover:text-accent-secondary lg:w-10 w-6" />
                </a>
            </div>
            <div className="justify-center flex">
                <Link href="/">
                    <Image
                        src={"/logo-company.png"}
                        width={126}
                        height={126}
                        alt="logo"
                        className="w-16 h-fit lg:w-[126px] lg:h-[126px]"
                    />
                </Link>
            </div>
            <div className="flex items-center justify-end gap-x-4">
                <ShoppingCartButton />
                <HeaderMenuButton />
            </div>
        </>
    );
}
