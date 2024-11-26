import { useState } from 'react';
import Logo from "@/components/Basics/Logo";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <nav className="bg-background h-14 fixed w-full flex flex-row justify-between py-5 px-6 items-center z-50">
                <div
                    className="relative size-6 cursor-pointer flex flex-col items-center"
                    onClick={toggleMenu}>
                    <div
                        className={`absolute w-full h-0.5 bg-foreground rounded-lg transition-transform duration-500 ${isOpen ? 'rotate-45 top-1/2' : 'top-1'
                            }`}
                    ></div>
                    <div
                        className={`absolute h-0.5 bg-foreground rounded-lg transition-all duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'
                            }`}
                        style={{
                            width: '70%',
                            left: '30%',
                            top: '50%',
                            transform: 'translateY(-50%)',
                        }}
                    ></div>
                    <div
                        className={`absolute w-full h-0.5 bg-foreground rounded-lg transition-transform duration-500 ${isOpen ? '-rotate-45 top-1/2' : 'bottom-1'
                            }`}
                    ></div>
                </div>

                <Logo className="h-6" />

                <div className="flex flex-row gap-5">
                    <svg className="h-6 text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor" id="magnifyingGlass"><path fillRule="evenodd" clipRule="evenodd" d="M14.9 16.32a8 8 0 1 1 1.41-1.41l4.4 4.38a1 1 0 1 1-1.42 1.42l-4.38-4.39ZM16 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" /></svg>

                    <svg className="h-6 text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor" id="user"><path fillRule="evenodd" clipRule="evenodd" d="M16.5 9c0 4.2-2.01 6-4.5 6s-4.5-1.8-4.5-6S9.51 3 12 3s4.5 1.8 4.5 6Zm-2 0c0 1.8-.43 2.8-.85 3.3-.39.45-.92.7-1.65.7-.73 0-1.26-.25-1.65-.7-.42-.5-.85-1.5-.85-3.3 0-1.8.43-2.8.85-3.3.39-.45.92-.7 1.65-.7.73 0 1.26.25 1.65.7.42.5.85 1.5.85 3.3Z" /><path d="m3.3 19.3.7.7-.7-.7v-.01l.01-.02a2.38 2.38 0 0 1 .15-.13l.43-.34c.36-.27.9-.61 1.62-.95A14.98 14.98 0 0 1 12 16.5c2.9 0 5.05.66 6.5 1.35a10.11 10.11 0 0 1 2.19 1.42v.02h.01L20 20l.7-.7a1 1 0 0 1-1.4 1.41h-.01A13 13 0 0 0 12 18.5a13 13 0 0 0-5.63 1.14A8.13 8.13 0 0 0 4.7 20.7v.01a1 1 0 0 1-1.42-1.42Z" /></svg>
                </div>
            </nav>
            <div
                className={`fixed inset-0 bg-background flex flex-col items-start justify-start z-40 transition-all duration-1000 mt-14 pb-14 overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <ul className="text-foreground w-full">
                    <li className='border-t-[1px] border-secondary w-full flex flex-col items-center gap-6 py-6 px-4'>
                        <h2 className="uppercase text-sm text-primary w-full text-left">Tout Radio France</h2>
                        <div className='flex flex-wrap gap-2 mx-12 mb-4'>
                            <div className='bg-foreground h-10 w-20 rounded-md'></div>
                            <div className='bg-red-500 h-10 w-20 rounded-md'></div>
                            <div className='bg-yellow-400 h-10 w-20 rounded-md'></div>
                            <div className='bg-blue-500 h-10 w-20 rounded-md'></div>
                            <div className='bg-purple-500 h-10 w-20 rounded-md'></div>
                            <div className='bg-pink-800 h-10 w-20 rounded-md'></div>
                            <div className='bg-pink-500 h-10 w-20 rounded-md'></div>
                            <div className='bg-green-400 h-10 w-20 rounded-md'></div>
                        </div>
                    </li>
                    <li className='border-t-[1px] border-secondary w-full flex flex-col items-center gap-6 py-6 px-4'>
                        <h2 className="uppercase text-sm text-primary w-full text-left">Podcasts</h2>
                        <ul className='w-full flex flex-col gap-6 text-sm text-foreground text-left'>
                            <p>Explorer les podcasts</p>
                            <li></li>
                        </ul>
                    </li>
                    <li className='border-t-[1px] border-secondary w-full flex flex-col items-center gap-6 py-6 px-4'>
                        <h2 className="uppercase text-sm text-primary w-full text-left">Catégories</h2>
                        <ul className='w-full flex flex-col gap-6 text-sm text-foreground text-left'>
                            <li><p>Sciences et Savoirs</p></li>
                            <li><p>Société</p></li>
                            <li><p>Environnement</p></li>
                            <li><p>Arts et Divertissement</p></li>
                            <li><p>Monde</p></li>
                            <li><p>Politique</p></li>
                            <li><p>Économie</p></li>
                            <li><p>Cellule Inversigation</p></li>
                            <li><p>Vie quotidienne</p></li>
                            <li><p>Bien-être</p></li>
                            <li><p>Enfants</p></li>
                            <li><p>Sports</p></li>
                            <li><p>Actualités musicales</p></li>
                            <li><p>Musique</p></li>
                            <li><p>Concerts</p></li>
                            <li><p>Fictions</p></li>
                        </ul>
                    </li>
                    <li className='border-t-[1px] border-secondary w-full flex flex-row items-center gap-2 py-6 px-4'>
                        <div className='rounded-4xl border-2 border-foreground'>
                            <button
                                className={`border-0 w-26 rounded-4xl transition-all duration-500 ${isDarkMode ? 'bg-transparent text-foreground' : 'bg-foreground text-background'}`}
                                onClick={toggleTheme}
                            >
                                Clair
                            </button>
                            <button
                                className={`border-0 w-26 rounded-4xl transition-all duration-500 ${isDarkMode ? 'bg-foreground text-background' : 'bg-transparent text-foreground'}`}
                                onClick={toggleTheme}
                            >
                                Sombre
                            </button>
                        </div>
                    </li>
                </ul>
            </div >
        </>
    );
}