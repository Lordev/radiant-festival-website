"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";

// Define the Modal Context type
export interface ModalContextType {
    isModalOpen: boolean;
    toggleModal: () => void;
    closeModal: () => void;
    openModal: () => void;
}

// Create the Context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Custom hook to use the Modal Context
export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};

// Modal Provider Component
export default function ModalProvider({ children }: PropsWithChildren) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const modalState: ModalContextType = {
        isModalOpen,
        toggleModal,
        closeModal,
        openModal,
    };

    return <ModalContext.Provider value={modalState}>{children}</ModalContext.Provider>;
}
