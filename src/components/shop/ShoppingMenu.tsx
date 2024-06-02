"use client";
import { useShoppingMenu } from "@/lib/context/useContextShoppingMenu";
import { useEffect } from "react";

export default function ShoppingMenu({ children }: { children: React.ReactNode }) {
    const { isMenuOpen } = useShoppingMenu();

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

    return (
        <div
            className={`inset-0 transition-colors duration-200  fixed z-[9999]  ${isMenuOpen ? "bg-black/40" : "bg-black/0"}`}
            id="shopping-container"
        >
            <div
                className={`fixed right-0  top-0 bottom-0 h-screen bg-foreground w-[34rem] shadow-xl transition-all duration-300 ease-in-out transform  text-primary py-16 px-4 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                id="shopping-menu"
            >
                {children}
            </div>
        </div>
    );
}
