"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";

// Define the Menu Context type
export interface ShoppingMenuContextType {
    isMenuOpen: boolean;
    toggleShoppingMenu: () => void;
    closeShoppingMenu: () => void;
    openShoppingMenu: () => void;
}

// Create the Context
const ShoppingMenuContext = createContext<ShoppingMenuContextType | undefined>(undefined);

// Custom hook to use the Menu Context
export const useShoppingMenu = (): ShoppingMenuContextType => {
    const context = useContext(ShoppingMenuContext);
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
};

// Menu Provider Component
export default function ShoppingMenuContextProvide({ children }: PropsWithChildren) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleShoppingMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeShoppingMenu = () => {
        setIsMenuOpen(false);
    };

    const openShoppingMenu = () => {
        setIsMenuOpen(true);
    };

    const useShoppingMenuState: ShoppingMenuContextType = {
        isMenuOpen,
        toggleShoppingMenu,
        closeShoppingMenu,
        openShoppingMenu,
    };

    return (
        <ShoppingMenuContext.Provider value={useShoppingMenuState}>
            {children}
        </ShoppingMenuContext.Provider>
    );
}
