'use client';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils/mergeClasses';

interface ButtonUnderlinedProps {
	label: string;
	link: string;
	active?: boolean;
	className?: string;
}

export default function ButtonUnderlined({
	link,
	active,
	label,
	className,
}: ButtonUnderlinedProps) {
	const [hovered, setHovered] = useState(false);

	const handleHoverEnter = () => {
		return setHovered(true);
	};
	const handleHoverLeave = () => {
		return setHovered(false);
	};

	return (
		<div className="w-fit">
			<Link
				onMouseEnter={handleHoverEnter}
				onMouseLeave={handleHoverLeave}
				href={link}
				className={cn(
					`sm:text-sm text-xs font-kumbh-sans font-semibold uppercase ${
						hovered || active ? 'text-white' : 'text-white/50'
					}`,
					className
				)}
			>
				{label}
			</Link>
			<div
				className={`h-[1px] w-full relative before:bg-white before:inset-0 before:absolute before:transition-left before:duration-700  before:z-10 mt-0.5 before:left-0 ${
					hovered || active ? 'before:right-0' : 'before:right-[100%]'
				}`}
			></div>
		</div>
	);
}
