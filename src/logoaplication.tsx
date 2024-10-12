import { useState } from 'react';
import logoD from './assets/image/logo D .png';
import logoG from './assets/image/logo G .png';

function Logoaplication() {
    const [isMoved, setIsMoved] = useState(false); // État pour savoir si les images sont déplacées

    // Fonction pour gérer le clic sur les images
    const handleClick = () => {
        setIsMoved(!isMoved); // Inverse l'état de déplacement
    };

    return (
        <div className="flex justify-between mx-4 transition-all duration-300">
            <img
                className={`w-1/2 h-dvh     transition-transform duration-300 ${isMoved ? '-translate-x-[150%]' : ''}`} // Déplace à gauche
                src={logoG}
                alt="logoG"
                onClick={handleClick} // Ajout de l'événement de clic
            />
            <img
                className={`w-1/2 h-dvh   transition-transform duration-300 ${isMoved ? 'translate-x-[150%]' : ''}`} // Déplace à droite
                src={logoD}
                alt="logoD"
                onClick={handleClick} // Ajout de l'événement de clic
            />
        </div>
    );
}

export default Logoaplication;
