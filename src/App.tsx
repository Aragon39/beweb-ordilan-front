import { Routes, Route } from 'react-router-dom'; // Assurez-vous d'importer ces composants
import Connections from './page/connections'; // Votre composant de connexion (modifiez le chemin si nécessaire)
import Menu from './component/Menu'; // Votre composant de menu (modifiez le chemin si nécessaire)
import FicheClients from './page/Ficheclients'; // Votre composant de fiche clients (modifiez le chemin si nécessaire)
import ListeClients from './page/Listeclients';
import FicheDintervention from './page/FicheDintervention';
import './index.css'


function App() {
    return (
        <Routes>
            <Route path="/" element={<Connections />} /> {/* Page de connexion par défaut */}
            <Route path="/menu" element={<Menu />} /> {/* Chemin pour le menu */}
            <Route path="/ficheclients" element={<FicheClients />} /> {/* Chemin pour les fiches clients */}
            <Route path="/listeclients" element={<ListeClients />} /> {/* Chemin pour la liste des clients */}
            <Route path="/FicheDintervention" element={<FicheDintervention />} />

            {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
    );
}

export default App;
