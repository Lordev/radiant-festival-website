'use client';
import './button.css';
import { ButtonHTMLAttributes, useState } from 'react';
import { cn } from '@/lib/utils/mergeClasses';
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
	size?: 'small' | 'medium' | 'large';
	/**
	 * Button contents
	 */

	label?: string;
	children?: React.ReactNode;
	/**
	 * Text color
	 */
	textColor?: string;

	className?: string;

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
	size = 'medium',
	backgroundColor,
	label = '',
	children,
	textColor,
	className,
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
			className={cn(`button p-6`, className)}
			{...props}
			style={{
				backgroundColor: primary
					? hovered
						? textColor
						: backgroundColor
					: '',
				color: hovered ? backgroundColor : textColor,
			}}
		>
			{children}
			{label}
		</button>
	);
}
