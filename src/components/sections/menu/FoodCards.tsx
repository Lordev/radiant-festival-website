import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Image from "next/image";
import MenuCardItem from "@/components/ui/MenuCardItem";

export default function FoodCards() {
    return (
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
    );
}
