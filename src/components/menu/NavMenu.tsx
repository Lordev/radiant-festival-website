"use client";
import { useMenuState } from "@/lib/hooks/useMenuState";
import { useEffect } from "react";
import Image from "next/image";
import { IconFacebook, IconTwitterRound, IconInstagramRound, IconClose } from "../svg";
import useBreakpointsStore from "@/lib/store/useBreakpointStore";
import { usePathname } from "next/navigation";
import NavMenuItem from "./NavMenuItem";
import { menuLinks } from "@/lib/data/links";

export default function NavMenu() {
    const { isMenuOpen, closeMenu } = useMenuState();
    const { smallMobile, mobile, tablet, initializeBreakpoints } = useBreakpointsStore();

    const pathName = usePathname();

    useEffect(() => {
        const cleanup = initializeBreakpoints();
        return () => cleanup();
    }, [initializeBreakpoints]);

    useEffect(() => {
        const leafs = document.querySelectorAll(".menu-elements");

        if (isMenuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            leafs.forEach((item) => {
                item.classList.add("opacity-0");
                const delayScale = setTimeout(() => {
                    item.classList.add("scale-0");
                }, 500);
                return () => clearTimeout(delayScale);
            });
            const delayOverflow = setTimeout(
                () => {
                    document.body.classList.remove("overflow-hidden");
                },
                1000 //menu animation transitioning out is 1000ms (check <nav)
            );

            return () => {
                clearTimeout(delayOverflow);
            };
        }

        return () => {};
    }, [isMenuOpen]);

    const DELAY = 50;
    const DURATION = 300;
    const OPACITY = 100;

    return (
        <nav
            className={`nav-menu h-screen w-full bg-foreground transition-all duration-300 z-50 fixed   
            ${isMenuOpen ? "visible opacity-100 translate-y-0" : "opacity-0 -translate-y-[100%] delay-1000"}`}
        >
            <div className="flex justify-center items-center h-full relative">
                <IconClose
                    width={50}
                    height={50}
                    onClick={isMenuOpen ? closeMenu : undefined}
                    className="text-secondary-foreground  absolute  right-0 top-4 lg:right-7 lg:top-10 opacity-100 z-50 w-[45px] lg:w-[50px] cursor-pointer"
                />
                <div className="grid xl:grid-cols-3 w-full h-[75%] xl:w-[75%] box-border border-2 border-secondary-foreground overflow-hidden lg:grid-cols-[minmax(0,1fr)_10rem_minmax(0,1fr)] lg:grid-rows-none grid-rows-3">
                    <div className={`relative`}>
                        {!smallMobile && !mobile && !tablet ? (
                            <>
                                <Image
                                    src="/forest.png"
                                    className={`menu-elements absolute inset-0 duration-500 transition-all ${isMenuOpen ? "translate-x-[0%]" : "-translate-x-[100%]"}`}
                                    alt="Forest image"
                                    fill={true}
                                    style={{
                                        transition: `all ${DURATION}ms ${DELAY}ms`,
                                        opacity: `${OPACITY}%`,
                                        objectFit: "cover",
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
                            </>
                        ) : (
                            <>
                                <Image
                                    src="/mobile-leaf-top-1.png"
                                    width={1024}
                                    height={328}
                                    className={`menu-elements left-0 absolute top-0 right-0 ${isMenuOpen ? "translate-y-[0]" : "-translate-y-[100%]"}`}
                                    alt="Forest image"
                                    style={{
                                        transition: `all ${DURATION}ms ${DELAY}ms`,
                                        opacity: `${OPACITY}%`,
                                    }}
                                />
                                <Image
                                    src="/mobile-leaf-top-2.png"
                                    width={104}
                                    height={190}
                                    className={`menu-elements left-0 absolute top-0 w-16 xs:w-[104px] ${isMenuOpen ? "translate-x-[0]" : "-translate-x-[100%]"}`}
                                    alt="Forest image"
                                    style={{
                                        transition: `all ${DURATION}ms ${DELAY}ms`,
                                        opacity: `${OPACITY}%`,
                                    }}
                                />
                                <Image
                                    src="/mobile-leaf-top-3.png"
                                    width={136}
                                    height={246}
                                    className={`menu-elements right-0 absolute top-0 xs:w-[136px] xs:-top-20 w-16  ${isMenuOpen ? "translate-x-[0]" : "-translate-x-[-100%]"}`}
                                    alt="Forest image"
                                    style={{
                                        transition: `all ${DURATION}ms ${DELAY}ms`,
                                        opacity: `${OPACITY}%`,
                                    }}
                                />
                                <Image
                                    src="/mobile-leaf-top-4.png"
                                    width={128}
                                    height={53}
                                    className={`menu-elements right-1/2 absolute top-0 xs:w-[128px] w-16 ${isMenuOpen ? "translate-y-[0]" : "-translate-y-[100%]"}`}
                                    alt="Forest image"
                                    style={{
                                        transition: `all ${DURATION}ms ${DELAY}ms`,
                                        opacity: `${OPACITY}%`,
                                    }}
                                />
                            </>
                        )}
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

                        <div className="grid grid-cols-2 items-center">
                            <div>
                                <div className="flex-col flex justify-center gap-2 lg:gap-8 items-center h-full mr-16">
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
                            </div>
                            <div className="border-l-[1px] border-secondary">
                                <ul
                                    className={`lg:ml-4 ml-0 2xl:ml-20 lg:py-24 text-center lg:text-start grid gap-4  lg:gap-16`}
                                >
                                    {menuLinks.map((link, index) => (
                                        <li key={index} className="lg:pt-0">
                                            <NavMenuItem
                                                active={pathName === link.url}
                                                href={link.url}
                                                onClick={
                                                    isMenuOpen ? closeMenu : undefined
                                                }
                                            >
                                                {link.text}
                                            </NavMenuItem>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        {!smallMobile && !mobile && !tablet ? (
                            <>
                                {" "}
                                <Image
                                    src="/forest-2.png"
                                    className={`menu-elements right-0 absolute bottom-0 top-0 ${isMenuOpen ? "translate-x-[0]" : "translate-x-[100%]"}`}
                                    alt="Forest image"
                                    style={{
                                        transition: `all ${DURATION}ms ${DELAY}ms`,
                                        opacity: `${OPACITY}%`,
                                        objectFit: "cover",
                                    }}
                                    fill={true}
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
                            </>
                        ) : (
                            <>
                                <Image
                                    src="/mobile-leaf-bottom-1.png"
                                    width={1024}
                                    height={328}
                                    className={`menu-elements left-0 absolute bottom-0 right-0  ${isMenuOpen ? "translate-y-[0]" : "translate-y-[100%]"}`}
                                    alt="Forest image"
                                    style={{
                                        transition: `all ${DURATION}ms ${DELAY}ms`,
                                        opacity: `${OPACITY}%`,
                                    }}
                                />
                                <Image
                                    src="/mobile-leaf-bottom-2.png"
                                    width={135}
                                    height={190}
                                    className={`menu-elements left-0 absolute bottom-0  w-16 xs:w-[135px] ${isMenuOpen ? "translate-x-[0]" : "-translate-x-[100%]"}`}
                                    alt="Forest image"
                                    style={{
                                        transition: `all ${DURATION}ms ${DELAY}ms`,
                                        opacity: `${OPACITY}%`,
                                    }}
                                />
                                <Image
                                    src="/mobile-leaf-bottom-3.png"
                                    width={164}
                                    height={205}
                                    className={`menu-elements right-0 absolute bottom-0  w-16 xs:w-[164px]  ${isMenuOpen ? "translate-x-[20%]" : "-translate-x-[-100%]"}`}
                                    alt="Forest image"
                                    style={{
                                        transition: `all ${DURATION}ms ${DELAY}ms`,
                                        opacity: `${OPACITY}%`,
                                    }}
                                />
                                <Image
                                    src="/mobile-leaf-bottom-4.png"
                                    width={129}
                                    height={18}
                                    className={`menu-elements right-1/2 absolute bottom-0  w-16 xs:w-[129px]  ${isMenuOpen ? "translate-y-[0]" : "-translate-y-[-100%]"}`}
                                    alt="Forest image"
                                    style={{
                                        transition: `all ${DURATION}ms ${DELAY}ms`,
                                        opacity: `${OPACITY}%`,
                                    }}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
