import { Icon } from "@iconify/react/dist/iconify.js";
import { useMenuState } from "@/app/hooks/useMenuState";
import { useEffect } from "react";

export default function Menu() {
    const { isMenuOpen, closeMenu } = useMenuState();

    useEffect(() => {
        isMenuOpen
            ? document.body.classList.add("overflow-hidden")
            : document.body.classList.remove("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isMenuOpen]);

    const menuLinks = [
        { text: "Home", url: "/" },
        { text: "Artists", url: "/artists" },
        { text: "Contact", url: "/contact" },
        { text: "Menu", url: "/menu" },
        { text: "Blog", url: "/blog" },
    ];

    return (
        <div
            className={`h-screen w-full bg-foreground ${isMenuOpen ? "visible flex justify-center items-center fixed inset-0 z-[99]" : "invisible hidden "}`}
        >
            {isMenuOpen ? (
                <>
                    <div>
                        <Icon
                            icon={"material-symbols:close"}
                            width={50}
                            height={50}
                            onClick={isMenuOpen ? closeMenu : undefined}
                            className="text-secondary-foreground  absolute right-14 top-10"
                        />
                    </div>
                    <ul className="space-y-4">
                        {menuLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.url}
                                    className="text-secondary-foreground hover:text-accent-secondary text-4xl"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                ""
            )}
        </div>
    );
}
