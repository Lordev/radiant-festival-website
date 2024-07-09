import Marquee from 'react-fast-marquee';

export default function InfiniteSlider() {
	return (
		<Marquee
			gradient={false}
			speed={40}
			autoFill
			className=" py-1 overflow-hidden h-full min-[280px]:block font-krona-one text-2xl text-primary uppercase tracking-wide bg-white "
		>
			<span className="mx-4">
				Get your tickets before it{"'"}s too late -{' '}
			</span>
		</Marquee>
	);
}
