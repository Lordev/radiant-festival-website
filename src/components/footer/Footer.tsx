"use client";
import ButtonUnderlined from "../ui/ButtonUnderlined";
import { usePathname } from "next/navigation";
import { IconFacebook, IconTwitterRound, IconInstagramRound } from "../svg";
import { footerLinks } from "@/lib/data/links";

export default function Footer() {
    const pathName = usePathname();
    return (
        <footer className="relative">
            <video
                className="object-cover w-full h-full absolute inset-0 -z-10"
                autoPlay
                loop
                muted
            >
                <source src="noise-footer.mp4" type="video/mp4" />
            </video>
            <div className="w-1/2 mx-auto pt-40 z-0">
                <div className="lg:text-4xl font-medium text-foreground uppercase max-w-[490px] text-balance xl:text-start text-center sm:text-xl text-lg mx-auto xl:mx-0 font-krona-one">
                    Our music Festival is <br />
                    <span className="text-amber-200">the best of Europe</span>
                </div>
                <div className="flex xl:justify-between mt-20 xl:flex-row flex-col gap-16 text-center">
                    <ul className="flex xl:flex-row flex-col  gap-8 sm:gap-8 text-center">
                        {footerLinks.map((link) => (
                            <li key={link.text} className="mx-auto xl:mx-0">
                                <ButtonUnderlined
                                    key={link.text}
                                    active={pathName === link.url}
                                    label={link.text}
                                    link={link.url}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4 items-center justify-center xl:justify-start">
                        <a href="#">
                            <IconFacebook className="text-foreground hover:text-accent-tertiary lg:w-[21px] w-[22px] h-fit" />
                        </a>
                        <a href="#">
                            <IconTwitterRound className="text-foreground hover:text-accent lg:w-[20px] w-[20px] h-fit" />
                        </a>
                        <a href="#">
                            <IconInstagramRound className="text-foreground hover:text-accent-secondary lg:w-[24px] w-[25px] h-fit" />
                        </a>
                    </div>
                </div>
                <hr className="border-t-[1px] border-white mt-20" />
                <p className="pt-4 pb-16 text-center text-xs sm:text-sm">
                    Copyright by &copy; Musicfestival 2024
                </p>
            </div>
        </footer>
    );
}
