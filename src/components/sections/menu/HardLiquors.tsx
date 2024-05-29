import AnimatedImage from "@/components/ui/ImageWithObserver";
import MenuCardItem from "@/components/ui/MenuCardItem";

export default function HardLiquors() {
    return (
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
    );
}
