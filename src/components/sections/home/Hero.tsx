import Image from 'next/image';
import Container from '@/components/ui/Container';
import dynamic from 'next/dynamic';
import React from 'react';

const placeholder = [
	{
		key: 'days',
		label: 'days',
	},
	{
		key: 'hours',
		label: 'hours',
	},
	{
		key: 'minutes',
		label: 'minutes',
	},
	{
		key: 'seconds',
		label: 'seconds',
	},
];

const CountdownTimer = dynamic(() => import('@/components/ui/CountdownTimer'), {
	ssr: false,
	loading: () => (
		<div className="flex gap-2 sm:gap-6 flex-wrap justify-center">
			{placeholder.map(element => (
				<React.Fragment key={element.key}>
					<div>
						<div>
							<h3 className="text-lg sm:text-2xl lg:text-5xl font-semibold text-center text-white uppercase max-w-[362px] invisible">
								00
							</h3>
							<span>{element.label}</span>
						</div>
					</div>
					<div className="items-center flex text-lg sm:text-2xl lg:text-5xl font-semibold last:hidden">
						:
					</div>
				</React.Fragment>
			))}
		</div>
	),
});

export default function HeroSection() {
	return (
		<Container>
			<picture>
				<source
					media="(max-width: 480px)"
					srcSet="/hero-mobile@480w.jpg"
				/>
				<source
					media="(max-width: 1024px)"
					srcSet="/compressed/hero-tablet@1024w.webp"
				/>
				<source
					media="(max-width: 1600px)"
					srcSet="/compressed/hero@1600w.webp"
				/>
				<Image
					src={'/compressed/hero@2300w.webp'}
					fill
					alt="Hero=Image"
					style={{
						zIndex: 0,
						objectFit: 'cover',
					}}
				/>
			</picture>
			<div
				className={`items-center justify-center flex flex-col gap-20 md:gap-40 h-screen md:py-20 lg:py-40 text-balance *:z-10 font-krona-one lg:h-[calc(100vh-7rem)] h-[calc(100vh-5rem]`}
			>
				<div className="text-center text-yellow-400 uppercase max-w-[885px] lg:text-7xl sm:text-4xl text-xl -translate-[100%]">
					<span className="text-amber-100">This music Festival</span>{' '}
					<span className="text-amber-100">will</span>
					<span className="text-yellow-400"> be the Brightest</span>
				</div>
				<CountdownTimer
					endDate={new Date(process.env.NEXT_PUBLIC_DATE_EVENT)}
				/>

				<Image
					src="/scroll-icon.png"
					alt="scroll-icon"
					width={52}
					height={64}
					className="md:w-[52px] sm:w-[40px] w-[32px]"
				/>
			</div>
		</Container>
	);
}
