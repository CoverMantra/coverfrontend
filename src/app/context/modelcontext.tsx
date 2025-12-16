"use client"; 

import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

// ✅ Context create karein
const ModalContext = createContext<ModalContextType | null>(null);

// ✅ Provider component ka type define karein
export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

// ✅ Custom hook for using modal
export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};

