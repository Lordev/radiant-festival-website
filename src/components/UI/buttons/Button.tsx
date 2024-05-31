"use client";
import "./button.css";
import { ButtonHTMLAttributes, useState } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Text color
     */
    textColor?: string;

    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export default function Button({
    primary = false,
    size = "medium",
    backgroundColor,
    label,
    textColor,
    ...props
}: ButtonProps) {
    const [hovered, setHovered] = useState(false);

    const handleHoverEnter = () => {
        setHovered(true);
    };

    const handleHoverLeave = () => {
        setHovered(false);
    };

    return (
        <button
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
            type="button"
            className={`button button--${size}`}
            {...props}
            style={{
                backgroundColor: primary ? (hovered ? textColor : backgroundColor) : "",
                color: hovered ? backgroundColor : textColor,
            }}
        >
            {label}
        </button>
    );
}
