import { useState } from "react";

export default function Expandable({ children, comments }){

    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <div>
            <button onClick={toggleIsOpen}>{isOpen ? 'Close' : 'See comments'}</button>
            {isOpen && children}
        </div>
    )
}