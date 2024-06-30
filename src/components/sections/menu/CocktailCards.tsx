import Image from 'next/image';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/cards/Card';
import MenuCardItem from '@/components/ui/cards/MenuCardItem';

export default function CocktailCards() {
	return (
		<Container className="lg:mt-80 lg:mb-40 mt-20 mb-20">
			<div className="lg:grid lg:grid-cols-2 gap-8 lg:px-8 sm:px-32  min-h-[570px]:px-24">
				<Card
					backgroundColor="bg-card relative"
					className="h-full min-h-[590px]"
				>
					<div className="absolute left-1/2 -translate-x-1/2 z-20 top-1/2 -translate-y-1/2 w-[70%] xl:w-3/4 h-3/4">
						<Image
							src={'/compressed/menu-card-drinks.webp'}
							alt="drinking menu image"
							fill
							style={{
								objectFit: 'cover',
								borderRadius: '20px',
							}}
						/>
					</div>
					<div className="flex items-center absolute left-[4%] top-[5%] w-1/4 aspect-[1/1]">
						<div className="w-full h-full relative">
							<Image
								src={'/curve-text-sm.png'}
								alt="curve text"
								className="animate-spin-slow"
								fill
							/>
							<div className="absolute inset-[15%]">
								<Image
									src={'/ellipse-sm.png'}
									alt="ellipse"
									fill
								/>
							</div>
						</div>
					</div>
				</Card>
				<Card
					backgroundColor="bg-card-dark"
					className="flex items-center lg:mt-0 mt-20 "
				>
					<div className="m-auto gap-4 w-4/5">
						<div className="*:mb-4">
							<h5 className="text-foreground">The drinks</h5>
							<h1 className="text-foreground">Our Cocktails</h1>
						</div>
						<MenuCardItem
							title="Tropic Tequila"
							description="Refreshing blend of tequila, tropical fruits, and lime over ice."
							price={12}
						/>

						<MenuCardItem
							title="Fiesta Fusion"
							description="Tequila, mango, chili, and cilantro with a chili salt rim."
							price={14}
						/>

						<MenuCardItem
							title="Sunset Samba"
							description="Tequila, blood orange liqueur, grenadine, garnished with orange."
							price={13}
						/>

						<MenuCardItem
							title="Citrus Cinco"
							description="Tequila, triple sec, fresh citrus juices, salt rimmed glass."
							price={15}
						/>
					</div>
				</Card>
			</div>
		</Container>
	);
}
