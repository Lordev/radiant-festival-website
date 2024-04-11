"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";

// Define the Menu Context type
export interface MenuContextType {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
    openMenu: () => void;
}

// Create the Context
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Custom hook to use the Menu Context
export const useMenu = (): MenuContextType => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
};

// Menu Provider Component
export default function MenuProvider({ children }: PropsWithChildren) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const menuState: MenuContextType = {
        isMenuOpen,
        toggleMenu,
        closeMenu,
        openMenu,
    };

    return <MenuContext.Provider value={menuState}>{children}</MenuContext.Provider>;
}
