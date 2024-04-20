import { SVGProps } from "react";
const IconInstagram = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="none"
        viewBox="0 0 24 25"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 7.163a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-3 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
            clipRule="evenodd"
        />
        <path fill="currentColor" d="M18 5.163a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5 1.163a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-14a4 4 0 0 0-4-4H5Zm14 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2Z"
            clipRule="evenodd"
        />
    </svg>
);
export default IconInstagram;
