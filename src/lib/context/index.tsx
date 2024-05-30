import ShoppingMenuContextProvider from "./useContextShoppingMenu";
import ModalProvider from "./useContextModal";
import MenuProvider from "./useContextMenu";
import ScreenBreakPointProvider from "./useContextScreenBreakPoints";

export default function ContextProvider({ children }) {
    return (
        <ModalProvider>
            <ShoppingMenuContextProvider>
                <ScreenBreakPointProvider>
                    <MenuProvider>{children}</MenuProvider>
                </ScreenBreakPointProvider>
            </ShoppingMenuContextProvider>
        </ModalProvider>
    );
}
