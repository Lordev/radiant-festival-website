import Shop from "./Shop";
import ShoppingMenu from "./ShoppingMenu";
import PaymentLink from "./PaymentLink";

export default function ShopLayout() {
    return (
        <ShoppingMenu>
            <Shop />
        </ShoppingMenu>
    );
}
