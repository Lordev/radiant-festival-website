"use client";
import { IconShoppingCart } from "../svg";
import { useShoppingMenu } from "@/lib/context/useContextShoppingMenu";
import useTicketsStore from "@/lib/store/useTicketsStore";

export default function ShoppingCartButton() {
    const { openShoppingMenu } = useShoppingMenu();
    const amountTickets = useTicketsStore((state) => state.ticketsAmount);

    return (
        <div
            className="relative p-1 items-center cursor-pointer flex justify-center"
            onClick={() => {
                openShoppingMenu();
            }}
        >
            <IconShoppingCart
                fontSize={30}
                color={"var(--primary-foreground)"}
                className="max-sm:w-6"
            />
            {amountTickets > 0 && (
                <div className="w-5 aspect-square absolute bottom-0 right-0 bg-accent-secondary rounded-full text-secondary text-center">
                    {amountTickets}
                </div>
            )}
        </div>
    );
}
