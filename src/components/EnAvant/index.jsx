import { useEffect, useState } from "react";
import Button from "../Basics/Button";

export default function EnAvant() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const navElement = document.querySelector("nav");
    if (navElement) {
      setNavHeight(navElement.offsetHeight);
    }
  }, []);

  return (
    <div
      className="css-overlay relative h-[32rem] lg:h-[44rem] flex flex-col justify-end"
      style={{ paddingTop: navHeight }}
    >
      <img
        src="./en-avant.png"
        alt="Image mise en avant"
        className="w-full h-full object-cover top-0 absolute -z-10 filter lg:filter-none"
        style={{ filter: "opacity(55%)" }}
      />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent lg:hidden -z-10"></div>
      <div className="sm:mx-auto lg:mx-0 z-10 px-6 lg:px-0 lg:pl-72 lg:pr-96 mb-10 lg:mb-30 flex flex-col gap-4 w-full">
        <div className="bg-red-500 size-10 rounded-md"></div>
        <p className="text-foreground lg:text-lg uppercase">L'invité de 6h20</p>
        <h1 className="text-xl lg:text-4xl font-bold text-foreground cursor-pointer relative header-title">
          Eaux en bouteille : Le Sénat va auditionner "l'ensembre des
          professionnels de ce secteur"
        </h1>
        <p className="text-foreground lg:text-lg">
          Le Sénat ouvre une commission d'enquête sur l'industrie de l'eau en
          bouteille. Son président, le sénateur LR Laurent Burgoa, détaille les
          enjeux et les méthodes d'investigation.
        </p>
        <div className="flex flex-row gap-4">
          <Button variant="primary" icon="play" size="lg">
            Écouter l'épisode (8 min)
          </Button>
          <Button
            variant="secondary"
            icon="save"
            size="lg"
            hiddenText="Écouter plus tard"
          ></Button>
        </div>
      </div>
    </div>
  );
}
