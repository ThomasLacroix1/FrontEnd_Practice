import Logo from "@/components/Basics/Logo";
import { useState } from "react";

export default function DesktopNav() {
    const [showRadiosMenu, setShowRadiosMenu] = useState(false);
    const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);

    const handleRadiosMenu = () => {
        setShowRadiosMenu((prev) => !prev);
        if (showCategoriesMenu) {
            setShowCategoriesMenu(false);
        }
    }
    const handleCategoriesMenu = () => {
        setShowCategoriesMenu((prev) => !prev);
        if (showRadiosMenu) {
            setShowRadiosMenu(false);
        }
    }

    return (
        <>
            <nav className={` ${showCategoriesMenu ? 'bg-background' : 'bg-transparent'} fixed flex flex-row justify-between px-8 items-center h-20 w-full text-primary z-20 transition-all ease-in-out duration-500 delay-200`}>
                <div className="flex flex-row gap-8">
                    <a href="#" onClick={handleRadiosMenu}>Radios</a>
                    <a href="#">Podcasts</a>
                    <a href="#" onClick={handleCategoriesMenu}>Catégories</a>
                    <a href="#">Musique</a>
                    <a href="#">Enfants</a>
                </div>
                <Logo className="h-8 cursor-pointer" />
                <div className="flex flex-row gap-2 items-center justify-end">
                    <div className="flex flex-row gap-2 items-center justify-center cursor-pointer hover:text-foreground group">
                        <p className="text-sm">Rechercher</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="size-5 text-primary group-hover:text-foreground"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <hr className="w-6 rotate-90 text-secondary" />
                    <div className="flex flex-row gap-2 items-center justify-center cursor-pointer hover:text-foreground group">
                        <p className="text-sm">Bibliothèque</p>
                        <svg className="size-5 text-primary group-hover:text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor" id="user"><path fillRule="evenodd" clipRule="evenodd" d="M16.5 9c0 4.2-2.01 6-4.5 6s-4.5-1.8-4.5-6S9.51 3 12 3s4.5 1.8 4.5 6Zm-2 0c0 1.8-.43 2.8-.85 3.3-.39.45-.92.7-1.65.7-.73 0-1.26-.25-1.65-.7-.42-.5-.85-1.5-.85-3.3 0-1.8.43-2.8.85-3.3.39-.45.92-.7 1.65-.7.73 0 1.26.25 1.65.7.42.5.85 1.5.85 3.3Z" /><path d="m3.3 19.3.7.7-.7-.7v-.01l.01-.02a2.38 2.38 0 0 1 .15-.13l.43-.34c.36-.27.9-.61 1.62-.95A14.98 14.98 0 0 1 12 16.5c2.9 0 5.05.66 6.5 1.35a10.11 10.11 0 0 1 2.19 1.42v.02h.01L20 20l.7-.7a1 1 0 0 1-1.4 1.41h-.01A13 13 0 0 0 12 18.5a13 13 0 0 0-5.63 1.14A8.13 8.13 0 0 0 4.7 20.7v.01a1 1 0 0 1-1.42-1.42Z" /></svg>
                    </div>
                    <hr className="w-6 rotate-90 text-secondary" />
                    <svg className="size-5 text-primary cursor-pointer hover:text-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor" id="moon"><path fillRule="evenodd" clipRule="evenodd" d="M17.4 17.9A10 10 0 0 1 6.1 6.6a8 8 0 0 0 11.3 11.3Zm1.9-2.6a8 8 0 0 1-9.77-12c.29-.4-.03-1-.5-.85a9.93 9.93 0 0 0-1.81.77 10 10 0 1 0 14.33 11.75c.15-.47-.45-.79-.85-.5a8.08 8.08 0 0 1-1.4.82Z" /></svg>
                </div>
            </nav>

            <div className={`bg-[#373737]/40 w-full ${showRadiosMenu ? 'h-fit' : 'h-0'} overflow-y-hidden overflow-x-auto absolute top-20 z-10 transition-all duration-500 ease-in-out`}>
                <div className="flex flex-row gap-6 items-center justify-center p-4">
                    <div className='bg-foreground h-10 w-20 rounded-md hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer'></div>
                    <div className='bg-red-500 h-10 w-20 rounded-md hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer'></div>
                    <div className='bg-yellow-400 h-10 w-20 rounded-md hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer'></div>
                    <div className='bg-blue-500 h-10 w-20 rounded-md hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer'></div>
                    <div className='bg-purple-500 h-10 w-20 rounded-md hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer'></div>
                    <div className='bg-pink-800 h-10 w-20 rounded-md hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer'></div>
                    <div className='bg-pink-500 h-10 w-20 rounded-md hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer'></div>
                    <div className='bg-green-400 h-10 w-20 rounded-md hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer'></div>
                </div>
            </div>

            <div className={`bg-nav-menu w-full ${showCategoriesMenu ? 'h-fit' : 'h-0'} absolute top-20 transition-all overflow-y-hidden duration-500 z-10`}>
                <ul className="h-auto max-h-72 column-4 flex flex-col gap-8 py-14 px-44">
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
            </div>
        </>
    )
}
