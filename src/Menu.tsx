import Fond from './assets/image/Fond Circuit électronique.png'; // Assurez-vous que le chemin est correct
import FicheClient from'./assets/image/Fiche Client.png'
import ListeClients from'./assets/image/Liste Clients.png'
import HistoriqueClients from'./assets/image/Historique Clients.png'
import FicheTravaux from'./assets/image/Fiche Travaux.png'
import VenteMateriel from'./assets/image/Vente de Matériel.png'
import Paimenent from'./assets/image/Paiement.png'
import Devis from './assets/image/Devis.png'
import Gaetan from './assets/image/Gaëtan.png'
import {useNavigate} from "react-router-dom";

function Menu() {
    const navigate = useNavigate()
    const onButtonClick = (path) => {
        navigate(path);

    }
    return (
        <div className='flex items-center justify-center h-screen overflow-hidden '>
            <img src={Fond} alt="image de fond" className='object-center  absolute inset-0 w-full max-h-full'/>
            <img src={FicheClient} alt='Fiche Clients'  className="absolute h-52 bottom-5 right-96 cursor-pointer " onClick={() => onButtonClick('/Ficheclients')}/>
            <img src={ListeClients} alt='Liste Clients' className="absolute h-52 right-52 cursor-pointer " onClick={onButtonClick}/>
            <img src={HistoriqueClients} alt='Historique Clients' className="absolute top-6 h-52 right-80 cursor-pointer" onClick={onButtonClick}/>
            <img src={FicheTravaux} alt='fiche travaux' className="absolute top-0 h-52 cursor-pointer" onClick={onButtonClick}/>
            <img src={VenteMateriel} alt='Vente de Materiels' className="absolute h-52 top-3.5 left-72 cursor-pointer" onClick={onButtonClick}/>
            <img src={Paimenent} alt='Paiement' className="absolute h-52 top-62 left-52 cursor-pointer" onClick={onButtonClick}/>
            <img src={Devis} alt='Devis' className= "absolute bottom-5 left-96 h-52 cursor-pointer" onClick={onButtonClick}/>
            <img src={Gaetan} alt="Gaetan" className="absolute h-52 cursor-pointer"/>
        </div>


)
    ;
}

export default Menu; // Correction de l'exportation par défaut