import Container from '@/components/ui/Container';
import Card from '@/components/ui/cards/Card';
import InfiniteSlider from '@/components/ui/sliders/InfiniteSlider';
import Image from 'next/image';
import Button from '@/components/ui/buttons/Button';

export default function Cards() {
	return (
		<Container className="lg:mt-80 lg:mb-40 mt-20 mb-20">
			<div className="lg:grid lg:grid-cols-2 gap-8 lg:px-8 sm:px-32 xs:px-16 min-[570px]:px-24">
				<Card backgroundColor="bg-card h-full min-h-[590px]">
					<div className="-rotate-[20deg] z-20 absolute top-32 -mx-8">
						<InfiniteSlider />
					</div>
					<div className="rotate-[20deg]  absolute bottom-32 -mx-8">
						<InfiniteSlider />
					</div>
					<div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 w-3/4 h-3/4 ">
						<Image
							src={'/compressed/card-picture.webp'}
							alt="image of girl partying"
							fill
							style={{
								objectFit: 'cover',
								borderRadius: '20px',
							}}
						/>
					</div>
				</Card>
				<Card
					backgroundColor="bg-card-dark mt-20 lg:mt-0"
					className="flex items-center"
				>
					<div className="m-auto gap-4 space-y-8 w-4/5">
						<h5 className="text-foreground">Who We Are</h5>
						<h1 className="text-foreground">
							THE ULTIMATE DANCE MUSIC EXTRAVAGANZA
						</h1>
						<p className="text-foreground pr-20">
							Join us in Amsterdam for an unforgettable experience
							at the heart of the dance music scene. Our festival
							brings together the world{"'"}s top DJs, immersive
							light shows, and an electrifying atmosphere that you
							won
							{"'"}t want to miss. Whether you{"'"}re a dance
							music veteran or a newcomer, this event promises
							something extraordinary for everyone.
						</p>
						<Button
							label="Learn More"
							backgroundColor="var(--accent)"
							textColor="black"
							primary={true}
						/>
					</div>
				</Card>
			</div>
		</Container>
	);
}
