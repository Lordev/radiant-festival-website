import { create } from "zustand";

const TICKET_LIMIT = 10;
const TICKET_PRICE = 199.95;

interface Tickets {
    ticketsAmount: number;
    ticketsPrice: number;
    setTicketsAmount: (amount: number) => void;
    incrementTickets: () => void;
    decrementTickets: () => void;
    resetTickets: () => void;
    isTicketsMax: boolean;
    isTicketsMin: boolean;
}

const useTicketsStore = create<Tickets>((set) => ({
    ticketsAmount: 0,
    ticketsPrice: 0,
    incrementTickets: () =>
        set((state) => {
            const newAmount =
                state.ticketsAmount < TICKET_LIMIT
                    ? state.ticketsAmount + 1
                    : state.ticketsAmount;
            return {
                ticketsAmount: newAmount,
                ticketsPrice: parseFloat((TICKET_PRICE * newAmount).toFixed(2)),
                isTicketsMax: newAmount === TICKET_LIMIT,
                isTicketsMin: newAmount === 0,
            };
        }),
    decrementTickets: () =>
        set((state) => {
            const newAmount =
                state.ticketsAmount > 0 ? state.ticketsAmount - 1 : state.ticketsAmount;
            return {
                ticketsAmount: newAmount,
                ticketsPrice: parseFloat((TICKET_PRICE * newAmount).toFixed(2)),
                isTicketsMax: newAmount === TICKET_LIMIT,
                isTicketsMin: newAmount === 0,
            };
        }),
    resetTickets: () =>
        set({
            ticketsAmount: 0,
            ticketsPrice: 0,
            isTicketsMax: false,
            isTicketsMin: false,
        }),
    setTicketsAmount: (amount: number) => {
        const newAmount = Math.max(0, Math.min(TICKET_LIMIT, amount));
        set({
            ticketsAmount: newAmount,
            ticketsPrice: parseFloat((TICKET_PRICE * newAmount).toFixed(2)),
            isTicketsMax: newAmount === TICKET_LIMIT,
            isTicketsMin: newAmount === 0,
        });
    },
    isTicketsMax: false,
    isTicketsMin: false,
}));

export default useTicketsStore;
