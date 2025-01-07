export default function Card() {
    return (
        <div class="w-68 h-[33rem] rounded-lg overflow-hidden flex flex-col">
            <div class="relative h-5/6 bg-foreground">
                <img src="/card-image.png" alt="Affaire Sensibles" class="w-full h-full object-cover"/>
                <div class="absolute top-0 right-0 bg-red-500 text-white text-sm p-8">
                </div>
            </div>
            {/* <div class="flex flex-col justify-between p-4 h-1/3">
                <div>
                <h2 class="text-lg font-bold text-black">AFFAIRES SENSIBLES</h2>
                <p class="text-sm text-gray-600">
                    L’affaire des caricatures de Mahomet...
                </p>
                </div>
                <p class="text-xs text-gray-500 mt-2">Tout France Inter</p>
            </div>
            <div class="absolute bottom-4 right-4 w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-md">
                <button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-6.008 3.451A1 1 0 018 13.651V7.349a1 1 0 011.496-.868l6.008 3.451a1 1 0 010 1.736z" />
                </svg>
                </button>
            </div> */}
        </div>
    )
}