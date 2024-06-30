import React from "react";
import type { SVGProps } from "react";

export default function IconShoppingCart(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            {...props}
        >
            <g fill="none">
                <path fill="currentColor" d="M39 32H13L8 12h36z"></path>
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"
                ></path>
                <circle
                    cx={13}
                    cy={39}
                    r={3}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                ></circle>
                <circle
                    cx={39}
                    cy={39}
                    r={3}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                ></circle>
            </g>
        </svg>
    );
}
