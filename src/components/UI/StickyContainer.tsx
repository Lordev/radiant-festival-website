import { PropsWithChildren, useEffect } from "react";

interface StickyContainerProps
    extends PropsWithChildren<{}>,
        React.HTMLProps<HTMLDivElement> {
    classNames?: string;
}

export default function StickyContainer({
    children,
    classNames = "",
    ...props
}: StickyContainerProps) {
    useEffect(() => {
        const handleScroll = () => {
            const stickyElement = document.getElementById("stickyElement");
            if (!stickyElement) return;
            const stickyTopOffset = stickyElement.offsetTop;
            const scrollPosition = window.scrollY;
            const stopPoint = stickyTopOffset + stickyElement.offsetHeight;

            if (scrollPosition >= stickyTopOffset && scrollPosition <= stopPoint) {
                stickyElement.classList.add("stuck");
            } else {
                stickyElement.classList.remove("stuck");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`sticky h-screen w-full ${classNames}`}
            id="stickyElement"
            {...props}
        >
            {children}
        </div>
    );
}
