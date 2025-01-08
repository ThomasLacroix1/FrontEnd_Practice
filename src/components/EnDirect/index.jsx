import Card from '../Basics/Card';
import React from 'react';
import Button from '../Basics/Button';

export default function EnDirect() {
    const [isScrollable, setIsScrollable] = React.useState(false);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(false);
    const containerRef = React.useRef(null);

    const checkScroll = () => {
        const { current } = containerRef;
        if (current) {
            setIsScrollable(current.scrollWidth > current.clientWidth);
            setCanScrollLeft(current.scrollLeft > 0);
            setCanScrollRight(current.scrollLeft + current.clientWidth < current.scrollWidth);
        }
    };

    React.useEffect(() => {
        checkScroll();
        const { current } = containerRef;
        if (current) {
            current.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            if (current) {
                current.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            }
        };
    }, []);

    const scrollLeft = () => {
        const { current } = containerRef;
        if (current) {
            current.scrollBy({ left: -600, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        const { current } = containerRef;
        if (current) {
            current.scrollBy({ left: 600, behavior: 'smooth' });
        }
    };

    return (
        <div className='ml-5 lg:pl-72 lg:pr-72 flex flex-col gap-4 mb-20'>
            <div className='flex items-center justify-start gap-2'>
                <span className='rounded-full size-2 bg-red-500'></span>
                <h2 className='text-xl lg:text-4xl font-semibold'>En direct</h2>
            </div>
            <div className='relative w-full h-fit group'>
                <div className='flex overflow-x-scroll gap-4' ref={containerRef}>
                    {[...Array(8)].map((_, index) => (
                        <Card key={index} />
                    ))}
                </div>
                {isScrollable && canScrollRight && (
                    <div className="absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
                )}
                {isScrollable && canScrollLeft && (
                    <div className="absolute left-0 top-0 h-full w-14 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                )}
                {isScrollable && canScrollLeft && (
                    <Button
                        className='absolute left-8 top-1/2 transform -translate-y-1/2 z-50 opacity-0 group-hover:opacity-100 transition-opacity'
                        icon='left-arrow'
                        variant='icon'
                        onClick={scrollLeft}
                    >
                    </Button>
                )}
                {isScrollable && canScrollRight && (
                    <Button
                        className='absolute right-8 top-1/2 transform -translate-y-1/2 z-50 opacity-0 group-hover:opacity-100 transition-opacity'
                        icon='right-arrow'
                        variant='icon'
                        onClick={scrollRight}
                    >
                    </Button>
                )}
            </div>
        </div>
    );
}