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

    const mode = primary ? "button--primary" : "button--secondary";
    const bgColor = hovered ? textColor : backgroundColor;
    const txtColor = hovered ? backgroundColor : textColor;

    return (
        <button
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
            type="button"
            className={`button button--${size} ${mode}`}
            {...props}
            style={{
                backgroundColor: bgColor,
                color: txtColor,
            }}
        >
            {label}
        </button>
    );
}
