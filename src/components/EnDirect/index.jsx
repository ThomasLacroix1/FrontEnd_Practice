import Card from '../Basics/Card';

export default function EnDirect() {
    return (
        <div className='ml-5 lg:pl-72 flex flex-col gap-4 mb-20'>
            <div className='flex items-center justify-start gap-2'>
                <span className='rounded-full size-2 bg-red-500'></span>
                <h2 className='text-xl lg:text-4xl font-semibold'>En direct</h2>
            </div>
            <Card />
        </div>
    );
}