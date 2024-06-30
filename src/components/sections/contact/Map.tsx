import LeafletMap from "@/components/ui/LeafletMap";

export default function Map() {
    return (
        <section className="w-40rem pt-20 lg:pt-40">
            <div className="bg-foreground w-full h-[30rem]">
                <LeafletMap />
            </div>
        </section>
    );
}
