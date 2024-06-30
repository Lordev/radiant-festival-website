import React from "react";
import type { SVGProps } from "react";

export default function IconMobile(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 15 15"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zM4.5 1A1.5 1.5 0 0 0 3 2.5v10A1.5 1.5 0 0 0 4.5 14h6a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 10.5 1zM6 11.65a.35.35 0 1 0 0 .7h3a.35.35 0 1 0 0-.7z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
