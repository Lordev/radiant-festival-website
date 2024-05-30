import {
    Hero,
    Artists,
    EventSchedule,
    Cards,
    Marketing,
    NewsletterSubscription,
    ParallaxBanner,
    EventGallery,
} from "@/components/sections/home";
import InfiniteSlider from "@/components/ui/InfiniteSlider";

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
