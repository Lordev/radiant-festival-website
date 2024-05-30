"use client";
import { IconShoppingCart } from "../svg";
import { useShoppingMenu } from "@/lib/context/useContextShoppingMenu";

export default function ShoppingCartButton() {
    const { openShoppingMenu } = useShoppingMenu();

    return (
        <div
            className="relative p-1 items-center cursor-pointer flex justify-center"
            onClick={() => {
                openShoppingMenu();
            }}
        >
            <IconShoppingCart fontSize={30} color={"var(--primary-foreground)"} />
            <div className="w-5 aspect-square absolute bottom-0 right-0 bg-accent-secondary rounded-full text-secondary text-center">
                1
            </div>
        </div>
    );
}
