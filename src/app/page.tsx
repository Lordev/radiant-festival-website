import {
	Hero,
	Artists,
	EventSchedule,
	Cards,
	Marketing,
	NewsletterSubscription,
} from '@/components/sections/home';
import dynamic from 'next/dynamic';
import InfiniteSlider from '@/components/ui/sliders/InfiniteSlider';
const ParallaxBanner = dynamic(
	() => import('@/components/sections/home/ParallaxBanner'),
	{
		ssr: false,
		loading: () => <section className="w-full h-[70vh]"></section>,
	}
);
const EventGallery = dynamic(
	() => import('@/components/sections/home/EventGallery'),
	{
		ssr: false,
		loading: () => <section className="w-full h-[709px]"></section>,
	}
);

export default function Home() {
	return (
		<main className="bg-gradient-to-b from-background via-accent-secondary to-background from-35% to-65% lg:from-45% lg:to-60% overflow-hidden xl:from-35%">
			<Hero />
			<InfiniteSlider />
			<Artists />
			<EventSchedule />
			<Cards />
			<Marketing />
			<NewsletterSubscription />
			<ParallaxBanner />
			<EventGallery />
			<InfiniteSlider />
		</main>
	);
}
