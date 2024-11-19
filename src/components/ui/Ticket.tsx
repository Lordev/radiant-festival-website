"use client";
import Image from "next/image";
import useTicketsStore from "@/lib/store/useTicketsStore";
import { useShoppingMenu } from "@/lib/context/useContextShoppingMenu";

export default function Ticket() {
    const increaseTickets = useTicketsStore((state) => state.incrementTickets);
    const { openShoppingMenu } = useShoppingMenu();

    return (
        <div className="flex items-center justify-center">
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
        </div>
    );
}
