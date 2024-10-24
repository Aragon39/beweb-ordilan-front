import FicheClient from '../image/FicheClient.png';
import ListeClients from '../image/Liste Clients.png';
import HistoriqueClients from '../image/Historique Clients.png';
import FicheTravaux from '../image/Fiche Travaux.png';
import VenteMateriel from '../image/Vente de Matériel.png';
import Paimenent from '../image/Paiement.png';
import Devis from '../image/Devis.png';
import Gaetan from '../image/Gaëtan.png';
import {useNavigate} from "react-router-dom";

function Menu() {
    const navigate = useNavigate(); // Initialisation de useNavigate

    // Fonction pour naviguer vers le chemin spécifié
    const onButtonClick = (path: string) => {
        navigate(path);
    };

    return (
        <nav className="h-screen w-screen flex justify-center items-center bg-menu bg-cover">

            <div
                className={`relative w-[900px] h-[900px] flex items-center justify-center overflow-hidden animate-slideIn`}>
                {/* Fiche Clients */}
                <img src={FicheClient} alt='Fiche Clients'
                     className="absolute top-8 left-1/4 transform -translate-x-1/4 cursor-pointer h-48 animate-slideIn"
                     onClick={() => onButtonClick('/ficheclients')}
                />

                {/* Liste Clients */}
                <img src={ListeClients} alt='Liste Clients'
                     className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer h-48 animate-slideIn"
                     onClick={() => onButtonClick('/Listeclients')}
                />

                {/* Historique Clients */}
                <img src={HistoriqueClients} alt='Historique Clients'
                     className="absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer h-48 animate-slideIn"
                     onClick={() => onButtonClick('')}
                />

                {/* Fiche Travaux */}
                <img src={FicheTravaux} alt='Fiche Travaux'
                     className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer h-48 "
                     onClick={() => onButtonClick('')}
                />

                {/* Vente Materiel */}
                <img src={VenteMateriel} alt='Vente de Materiel'
                     className="absolute left-16 bottom-16 cursor-pointer h-48 animate-slideIn"
                     onClick={() => onButtonClick('')}
                />

                {/* Paiement */}
                <img src={Paimenent} alt='Paiement'
                     className="absolute right-16 bottom-16 cursor-pointer h-48"
                     onClick={() => onButtonClick('')}
                />

                {/* Devis */}
                <img src={Devis} alt='Devis'
                     className="absolute right-52 top-16 cursor-pointer h-48 animate-slideIn"
                     onClick={() => onButtonClick('')}
                />
                <img src={Gaetan} alt="Gaetan" className="h-56 w-56"/>
            </div>


        </nav>
    );
}

export default Menu;





