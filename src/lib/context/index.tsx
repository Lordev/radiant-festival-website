import ShoppingMenuContextProvider from "./useContextShoppingMenu";
import ModalProvider from "./useContextModal";
import MenuProvider from "./useContextMenu";

export default function ContextProvider({ children }) {
    return (
        <ModalProvider>
            <ShoppingMenuContextProvider>
                <MenuProvider>{children}</MenuProvider>
            </ShoppingMenuContextProvider>
        </ModalProvider>
    );
}
