"use client";
import Button from "../ui/Button";
import { IconClose, ImageTicket } from "../svg";
import Link from "next/link";
import { useShoppingMenu } from "@/lib/context/useContextShoppingMenu";
import { useEffect } from "react";

export default function ShoppingMenu() {
    const { isMenuOpen, closeShoppingMenu } = useShoppingMenu();

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
            id: 1,
            title: "Ticket Festival: Fun Zone",
            date: "2024-07-02",
            price: 10,
            image: "/image/article1.jpg",
        },
    ];

    const handleMenuClose = () => {
        isMenuOpen && closeShoppingMenu();
    };

    const { id, title, date, price, image } = article[0];

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
                            <div key={id} className="flex flex-col gap-y-8 w-full">
                                <div className="bg-foreground space-y-1">
                                    <div className="flex justify-between text-lg">
                                        <div>{title}</div>
                                        <div>${price},-</div>
                                    </div>
                                    <p>{date}</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex gap-2 w-full">
                                        <Button
                                            label="-"
                                            primary
                                            textColor="var(--primary)"
                                            backgroundColor="var(--accent)"
                                            className="rounded-full w-8 aspect-square text-xl"
                                        />
                                        <Button
                                            label="+"
                                            primary
                                            textColor="var(--primary)"
                                            backgroundColor="var(--accent)"
                                            className="rounded-full w-8 aspect-square text-xl"
                                        />
                                    </div>
                                    <div>
                                        <Link href={`#`}>Remove all items</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="space-y-8 ">
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
