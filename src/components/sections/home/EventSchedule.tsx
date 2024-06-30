import Container from "@/components/ui/Container";
import TimeTable from "@/components/ui/TimeTable";
import SpinningText from "@/components/ui/SpinningText";
import StickyContainer from "@/components/ui/StickyContainer";

export default function EventSchedule() {
    return (
        <Container className="mt-8 lg:mt-40" id="TableContainer">
            <div className="gap-x-8 grid xl:grid-cols-[minmax(480px,1fr)_2fr] grid-rows-[repeat(auto,2)] px-4 relative gap-y-20">
                <StickyContainer>
                    <div className="text-center xl:text-left space-y-16">
                        <div>
                            <h5 className="text-secondary-foreground">calendar</h5>
                            <h1 className="text-secondary-foreground">event schedule</h1>
                        </div>
                        <div className="xl:pl-12 flex max-xl:justify-center">
                            <SpinningText size="sm" />
                        </div>
                    </div>
                </StickyContainer>
                <TimeTable />
            </div>
        </Container>
    );
}
