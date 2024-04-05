import "./button.css";

interface ButtonProps {
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
export const Button = ({
    primary = false,
    size = "medium",
    backgroundColor,
    label,
    textColor,
    ...props
}: ButtonProps) => {
    const mode = primary ? "button--primary" : "button--secondary";
    return (
        <button
            type="button"
            className={`button button--${size} bg- ${backgroundColor} text-${textColor} hover:bg-${textColor} hover:text-${backgroundColor} ${mode}`}
            {...props}
        >
            {label}
        </button>
    );
};
