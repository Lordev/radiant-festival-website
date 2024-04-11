import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface SvgIconProps extends ImageProps {
    hoverColor?: string;
}

export default function SvgIcon({ hoverColor, ...ImageProps }: SvgIconProps) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };
    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        // eslint-disable-next-line
        <Image
            {...ImageProps}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                color: hovered ? hoverColor : "",
            }}
        />
    );
}
