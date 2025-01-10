import Button from "../Button"

export default function Card() {
    return (
        <div className="md:w-34 md:h-[16.5rem] lg:w-68 lg:h-[33rem] min-w-68 min-h-[33rem] flex flex-col">
            <div className="relative h-5/6 bg-foreground rounded-lg overflow-hidden cursor-pointer">
                <img src="./card-image.png" alt="Affaire Sensibles" className="w-full h-full object-cover"/>
                <div className="absolute top-0 left-0 w-full h-full bg-black/25"></div>
                <div className="absolute top-0 right-0 bg-red-500 text-white text-sm p-7 rounded-bl-xs">
                </div>
                <Button hiddenText="Écouter" variant="reverse" icon="play" className="absolute right-2 bottom-2"></Button>
            </div>
             <div className="flex flex-col justify-between h-1/6 pt-1 cursor-pointer">
                <div>
                    <h2 className="text-lg font-bold text-foreground">AFFAIRES SENSIBLES</h2>
                    <p className="text-sm text-foreground">
                        L’affaire des caricatures de Mahomet...
                    </p>
                </div>
                <p className="text-xs text-gray-400 hover:text-gray-300 cursor-pointer">Tout France Inter</p>
            </div>
        </div>
    )
}