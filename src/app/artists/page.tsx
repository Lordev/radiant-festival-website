"use client";
import ArtistCard from "@/components/UI/ArtistCard";
import InfiniteSlider from "@/components/UI/InfiniteSlider";
import Container from "@/components/UI/Container";

export default function Home() {
    return (
        <div className="bg-gradient-to-b from-accent-secondary  to-background from-0% to-45% overflow-hidden">
            <div className="pt-64 text-center">
                <h2>Artists</h2>
            </div>
            <div className="rotate-3 mt-52 -mx-4">
                <InfiniteSlider />
            </div>
            <Container>
                <div className="grid  gap-y-40 gap-x-8 mx-auto my-80 lg:grid-cols-4 justify-center xs:grid-cols-2 px-2">
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
            <div className="-rotate-3 mt-40 -mx-4 mb-52">
                <InfiniteSlider />
            </div>
        </div>
    );
}
