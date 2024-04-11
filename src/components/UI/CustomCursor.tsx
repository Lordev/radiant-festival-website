import React from "react";

const CustomCursor = () => {
    return (
        <div className="cursor-pointer relative">
            <div
                className="custom-cursor absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 transition-opacity duration-300"
                style={{
                    backgroundImage: "url('/mouse-drag.png')",
                    width: "32px",
                    height: "32px",
                }}
            ></div>
            <div
                className="hover-effect w-full h-full"
                onMouseEnter={() => {
                    const cursor = document.querySelector(
                        ".custom-cursor"
                    ) as HTMLElement;
                    cursor.style.opacity = "1";
                }}
                onMouseLeave={() => {
                    const cursor = document.querySelector(
                        ".custom-cursor"
                    ) as HTMLElement;
                    cursor.style.opacity = "0";
                }}
            ></div>
        </div>
    );
};

export default CustomCursor;
