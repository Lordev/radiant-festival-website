import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import InfiniteSlider from "@/components/ui/InfiniteSlider";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Cards() {
    return (
        <Container className="lg:mt-80 lg:mb-40 mt-20 mb-20">
            <div className="lg:grid lg:grid-cols-2 gap-8 lg:px-8 sm:px-32 xs:px-16 min-[570px]:px-24">
                <Card backgroundColor="bg-card h-full min-h-[590px]">
                    <div className="-rotate-[20deg] z-20 absolute sm:-left-40 -left-6 max-w-[2200px] 4xl:top-[40px] 3xl:top-[36px] xl:top-[-20px] lg:top-[-50px] md:top-[20%] xs:top-[20%] top-[15%]">
                        <InfiniteSlider />
                    </div>
                    <div className="rotate-[20deg]  absolute sm:-left-40 -left-24 max-w-[2200px] 4xl:bottom-[40px] 3xl:bottom-[36px] mx-16 xl:bottom-[-20px] lg:bottom-[-50px] md:bottom-[20%] xs:bottom-[20%] bottom-[15%]">
                        <InfiniteSlider />
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 w-3/4 h-3/4 ">
                        <Image
                            src={"/card-picture.png"}
                            alt="image of girl partying"
                            fill
                            style={{
                                objectFit: "cover",
                                borderRadius: "20px",
                            }}
                        />
                    </div>
                </Card>
                <Card
                    backgroundColor="bg-card-dark mt-20 lg:mt-0"
                    className="flex items-center"
                >
                    <div className="m-auto gap-4 *:mb-8 w-4/5">
                        <h5 className="text-foreground">Who we are</h5>
                        <h1 className="text-foreground">
                            THE BIGGEST, MOST IMPORTANT DANCE MUSIC FESTIVAL ON THE PLANET
                        </h1>
                        <p className="text-foreground pr-20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate
                        </p>
                        <Button
                            label="Click me"
                            backgroundColor="var(--accent)"
                            textColor="black"
                            primary={true}
                        />
                    </div>
                </Card>
            </div>
        </Container>
    );
}
