import Logo from "@/components/Basics/Logo";

export default function DesktopNav() {
    return (
        <nav className="bg-gray-500 flex flex-row justify-between items-center h-16 text-white">
            <div className="flex flex-row gap-2">
                <a href="#" className="text-white">Radios</a>
                <a href="#" className="text-white">Podcasts</a>
                <a href="#" className="text-white">Catégories</a>
                <a href="#" className="text-white">Musique</a>
                <a href="#" className="text-white">Enfants</a>
            </div>
            <Logo className="h-26" />
            <div>
                <div>
                    <p>Rechercher</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <hr className="h-4" />
                <div>
                    <p>Bibliothèque</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                        />
                    </svg>
                </div>
                <hr className="h-4" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m8.66-12.34l-.71-.71M4.05 19.95l-.71-.71m16.97 0l-.71.71M4.05 4.05l-.71.71M21 12h-1M4 12H3m16.66 4.34l-.71.71M4.05 4.05l-.71.71"
                    />
                </svg>
            </div>
        </nav>
    )
}