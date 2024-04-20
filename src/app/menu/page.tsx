"use client";
import Image from "next/image";
import Card from "@/components/UI/Card";
import MenuCardItem from "@/components/UI/MenuCardItem";
import AnimatedImage from "@/components/UI/ImageWithObserver";
import Container from "@/components/UI/Container";

export default function Home() {
    return (
        <div className="bg-gradient-to-b from-background via-accent-secondary to-background from-10% via-50% to-90% overflow-hidden">
            <div className="pt-64 text-center">
                <h2>Menu</h2>
            </div>
            <Container>
                <div className="lg:grid lg:grid-cols-2 gap-8 lg:px-8 sm:px-32 xs:px-16 min-[570px]:px-24 px-8 mt-80 mb-40 ">
                    <Card
                        backgroundColor="bg-card relative"
                        className="h-full min-h-[590px]"
                    >
                        <div className="absolute left-1/2 -translate-x-1/2 z-20 top-1/2 -translate-y-1/2 w-[70%] xl:w-3/4 h-3/4">
                            <Image
                                src={"/menu-card-1.png"}
                                alt="drinking menu image"
                                fill
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "20px",
                                }}
                            />
                        </div>
                        <div className="flex items-center absolute left-[4%] top-[5%] w-1/4 aspect-[1/1]">
                            <div className="w-full h-full relative">
                                <Image
                                    src={"/curve-text-sm.png"}
                                    alt="curve text"
                                    className="animate-spin-slow"
                                    fill
                                />
                                <div className="absolute inset-[15%]">
                                    <Image src={"/ellipse-sm.png"} alt="ellipse" fill />
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card
                        backgroundColor="bg-card-dark"
                        className="flex items-center lg:mt-0 mt-20 "
                    >
                        <div className="m-auto gap-4 *:mb-8 w-4/5">
                            <div className="*:mb-4">
                                <h5 className="text-foreground">The drinks</h5>
                                <h1 className="text-foreground">Our Cocktails</h1>
                            </div>
                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                            />

                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                            />

                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                            />

                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                            />
                        </div>
                    </Card>
                </div>
            </Container>
            <div className="bg-foreground relative pt-40 sm:pb-40 pb-80">
                <AnimatedImage
                    src="/leaf-8.png"
                    width={352}
                    height={684}
                    className="right-0 bottom-0 absolute "
                    animation="translateX(100%)"
                />
                <AnimatedImage
                    src="/leaf-9.png"
                    width={353}
                    height={646}
                    className="left-0 bottom-0 absolute"
                    animation="translateX(-100%)"
                />
                <div className="sm:w-3/5 px-4 mx-auto items-center">
                    <div className="text-center *:mb-4 text-secondary-foreground">
                        <h5>Hard liquors</h5>
                        <h1>Our Alcohol Card</h1>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 gap-20">
                        <div>
                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                                textColor="dark"
                            />
                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                                textColor="dark"
                            />
                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                                textColor="dark"
                            />
                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                                textColor="dark"
                            />
                        </div>
                        <div>
                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                                textColor="dark"
                            />
                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                                textColor="dark"
                            />
                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                                textColor="dark"
                            />
                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                                textColor="dark"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <div className="lg:grid lg:grid-cols-2 gap-8 lg:px-8 sm:px-32 xs:px-16 min-h-[570px]:px-24 px-8 mt-80 mb-40">
                    <Card backgroundColor="bg-card" className="h-full min-h-[590px]">
                        <div className="absolute left-1/2 -translate-x-1/2 z-20 top-1/2 -translate-y-1/2 w-3/4 h-3/4 ">
                            <Image
                                src={"/menu-card-2.png"}
                                alt="drinking menu image"
                                fill
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "20px",
                                }}
                            />
                        </div>
                        <div className="flex items-center absolute left-[4%] md:top-[5%] top-[6%] md:w-1/4 aspect-[1/1] w-[30%] min-w-16">
                            <div className="w-full h-full relative">
                                <Image
                                    src={"/curve-text-sm.png"}
                                    alt="curve text"
                                    className="animate-spin-slow"
                                    fill
                                />
                                <div className="absolute inset-[15%]">
                                    <Image src={"/ellipse-sm.png"} alt="ellipse" fill />
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card
                        backgroundColor="bg-card-dark"
                        className="flex items-center lg:mt-0 mt-20"
                    >
                        <div className="m-auto gap-4 *:mb-8 w-4/5">
                            <div className="*:mb-4">
                                <h5 className="text-foreground">Our dishes</h5>
                                <h1 className="text-foreground">Hot Appetizers</h1>
                            </div>
                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                            />

                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                            />

                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                            />

                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                            />
                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                            />
                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                            />
                            <MenuCardItem
                                title="Margarita with Ice"
                                description="Popular Latin American tequila cocktail"
                                price={55}
                            />
                        </div>
                    </Card>
                </div>
            </Container>
        </div>
    );
}
