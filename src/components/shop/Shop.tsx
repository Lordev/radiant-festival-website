"use client";
import Button from "../ui/buttons/Button";
import { IconClose, ImageTicket } from "../svg";
import useTicketsStore from "@/lib/store/useTicketsStore";
import { useShoppingMenu } from "@/lib/context/useContextShoppingMenu";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

export default function Shop() {
    const { isMenuOpen, closeShoppingMenu } = useShoppingMenu();

    const ticketsAmount = useTicketsStore((state) => state.ticketsAmount);
    const ticketsPrice = useTicketsStore((state) => state.ticketsPrice);
    const resetTickets = useTicketsStore((state) => state.resetTickets);

    const incrementTickets = useTicketsStore((state) => state.incrementTickets);
    const decrementTickets = useTicketsStore((state) => state.decrementTickets);
    const setTicketsAmount = useTicketsStore((state) => state.setTicketsAmount);

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

    const handleCheckout = async () => {
        try {
            const response = await axios.post("/api/get-stripe-session", {
                item: {
                    quantity: ticketsAmount,
                },
            });
            const sessionId = response.data.id;
            const stripe = await loadStripe(
                "pk_test_51PNBqTGxV66yGAQkNxQqnyZRlgIwA9mJlQaE8YE9nSHJ23whm2ysfboIIuxjsIskFUse7JTjAHk22aIofKFEb7Un006ZdSYdiT"
            );
            await stripe.redirectToCheckout({ sessionId });
        } catch (error) {
            console.error(error);
        }
    };

    const { title, date } = article[0];

    return (
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
                                        {ticketsAmount} * ${ticketsPrice.toFixed(2)},-{" "}
                                        {")"}
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
                                            onClick={() => handleDecrementTickets()}
                                        />
                                        <Button
                                            label="+"
                                            primary
                                            textColor="var(--primary)"
                                            backgroundColor="var(--accent)"
                                            className="rounded-full w-8 aspect-square text-xl"
                                            onClick={() => handleIncrementTickets()}
                                        />
                                    </div>
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <select
                                            value={ticketsAmount}
                                            onChange={handleSelectChange}
                                        >
                                            {Array.from({ length: 11 }, (_, i) => (
                                                <option key={i} value={i}>
                                                    {i}
                                                </option>
                                            ))}
                                        </select>
                                    </form>
                                </div>
                                <div>
                                    <Button
                                        label="Remove all items"
                                        onClick={() => {
                                            resetTickets();
                                        }}
                                        className="p-0 text-xs uppercase"
                                    />
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
                        label="Pay Here"
                        primary
                        onClick={() => {
                            handleCheckout();
                        }}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}
