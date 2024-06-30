import { Icon, IconifyIcon } from "@iconify/react/dist/iconify.js";
import { InputHTMLAttributes, forwardRef, MouseEvent } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder: string;
    label?: string;
    icon?: string | IconifyIcon;
    iconSize?: "sm" | "lg";
    iconPosition?: "left" | "right";
    iconColor?: string;
    onButtonClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export default forwardRef(function Input(
    {
        type,
        placeholder,
        label,
        icon,
        iconSize,
        iconPosition,
        iconColor,
        onButtonClick,
        ...rest
    }: InputProps,
    ref: React.Ref<HTMLInputElement>
) {
    const indent = icon && !label && iconPosition === "left" ? "pl-12" : "";
    const sizeIcon = iconSize === "lg" ? 40 : 30;
    const IconPlace = () => {
        if (iconSize === "sm" && iconPosition === "left") {
            return "top-2 left-0";
        }
        if (iconSize === "lg" && iconPosition === "left") {
            {
                return "bottom-0 left-0";
            }
        }
    };

    return (
        <div className="relative">
            <input
                type={type}
                className={`appearance-none bg-transparent w-full text-gray-700 mr-3 py-2 focus:outline-none border-b-black border-b-[1px] placeholder:font-thin placeholder:text-black placeholder:opacity-20 custom-input font-[robot-serif] placeholder:text-sm  sm:placeholder:text-lg  ${indent}`}
                placeholder={placeholder}
                ref={ref}
                {...rest}
            />
            {icon && label ? (
                <a href="" onClick={onButtonClick}>
                    <div className="absolute top-0 right-0 grid grid-cols-[auto,_auto] items-center group gap-1 bg-background">
                        <Icon
                            icon={icon}
                            width={30}
                            className="text-secondary-foreground opacity-20 group-hover:text-accent-secondary 
                        group-hover:opacity-85 sm:w-[30px] w-[18px]"
                        />
                        <span className="text-xs sm:text-sm text-black opacity-20 group-hover:text-accent-secondary group-hover:opacity-85">
                            {label}
                        </span>
                    </div>
                </a>
            ) : icon && !label ? (
                <div
                    className={`absolute grid grid-cols-[auto,_auto] items-center group gap-1 ${IconPlace()}`}
                >
                    <Icon
                        icon={icon}
                        width={sizeIcon}
                        color={iconColor}
                        className={
                            iconColor
                                ? ""
                                : `text-secondary-foreground opacity-20 group-hover:text-accent-secondary 
                                group-hover:opacity-85`
                        }
                    />
                </div>
            ) : (
                ""
            )}
        </div>
    );
});
