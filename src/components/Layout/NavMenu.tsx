import { Icon } from "@iconify/react/dist/iconify.js";
import { useMenuState } from "@/hooks/useMenuState";
import { useEffect } from "react";
import Image from "next/image";
import { IconFacebook, IconTwitter, IconInstagram } from "../Svg//Index";

export default function NavMenu() {
    const { isMenuOpen, closeMenu } = useMenuState();

    useEffect(() => {
        const leafs = document.querySelectorAll(".menu-elements");

        if (isMenuOpen) {
            document.body.classList.add("overflow-hidden");
            document.body.classList.add("pr-[10px]");
        } else {
            leafs.forEach((item) => {
                item.classList.add("opacity-0");
                const delayScale = setTimeout(() => {
                    item.classList.add("scale-0");
                }, 500);
                return () => clearTimeout(delayScale);
            });
            const delayedMenu = setTimeout(() => {
                document.body.classList.remove("pr-[10px]");
                document.body.classList.remove("overflow-hidden");
            }, 1300);
            return () => {
                clearTimeout(delayedMenu);
            };
        }

        return () => {
            setTimeout(() => {
                document.body.classList.remove("overflow-hidden");
            }, 1300);
        };
    }, [isMenuOpen]);

    const menuLinks = [
        { text: "Home", url: "/" },
        { text: "Artists", url: "/artists" },
        { text: "Contact", url: "/contact" },
        { text: "Menu", url: "/menu" },
        { text: "Blog", url: "/blog" },
    ];

    const DELAY = 50;
    const DURATION = 300;
    const OPACITY = 100;
    return (
        <div
            className={`nav-menu h-screen w-full bg-foreground transition-all duration-300 fixed z-[99] 
             ${isMenuOpen ? "visible opacity-100 translate-y-0" : "opacity-0 -translate-y-[100vh] delay-1000"}`}
        >
            <div className="flex justify-center items-center h-full relative">
                <Icon
                    icon={"material-symbols:close"}
                    width={50}
                    height={50}
                    onClick={isMenuOpen ? closeMenu : undefined}
                    className="text-secondary-foreground  absolute right-14 top-10 opacity-100 z-50"
                />
                <div className="grid grid-cols-3 h-[75%] w-[75%] box-border border-2 border-secondary-foreground overflow-hidden">
                    <div className={`relative`}>
                        <Image
                            src="/forest.png"
                            className={`menu-elements absolute inset-0 duration-500 transition-all ${isMenuOpen ? "translate-x-[0]" : "-translate-x-[100%]"}`}
                            alt="Forest image"
                            fill={true}
                            objectFit="cover"
                            style={{
                                transition: `all ${DURATION}ms ${DELAY}ms`,
                                opacity: `${OPACITY}%`,
                            }}
                        />
                        <Image
                            src="/menu-leaf.png"
                            width={170}
                            height={341}
                            className={`menu-elements left-0 absolute bottom-1/2  ${isMenuOpen ? "translate-x-[0]" : "-translate-x-[100%]"}`}
                            alt="Forest image"
                            style={{
                                transition: `all ${DURATION}ms ${DELAY}ms`,
                                opacity: `${OPACITY}%`,
                            }}
                        />
                        <Image
                            src="/menu-leaf-2.png"
                            width={662}
                            height={332}
                            className={`menu-elements left-0 absolute bottom-0  ${isMenuOpen ? "translate-y-[0]" : "-translate-y-[-100%]"}`}
                            alt="Forest image"
                            style={{
                                transition: `all ${DURATION}ms ${DELAY}ms`,
                                opacity: `${OPACITY}%`,
                            }}
                        />
                        <Image
                            src="/menu-leaf-3.png"
                            width={694}
                            height={347}
                            className={`menu-elements left-0 absolute top-0  ${isMenuOpen ? "translate-y-[0]" : "-translate-y-[100%]"}`}
                            alt="Forest image"
                            style={{
                                transition: `all ${DURATION}ms ${DELAY}ms`,
                                opacity: `${OPACITY}%`,
                            }}
                        />
                    </div>
                    <div
                        className={`transition-opacity duration-300 justify-center items-center flex relative ${isMenuOpen ? "opacity-100" : "opacity-0 delay-500"}`}
                    >
                        <Image
                            src={"/logo-menu.png"}
                            className={`transition-all delay-500 duration-300 absolute ${isMenuOpen ? "opacity-100 -z-10" : "opacity-0"}`}
                            width={959}
                            height={967}
                            alt="big company logo"
                            aria-hidden
                        />

                        <div className="grid grid-cols-2 justify-center">
                            <div>
                                <div className="flex-col flex justify-center gap-5 items-center h-full">
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
                            </div>
                            <div className="border-l-[1px] border-secondary">
                                <ul className={`text-center ml-20 py-24`}>
                                    {menuLinks.map((link, index) => (
                                        <li key={index} className="mb-10">
                                            <a
                                                href={link.url}
                                                className="text-secondary-foreground hover:text-accent-secondary text-4xl uppercase"
                                            >
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            src="/forest-2.png"
                            className={`menu-elements right-0 absolute bottom-0 top-0 ${isMenuOpen ? "translate-x-[0]" : "translate-x-[100%]"}`}
                            alt="Forest image"
                            style={{
                                transition: `all ${DURATION}ms ${DELAY}ms`,
                                opacity: `${OPACITY}%`,
                            }}
                            fill={true}
                            objectFit="cover"
                        />
                        <Image
                            src="/menu-leaf-4.png"
                            width={707}
                            height={342}
                            className={`menu-elements right-0 absolute bottom-0 ${isMenuOpen ? "translate-y-[0]" : "translate-y-[100%]"}`}
                            alt="Forest image"
                            style={{
                                transition: `all ${DURATION}ms ${DELAY}ms`,
                                opacity: `${OPACITY}%`,
                            }}
                        />
                        <Image
                            src="/menu-leaf-5.png"
                            width={640}
                            height={352}
                            className={`menu-elements right-0 absolute top-0  ${isMenuOpen ? "translate-y-[0]" : "-translate-y-[100%]"}`}
                            alt="Forest image"
                            style={{
                                transition: `all ${DURATION}ms ${DELAY}ms`,
                                opacity: `${OPACITY}%`,
                            }}
                        />
                        <Image
                            src="/menu-leaf-6.png"
                            width={109}
                            height={341}
                            className={`menu-elements right-0 absolute bottom-1/2  ${isMenuOpen ? "translate-x-[0]" : "translate-x-[100%]"}`}
                            alt="Forest image"
                            style={{
                                transition: `all ${DURATION}ms ${DELAY}ms`,
                                opacity: `${OPACITY}%`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
