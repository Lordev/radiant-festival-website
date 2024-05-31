import ArtistCards from "@/components/sections/artists/ArtistCards";
import InfiniteSlider from "@/components/ui/sliders/InfiniteSlider";
import Title from "@/components/ui/Title";

export default function Artists() {
    return (
        <main className="bg-gradient-to-b from-accent-secondary  to-background from-0% to-45% overflow-hidden">
            <Title title="Artists" />
            <section className="rotate-3 mt-40 lg:mt-52 -mx-4">
                <InfiniteSlider />
            </section>
            <ArtistCards />
            <section className="-rotate-3 mt-40 lg:mt-52 -mx-4 lg:mb-52 mb-40">
                <InfiniteSlider />
            </section>
        </main>
    );
}
