"use client";
import Image from "next/image";
import useTicketsStore from "@/lib/store/tickets";
import { useShoppingMenu } from "@/lib/context/useContextShoppingMenu";

export default function Ticket() {
    const increaseTickets = useTicketsStore((state) => state.incrementTickets);
    const { openShoppingMenu } = useShoppingMenu();

    return (
        <Image
            className="mx-auto cursor-pointer"
            src="/ticket.png"
            alt="festival ticket"
            width={355}
            height={585}
            onClick={() => {
                increaseTickets();
                openShoppingMenu();
            }}
        />
    );
}
