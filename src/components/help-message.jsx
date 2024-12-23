import { useState, useEffect } from "react";

const HelpMessage = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    const COOKIE_NAME = "instructionsShown";
    const COOKIE_EXPIRATION = 60 * 60 * 24 * 365;

    const isCookieSet = () =>
        document.cookie.split("; ").some((cookie) => cookie.startsWith(`${COOKIE_NAME}=`));

    const setCookie = () => {
        document.cookie = `${COOKIE_NAME}=true; path=/; max-age=${COOKIE_EXPIRATION}`;
    };

    useEffect(() => {
        if (!isCookieSet()) {
            setIsVisible(true);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setCookie();
        if (onClose) onClose();
    };

    if (!isVisible) return null;

    const instructions = [
        "Create tasks by clicking the + button.",
        "Mark tasks as completed by clicking anywhere on the card where there's no text.",
        "Edit tasks inline by clicking on the text. Changes will auto-save after 2 seconds of inactivity.",
    ];

    return (
        <div className="bg-blue-500 text-gray-50 rounded-lg shadow-lg p-8 mb-6">
            <p className="font-sans text-lg font-bold mb-4 leading-relaxed">
                Welcome! Here's how the application works:
            </p>
            <ul className="list-none ml-5 space-y-3 text-base leading-relaxed">
                {instructions.map((instruction, index) => (
                    <li key={index} className="relative pl-6">
                        <span className="absolute left-0 top-0 w-4 h-4 bg-gray-900 text-white font-bold text-sm flex items-center justify-center rounded-full">
                            {index + 1}
                        </span>
                        {instruction}
                    </li>
                ))}
            </ul>
            <button
                onClick={handleClose}
                className="cursor-pointer mt-6 bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg tracking-wide uppercase transition-colors duration-300"
            >
                Got it!
            </button>
        </div>
    );
};

export default HelpMessage;
