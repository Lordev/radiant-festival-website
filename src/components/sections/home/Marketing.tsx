import Container from "@/components/ui/Container";
import ImageWithObserver from "@/components/ui/ImageWithObserver";
import VideoPopUpPlayer from "@/components/ui/modal/VideoPopupPlayer";
import Ticket from "@/components/ui/Ticket";

export default function Marketing() {
    return (
        <Container className="mt-20 lg:mt-80 pb-80">
            <ImageWithObserver
                src="/leaf-6.png"
                width={278}
                height={747}
                className="left-0 absolute bottom-0"
                animation="translateX(-100%)"
            />
            <ImageWithObserver
                src="/leaf-4.png"
                className="right-0 absolute bottom-0 h-[468px] z-10"
                animation="translateX(100%)"
                width={208}
                height={468}
            />
            <div className="grid lg:grid-cols-2 lg:grid-rows-none grid-rows-2 gap-20">
                <Ticket />
                <VideoPopUpPlayer />
            </div>
        </Container>
    );
}
