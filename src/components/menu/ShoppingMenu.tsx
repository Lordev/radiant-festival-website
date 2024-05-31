"use client";
import Button from "../ui/buttons/Button";
import { IconClose, ImageTicket } from "../svg";
import { useShoppingMenu } from "@/lib/context/useContextShoppingMenu";
import { useEffect } from "react";
import useTicketsStore from "@/lib/store/tickets";

export default function ShoppingMenu() {
    const { isMenuOpen, closeShoppingMenu } = useShoppingMenu();
    const ticketsAmount = useTicketsStore((state) => state.ticketsAmount);
    const incrementTickets = useTicketsStore((state) => state.incrementTickets);
    const decrementTickets = useTicketsStore((state) => state.decrementTickets);
    const ticketsPrice = useTicketsStore((state) => state.ticketsPrice);
    const resetTickets = useTicketsStore((state) => state.resetTickets);
    const setTicketsAmount = useTicketsStore((state) => state.setTicketsAmount);

    useEffect(() => {
        const shoppingContainer = document.getElementById("shopping-container");
        const shoppingMenu = document.getElementById("shopping-menu");

        if (!shoppingMenu) return;

        const shoppingMenuAnimation = () => {
            if (isMenuOpen) {
                try {
                    shoppingContainer.style.position = "fixed";
                    shoppingContainer.style.display = "block";
                    const timeOutID = setTimeout(() => {
                        shoppingMenu.style.transform = "translateX(0)";
                    }, 0);
                    return () => clearTimeout(timeOutID);
                } catch (error) {
                    console.error(error);
                }
            } else {
                shoppingMenu.style.transform = "translateX(100%)";
                const timeoutId = setTimeout(() => {
                    shoppingContainer.style.display = "none";
                }, 300);
                return () => clearTimeout(timeoutId);
            }
        };

        shoppingMenuAnimation();
    }, [isMenuOpen]);

    const article = [
        {
            title: "Ticket Festival: Fun Zone",
            date: "01 - 03 July 2024",
        },
    ];

    const handleMenuClose = () => {
        isMenuOpen && closeShoppingMenu();
    };

    const handleIncrementTickets = () => {
        incrementTickets();
    };

    const handleDecrementTickets = () => {
        decrementTickets();
    };

    const handleSelectChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setTicketsAmount(value);
    };

    const { title, date } = article[0];

    return (
        <div
            className={`inset-0 transition-colors duration-200  fixed z-[9999]  ${isMenuOpen ? "bg-black/40" : "bg-black/0"}`}
            id="shopping-container"
        >
            <div
                className={`fixed right-0  top-0 bottom-0 h-screen bg-foreground w-[34rem] shadow-xl transition-all duration-300 ease-in-out transform  text-primary py-16 px-4 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                id="shopping-menu"
            >
                <div className="space-y-8 grid-rows-[auto_1fr_auto] grid h-full">
                    <div className="space-y-8">
                        <div className="flex justify-between items-center">
                            <h4>Shopping Menu</h4>
                            <IconClose
                                fontSize={30}
                                className="cursor-pointer"
                                onClick={handleMenuClose}
                            />
                        </div>
                        <hr />
                    </div>
                    <div className="space-y-8">
                        <div className="flex items-center h-fit">
                            <ImageTicket
                                width={90}
                                height={90}
                                className="mx-8 opacity-50"
                                color={"var(--primary)"}
                            />
                            <div className="w-full px-8 space-y-4">
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <div className="justify-between text-lg">
                                            <div>{title}</div>
                                            <p className="text-xs">{date}</p>
                                        </div>
                                        <div className="flex justify-between"></div>
                                    </div>
                                    <div className="grid-cols-2 grid">
                                        <h4>${ticketsPrice.toFixed(2)},-</h4>
                                        {ticketsAmount > 1 && (
                                            <p className="text-xs">
                                                {"( "}
                                                {ticketsAmount} * $
                                                {ticketsPrice.toFixed(2)},- {")"}
                                            </p>
                                        )}
                                    </div>
                                    <div className="space-y-3 ">
                                        <div className="flex gap-8 items-center ">
                                            <div className="space-x-2">
                                                <Button
                                                    label="-"
                                                    primary
                                                    textColor="var(--primary)"
                                                    backgroundColor="var(--accent)"
                                                    className="rounded-full w-8 aspect-square text-xl"
                                                    onClick={() =>
                                                        handleDecrementTickets()
                                                    }
                                                />
                                                <Button
                                                    label="+"
                                                    primary
                                                    textColor="var(--primary)"
                                                    backgroundColor="var(--accent)"
                                                    className="rounded-full w-8 aspect-square text-xl"
                                                    onClick={() =>
                                                        handleIncrementTickets()
                                                    }
                                                />
                                            </div>
                                            <form onSubmit={(e) => e.preventDefault()}>
                                                <select
                                                    value={ticketsAmount}
                                                    onChange={handleSelectChange}
                                                >
                                                    {Array.from(
                                                        { length: 11 },
                                                        (_, i) => (
                                                            <option key={i} value={i}>
                                                                {i}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </form>
                                        </div>
                                        <div>
                                            <a
                                                onClick={() => {
                                                    resetTickets();
                                                }}
                                                href={`#`}
                                            >
                                                Remove all items
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="space-y-8 w-full">
                        <hr />
                        <div className="flex justify-center">
                            <Button
                                label="Go to checkout"
                                primary
                                textColor="var(--primary)"
                                backgroundColor="var(--accent)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
