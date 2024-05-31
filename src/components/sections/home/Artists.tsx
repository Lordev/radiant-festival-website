import SliderArtists from "@/components/ui/sliders/ArtistSlider";
import Container from "@/components/ui/Container";
import ImageWithObserver from "@/components/ui/ImageWithObserver";
import PageDivider from "@/components/ui/PageDivider";

export default function Artists() {
    return (
        <Container>
            <ImageWithObserver
                src="/leaf-1.png"
                className="right-0 absolute top-4"
                animation="translateX(100%)"
                width={400}
                height={557}
            />
            <ImageWithObserver
                src="/leaf-2.png"
                className="left-0 absolute bottom-0"
                animation="translateX(-100%)"
                width={428}
                height={729}
            />
            <ImageWithObserver
                src="/leaf-5.png"
                className="left-0 top-4 absolute"
                animation="translateX(-100%)"
                width={176}
                height={396}
            />
            <ImageWithObserver
                src="/leaf-7.png"
                className="right-0 absolute bottom-0"
                animation="translateX(100%)"
                width={267}
                height={709}
            />
            <div className="flex flex-col lg:flex-row gap-8 justify-center py-60">
                <SliderArtists />
            </div>
            <PageDivider />
        </Container>
    );
}
