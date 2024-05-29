import Image from "next/image";
import { IconFacebook, IconInstagramRound, IconTwitterRound } from "../svg";
import Link from "next/link";
import HeaderMenuButton from "./HeaderMenuButton";

export default function HeaderMenu() {
    return (
        <>
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
            <HeaderMenuButton />
        </>
    );
}
