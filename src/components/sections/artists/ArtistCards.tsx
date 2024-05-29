import Container from "@/components/ui/Container";
import ArtistCard from "@/components/ui/ArtistCard";
import { ArtistCardsData } from "@/lib/data/artistCardsData";

export default function ArtistCards() {
    return (
        <Container className="my-40 lg:my-80">
            <div className="grid gap-y-20 lg:gap-y-40 gap-x-8 mx-auto  lg:grid-cols-4 justify-center xs:grid-cols-2 px-2">
                {ArtistCardsData.map((artist) => {
                    const { artistName } = artist;
                    return <ArtistCard key={artistName} {...artist} />;
                })}
            </div>
        </Container>
    );
}
