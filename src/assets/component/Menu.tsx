import FicheClient from '../image/Fiche Client.png'
import ListeClients from '../image/Liste Clients.png'
import HistoriqueClients from '../image/Historique Clients.png'
import FicheTravaux from '../image/Fiche Travaux.png'
import VenteMateriel from '../image/Vente de Matériel.png'
import Paimenent from '../image/Paiement.png'
import Devis from '../image/Devis.png'
import Gaetan from '../image/Gaëtan.png'
import {useNavigate} from "react-router-dom";

function Menu() {
    const navigate = useNavigate(); // Initialisation de useNavigate

    // Fonction pour naviguer vers le chemin spécifié
    const onButtonClick = (path: string) => {
        navigate(path);
    };
    return (
        <nav className={`h-screen w-screen overflow-hidden bg-menu bg-cover`}>

            <div className=' relative flex  items-center justify-center h-screen overflow-hidden '>
                <img src={FicheClient} alt='Fiche Clients' className="absolute h-52 bottom-5 right-96 cursor-pointer " onClick={() => onButtonClick('/ficheclients')}/>
                <img src={ListeClients} alt='Liste Clients' className="absolute h-52 right-52 cursor-pointer " onClick={() => onButtonClick('')}/>
                <img src={HistoriqueClients} alt='Historique Clients' className="absolute top-6 h-52 right-80 cursor-pointer" onClick={() => onButtonClick('')}/>
                <img src={FicheTravaux} alt='fiche travaux' className="absolute top-0 h-52 cursor-pointer" onClick={() => onButtonClick('')}/>
                <img src={VenteMateriel} alt='Vente de Materiels' className="absolute h-52 top-3.5 left-72 cursor-pointer" onClick={() => onButtonClick('')}/>
                <img src={Paimenent} alt='Paiement' className="absolute h-52 top-62 left-52 cursor-pointer" onClick={() => onButtonClick('')}/>
                <img src={Devis} alt='Devis' className="absolute bottom-5 left-96 h-52 cursor-pointer" onClick={() => onButtonClick('')}/>
                <img src={Gaetan} alt="Gaetan" className="absolute h-52 cursor-pointer"/>

            </div>

        </nav>


    )
        ;
}

export default Menu; // Correction de l'exportation par défaut