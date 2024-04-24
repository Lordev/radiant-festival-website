"use client";
import Image from "next/image";
import Card from "@/components/UI/Card";
import MenuCardItem from "@/components/UI/MenuCardItem";
import AnimatedImage from "@/components/UI/ImageWithObserver";
import Container from "@/components/UI/Container";
import Title from "@/components/UI/Title";

export default function Menu() {
    return (
        <main className="bg-gradient-to-b from-background via-accent-secondary to-background from-10% via-50% to-90% overflow-hidden">
            <Title title="Menu" />

            <Container className="lg:mt-80 lg:mb-40 mt-20 mb-20">
                <div className="lg:grid lg:grid-cols-2 gap-8 lg:px-8 sm:px-32  min-[570px]:px-24">
                    <Card
                        backgroundColor="bg-card relative"
                        className="h-full min-h-[590px]"
                    >
                        <div className="absolute left-1/2 -translate-x-1/2 z-20 top-1/2 -translate-y-1/2 w-[70%] xl:w-3/4 h-3/4">
                            <Image
                                src={"/menu-card-drinks.png"}
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
                        <div className="m-auto gap-4 w-4/5">
                            <div className="*:mb-4">
                                <h5 className="text-foreground">The drinks</h5>
                                <h1 className="text-foreground">Our Cocktails</h1>
                            </div>
                            <MenuCardItem
                                title="Tropic Tequila"
                                description="Refreshing blend of tequila, tropical fruits, and lime over ice."
                                price={12}
                            />

                            <MenuCardItem
                                title="Fiesta Fusion"
                                description="Tequila, mango, chili, and cilantro with a chili salt rim."
                                price={14}
                            />

                            <MenuCardItem
                                title="Sunset Samba"
                                description="Tequila, blood orange liqueur, grenadine, garnished with orange."
                                price={13}
                            />

                            <MenuCardItem
                                title="Citrus Cinco"
                                description="Tequila, triple sec, fresh citrus juices, salt rimmed glass."
                                price={15}
                            />
                        </div>
                    </Card>
                </div>
            </Container>
            <section className="bg-foreground relative pt-40 sm:pb-40 pb-80">
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
                    <div className="text-center mb-4 text-secondary-foreground">
                        <h5>Hard liquors</h5>
                        <h1>Our Alcohol Card</h1>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 gap-20">
                        <div>
                            <MenuCardItem
                                title="Raspberry Rapture"
                                description="Vodka infused with fresh raspberries, lemon juice, and a splash of soda."
                                price={55}
                                textColor="dark"
                            />
                            <MenuCardItem
                                title="Coconut Crush"
                                description="Coconut rum, pineapple juice, and a hint of lime, served over ice."
                                price={55}
                                textColor="dark"
                            />
                            <MenuCardItem
                                title="Bourbon Bliss"
                                description="Bourbon whiskey, honey syrup, and a dash of bitters, garnished with an orange twist."
                                price={55}
                                textColor="dark"
                            />
                            <MenuCardItem
                                title="Ginger Glow"
                                description="Spicy ginger liqueur, lime juice, and ginger beer, served in a copper mug."
                                price={55}
                                textColor="dark"
                            />
                        </div>
                        <div>
                            <MenuCardItem
                                title="Mango Magic"
                                description="Mango vodka, peach schnapps, and orange juice, shaken with ice and strained into a martini glass."
                                price={55}
                                textColor="dark"
                            />
                            <MenuCardItem
                                title="Peachy Paradise"
                                description="Peach vodka, coconut rum, and cranberry juice, served over crushed ice."
                                price={55}
                                textColor="dark"
                            />
                            <MenuCardItem
                                title="Whiskey Whirl"
                                description="Irish whiskey, coffee liqueur, and cream, served over ice in a rocks glass."
                                price={55}
                                textColor="dark"
                            />
                            <MenuCardItem
                                title="Blueberry Blast"
                                description="Blueberry vodka, lemonade, and a splash of club soda, garnished with fresh blueberries."
                                price={55}
                                textColor="dark"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Container className="lg:mt-80 lg:mb-40 mt-20 mb-20">
                <div className="lg:grid lg:grid-cols-2 gap-8 lg:px-8 sm:px-32  min-h-[570px]:px-24">
                    <Card backgroundColor="bg-card" className="h-full min-h-[590px]">
                        <div className="absolute left-1/2 -translate-x-1/2 z-20 top-1/2 -translate-y-1/2 w-3/4 h-3/4 ">
                            <Image
                                src={"/menu-card-food.png"}
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
                        <div className="m-auto gap-4 w-4/5">
                            <div className="*:mb-4">
                                <h5 className="text-foreground">Our dishes</h5>
                                <h1 className="text-foreground">Hot Appetizers</h1>
                            </div>
                            <MenuCardItem
                                title="Crispy Calamari"
                                description="Lightly battered calamari rings served with marinara sauce."
                                price={12}
                            />

                            <MenuCardItem
                                title="Spicy Buffalo Wings"
                                description="Chicken wings tossed in a tangy buffalo sauce, served with blue cheese dip."
                                price={10}
                            />

                            <MenuCardItem
                                title="Stuffed Jalapeños"
                                description="Jalapeño peppers stuffed with cream cheese, wrapped in bacon, and baked to perfection."
                                price={9}
                            />

                            <MenuCardItem
                                title="Shrimp Skewers"
                                description="Grilled shrimp skewers marinated in garlic and herbs, served with cocktail sauce."
                                price={14}
                            />

                            <MenuCardItem
                                title="Cheesy Garlic Bread"
                                description="Toasted bread topped with melted mozzarella cheese and garlic butter."
                                price={8}
                            />

                            <MenuCardItem
                                title="Crispy Spring Rolls"
                                description="Crispy vegetable spring rolls served with sweet chili dipping sauce."
                                price={11}
                            />
                        </div>
                    </Card>
                </div>
            </Container>
        </main>
    );
}
