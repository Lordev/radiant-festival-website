import Title from "@/components/ui/Title";
import { CocktailCards, FoodCards, HardLiquors } from "@/components/sections/menu";

export default function Menu() {
    return (
        <main className="bg-gradient-to-b from-background via-accent-secondary to-background from-10% via-50% to-90% overflow-hidden">
            <Title title="Menu" />
            <CocktailCards />
            <HardLiquors />
            <FoodCards />
        </main>
    );
}
