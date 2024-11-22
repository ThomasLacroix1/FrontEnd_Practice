import { useState } from 'react';
import Logo from "@/components/Basics/Logo";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black/20 h-14 flex flex-row justify-between py-5 px-3 items-center">
            <div
                className="relative w-6 h-6 cursor-pointer flex flex-col items-center"
                onClick={toggleMenu}>
                <div
                    className={`absolute w-full h-0.5 bg-white rounded-lg transition-transform duration-500 ${isOpen ? 'rotate-45 top-1/2' : 'top-1'
                        }`}
                ></div>
                <div
                    className={`absolute h-0.5 bg-white rounded-lg transition-all duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    style={{
                        width: '70%',
                        left: '30%',
                        top: '50%',
                        transform: 'translateY(-50%)',
                    }}
                ></div>
                <div
                    className={`absolute w-full h-0.5 bg-white rounded-lg transition-transform duration-500 ${isOpen ? '-rotate-45 top-1/2' : 'bottom-1'
                        }`}
                ></div>
            </div>

            <Logo className="h-6" />
            <div className="flex flex-row gap-5">
                <svg className="h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor" id="magnifyingGlass"><path fillRule="evenodd" clipRule="evenodd" d="M14.9 16.32a8 8 0 1 1 1.41-1.41l4.4 4.38a1 1 0 1 1-1.42 1.42l-4.38-4.39ZM16 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" /></svg>
                <svg className="h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor" id="user"><path fillRule="evenodd" clipRule="evenodd" d="M16.5 9c0 4.2-2.01 6-4.5 6s-4.5-1.8-4.5-6S9.51 3 12 3s4.5 1.8 4.5 6Zm-2 0c0 1.8-.43 2.8-.85 3.3-.39.45-.92.7-1.65.7-.73 0-1.26-.25-1.65-.7-.42-.5-.85-1.5-.85-3.3 0-1.8.43-2.8.85-3.3.39-.45.92-.7 1.65-.7.73 0 1.26.25 1.65.7.42.5.85 1.5.85 3.3Z" /><path d="m3.3 19.3.7.7-.7-.7v-.01l.01-.02a2.38 2.38 0 0 1 .15-.13l.43-.34c.36-.27.9-.61 1.62-.95A14.98 14.98 0 0 1 12 16.5c2.9 0 5.05.66 6.5 1.35a10.11 10.11 0 0 1 2.19 1.42v.02h.01L20 20l.7-.7a1 1 0 0 1-1.4 1.41h-.01A13 13 0 0 0 12 18.5a13 13 0 0 0-5.63 1.14A8.13 8.13 0 0 0 4.7 20.7v.01a1 1 0 0 1-1.42-1.42Z" /></svg>
            </div>
        </nav>
    );
}