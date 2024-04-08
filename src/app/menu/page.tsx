"use client";
import Image from "next/image";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Card from "@/components/UI/Card";
import MenuCardItem from "@/components/UI/MenuCardItem";
import AnimatedImage from "@/components/UI/AnimatedImage";

export default function Home() {
    return (
        <div className="bg-gradient-to-b from-background via-accent-secondary to-background from-20% via-50% to-60% overflow-hidden">
            <Header />
            <div className="pt-64 text-center">
                <h2>Menu</h2>
            </div>
            <div className="mt-40 h-screen w-[95%] mx-auto grid grid-cols-2 gap-x-8">
                <Card backgroundColor="bg-card relative">
                    <Image
                        className="absolute left-1/2 -translate-x-1/2 z-20 top-1/2 -translate-y-1/2"
                        src={"/menu-card-1.png"}
                        alt="drinking menu image"
                        width={593}
                        height={770}
                    />
                    <div className="flex items-center absolute right-[15%] top-8">
                        <div className="relative w-[20rem]">
                            <Image
                                src={"/curve-text-sm.png"}
                                alt="curve text"
                                width={328}
                                height={238}
                                className="animate-spin-slow"
                            />
                            <Image
                                src={"/ellipse-sm.png"}
                                alt="ellipse"
                                width={212}
                                height={212}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                    </div>
                </Card>
                <Card backgroundColor="bg-card-dark" className="flex items-center">
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
            <div className="bg-foreground relative py-40">
                <AnimatedImage
                    src="/leaf-8.png"
                    width={440}
                    height={597}
                    className="right-0 absolute "
                    animation="translateX(200px)"
                />
                <AnimatedImage
                    src="/leaf-9.png"
                    width={483}
                    height={729}
                    className="left-0 absolute"
                    animation="translateX(-200px)"
                />
                <div className="w-4/5 mx-auto">
                    <div className="text-center *:mb-4 text-secondary-foreground">
                        <h5>Hard liquors</h5>
                        <h1>Our Alcohol Card</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-20">
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
            <div className="mt-40 h-screen w-[95%] mx-auto grid grid-cols-2 gap-x-8">
                <Card backgroundColor="bg-card">
                    <Image
                        className="absolute left-1/2 -translate-x-1/2 z-20 top-1/2 -translate-y-1/2"
                        src={"/menu-card-2.png"}
                        alt="drinking menu image"
                        width={593}
                        height={770}
                    />
                    <div className="flex items-center absolute right-[15%] top-8">
                        <div className="relative w-[20rem]">
                            <Image
                                src={"/curve-text-sm.png"}
                                alt="curve text"
                                width={328}
                                height={238}
                                className="animate-spin-slow"
                            />
                            <Image
                                src={"/ellipse-sm.png"}
                                alt="ellipse"
                                width={212}
                                height={212}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                    </div>
                </Card>
                <Card backgroundColor="bg-card-dark" className="flex items-center">
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
            <Footer />
        </div>
    );
}
