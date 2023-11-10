import { useState } from "react";

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    
    return {
        isOpen,
        toggle,
    };
};