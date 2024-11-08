import { Routes, Route } from 'react-router-dom'; // Assurez-vous d'importer ces composants
import Connections from './page/Connections'; // Utiliser le même casing
import Menu from './component/Menu'; // Votre composant de menu
import FicheClients from './page/Ficheclients'; // Votre composant de fiche clients
import ListeClients from './page/Listeclients'; // Composant pour la liste des clients
import Historiqueclients from './page/Historiqueclients';
import Devis from './page/Devis'; // Composant pour les devis
import './index.css'; // Importation de votre fichier CSS global

function App() {
    return (
        <div className="app-container"> {/* Conteneur principal pour le style, si nécessaire */}
            <Routes>
                <Route path="/" element={<Connections />} /> {/* Page de connexion par défaut */}
                <Route path="/menu" element={<Menu />} /> {/* Chemin pour le menu */}
                <Route path="/ficheclients" element={<FicheClients />} /> {/* Chemin pour les fiches clients */}
                <Route path="/listeclients" element={<ListeClients />} /> {/* Chemin pour la liste des clients */}
                <Route path="/devis" element={<Devis />} /> {/* Correction de la casse du chemin */}
                <Route path="/Historiqueclients" element={<Historiqueclients />} />

                {/* Ajoutez d'autres routes ici si nécessaire */}
            </Routes>
        </div>
    );
}

export default App;
