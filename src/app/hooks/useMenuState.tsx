import { useMenu, MenuContextType } from "../context/useContextMenu";

export const useMenuState = (): MenuContextType => {
    const { isMenuOpen, toggleMenu, closeMenu, openMenu }: MenuContextType = useMenu();
    return { isMenuOpen, toggleMenu, closeMenu, openMenu };
};
