import Logo from "../Basics/Logo";

export default function Footer() {
  return (
    <footer className="bg-transparent text-primary pt-10 px-8 pb-8 border-t border-secondary text-xs lg:pl-72 lg:pr-[35rem]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <Logo className="w-32"/>

        <div className="flex flex-col gap-4">
          <h4 className="text-foreground font-semibold text-md">
            Toutes les radios
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#" className="hover:text-foreground">
                France Inter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                franceinfo
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                France Culture
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                France Musique
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Fip
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Mouv'
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-foreground font-semibold text-md">Radio France</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#" className="hover:text-foreground">
                La Maison de la Radio et de la Musique
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                L'entreprise Radio France
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Les Éditions Radio France
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Personnalités
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Sujets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Archives
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Fréquences
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Index
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Flux RSS
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-foreground font-semibold text-md">
            Aide et contacts
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#" className="hover:text-foreground">
                Nous contacter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Comment écouter Radio France
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Questions fréquentes (FAQ)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                La Médiatrice
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Votre avis sur le site
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-8 lg:gap-16">
            <div className="flex flex-col gap-4">
                <h4 className="text-foreground font-semibold text-md">
                    Informations légales
                </h4>
                <ul className="flex flex-col gap-3">
                    <li>
                    <a href="#" className="hover:text-foreground">
                        Accessibilité : non-conforme
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-foreground">
                        Gestion des cookies
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-foreground">
                        Mentions légales
                    </a>
                    </li>
                </ul>
            </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-foreground font-semibold">
              Télécharger l'application mobile
            </h4>
            <div className="flex gap-4">
              <a href="#">
                <img
                  src="google-play.svg"
                  alt="Google Play"
                  className="h-8 lg:h-10"
                />
              </a>
              <a href="#">
                <img src="app-store.svg" alt="App Store" className="h-8 lg:h-10" />
              </a>
            </div>
        </div>
          
        </div>
      </div>
    </footer>
  );
}
