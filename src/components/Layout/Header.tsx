import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Header() {
    return (
        <div className="grid grid-cols-3 items-center px-12 bg-amber-100 max-md:flex-wrap max-md:px-5 fixed w-full z-50 shadow-lg">
            <div className="flex gap-2.5 items-center self-stretch my-auto">
                <a href="#">
                    <Icon
                        icon="ic:baseline-facebook"
                        width={40}
                        className="text-secondary-foreground hover:text-primary"
                    />
                </a>
                <a href="#">
                    <Icon
                        icon="mdi:youtube"
                        width={40}
                        className="text-secondary-foreground hover:text-primary"
                    />
                </a>
                <a href="#">
                    <Icon
                        icon="mdi:instagram"
                        width={40}
                        className="text-secondary-foreground hover:text-primary"
                    />
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
                <a href="#">
                    <Icon
                        icon="material-symbols:menu"
                        width={40}
                        className="text-secondary-foreground hover:text-primary"
                    />
                </a>
            </div>
        </div>
    );
}
