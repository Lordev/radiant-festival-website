"use client";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import BannerSlider from "@/components/UI/BannerSlider";
import ArtistCard from "@/components/UI/ArtistCard";

export default function Home() {
    return (
        <div className="bg-gradient-to-b from-accent-secondary  to-background from-0% to-45% overflow-hidden">
            <Header />
            <div className="pt-64 text-center">
                <h2>Artists</h2>
            </div>
            <div className="rotate-3 mt-52 -mx-4">
                <BannerSlider />
            </div>
            <div className="grid grid-cols-4 gap-y-40 gap-x-8 w-4/5 mx-auto my-80">
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
            <div className="-rotate-3 mt-40 -mx-4 mb-52">
                <BannerSlider />
            </div>
            <Footer />
        </div>
    );
}
