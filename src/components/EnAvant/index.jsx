import { useEffect, useState } from 'react';
import Button from '../Basics/Button';

export default function EnAvant() {
    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        const navElement = document.querySelector('nav');
        if (navElement) {
            setNavHeight(navElement.offsetHeight);
        }
    }, []);

    return (
        <div className="lg:css-overlay relative h-[32rem] lg:h-[40rem] flex flex-col justify-end" style={{ paddingTop: navHeight }}>
            <img src="/en-avant.png" alt="Image mise en avant" className="w-full h-full object-cover top-0 absolute -z-10 filter lg:filter-none" style={{ filter: 'opacity(55%)' }} />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent lg:hidden -z-10"></div>
            <div className="container mx-auto z-10 px-6 lg:px-56 mb-10 lg:mb-24 flex flex-col gap-2 lg:gap-4 lg:max-w-3/4">
                <div className='bg-red-500 size-10 rounded-md'></div>
                <p className='text-white lg:text-lg uppercase'>L'invité de 6h20</p>
                <h1 className="text-xl lg:text-4xl font-bold text-white">Eaux en bouteille : Le Sénat va auditionner "l'ensembre des professiionnels de ce secteur"</h1>
                <p className="text-white lg:text-lg">Le Sénat ouvre une commission d'enquête sur l'industrie de l'eau en bouteille. Son président, le sénateur LR Laurent Burgoa, détaille les enjeux et les méthodes d'investigation.</p>
                <Button variant="primary">Hello</Button>
            </div>
        </div>
    )
}