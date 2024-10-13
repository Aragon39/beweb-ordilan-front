import Logo from './assets/image/logo-application.png'
import React from "react";
import { Link } from 'react-router-dom'; // Importez Link


const logoaplication: React.FC = () => {
    const handleClick = () => {
        console.log('Logo cliqué');
    };

    return (
        <Link to="/connections">
            <img className="bg-cover bg-center h-dvh w-full cursor-pointer"  src={Logo} alt="Logo de l'application" onClick={handleClick}/> {/* Utilisation correcte de la variable Logo */}
        </Link>
    )
}

export default logoaplication;
