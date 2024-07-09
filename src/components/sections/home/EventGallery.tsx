import Container from '@/components/ui/Container';
import ImageWithObserver from '@/components/ui/ImageWithObserver';
import Button from '@/components/ui/buttons/Button';
import GallerySlider from '@/components/ui/sliders/GallerySlider';
import SpinningText from '@/components/ui/SpinningText';

export default function EventGallery() {
	return (
		<>
			<Container className="mt-16 lg:mt-40">
				<ImageWithObserver
					src="/leaf-7.png"
					className="right-0 absolute top-20 h-[709px]"
					animation="translateX(200px)"
				/>
				<div className="grid lg:grid-cols-2 max-lg:grid-rows-2 gap-20 lg:gap">
					<div className="flex items-center justify-center order-2 lg:order-1">
						<SpinningText size="sm" />
					</div>
					<div className="lg:order-2">
						<div className="mx-auto gap-4 mb-8 w-4/5 space-y-8">
							<h5 className="text-secondary-foreground">
								Experience the Festival
							</h5>
							<h1 className="text-secondary-foreground">
								JOIN THE DANCE MUSIC REVOLUTION
							</h1>
							<p className="pr-20">
								Dive into an immersive experience with stunning
								visuals, breathtaking performances, and an
								atmosphere like no other. Our festival is more
								than just music; it{"'"}s a celebration of
								culture, community, and creativity. Browse
								through the gallery to catch a glimpse of the
								magic that awaits you.
							</p>

							<Button
								label="Buy Tickets"
								backgroundColor="var(--primary)"
								textColor="white"
								primary={true}
							/>
						</div>
					</div>
				</div>
			</Container>
			<section className="lg:py-40 py-20">
				<div className="overflow-hidden">
					<GallerySlider />
				</div>
			</section>
		</>
	);
}
