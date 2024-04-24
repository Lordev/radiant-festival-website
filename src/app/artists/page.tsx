"use client";
import ArtistCard from "@/components/UI/ArtistCard";
import InfiniteSlider from "@/components/UI/InfiniteSlider";
import Container from "@/components/UI/Container";
import Title from "@/components/UI/Title";

export default function Artists() {
    return (
        <main className="bg-gradient-to-b from-accent-secondary  to-background from-0% to-45% overflow-hidden">
            <Title title="Artists" />
            <section className="rotate-3 mt-40 lg:mt-52 -mx-4">
                <InfiniteSlider />
            </section>
            <Container className="my-40 lg:my-80">
                <div className="grid gap-y-20 lg:gap-y-40 gap-x-8 mx-auto  lg:grid-cols-4 justify-center xs:grid-cols-2 px-2">
                    <ArtistCard
                        artistName="David Greene"
                        role="Musician"
                        igUrl="#"
                        imageUrl="/image-artist-1.png"
                        twitterUrl="#"
                    />
                    <ArtistCard
                        artistName="David Greene"
                        role="Musician"
                        igUrl="#"
                        imageUrl="/image-artist-2.png"
                        twitterUrl="#"
                    />
                    <ArtistCard
                        artistName="David Greene"
                        role="Musician"
                        igUrl="#"
                        imageUrl="/image-artist-3.png"
                        twitterUrl="#"
                    />
                    <ArtistCard
                        artistName="David Greene"
                        role="Musician"
                        igUrl="#"
                        imageUrl="/image-artist-4.png"
                        twitterUrl="#"
                    />
                    <ArtistCard
                        artistName="David Greene"
                        role="Musician"
                        igUrl="#"
                        imageUrl="/image-artist-5.png"
                        twitterUrl="#"
                    />
                    <ArtistCard
                        artistName="David Greene"
                        role="Musician"
                        igUrl="#"
                        imageUrl="/image-artist-6.png"
                        twitterUrl="#"
                    />
                    <ArtistCard
                        artistName="David Greene"
                        role="Musician"
                        igUrl="#"
                        imageUrl="/image-artist-7.png"
                        twitterUrl="#"
                    />
                    <ArtistCard
                        artistName="David Greene"
                        role="Musician"
                        igUrl="#"
                        imageUrl="/image-artist-8.png"
                        twitterUrl="#"
                    />
                </div>
            </Container>
            <section className="-rotate-3 mt-40 lg:mt-52 -mx-4 lg:mb-52 mb-40">
                <InfiniteSlider />
            </section>
        </main>
    );
}
