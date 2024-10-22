import { Routes, Route } from 'react-router-dom'; // Assurez-vous d'importer ces composants
import Connections from './assets/page/connections'; // Votre composant de connexion (modifiez le chemin si nécessaire)
import Menu from './assets/component/Menu'; // Votre composant de menu (modifiez le chemin si nécessaire)
import FicheClients from './assets/page/Ficheclients'; // Votre composant de fiche clients (modifiez le chemin si nécessaire)
import Listeclients from './assets/page/Listeclients.tsx'


function App() {
    return (
        <Routes>
            <Route path="/" element={<Connections />} /> {/* Page de connexion par défaut */}
            <Route path="/menu" element={<Menu />} /> {/* Chemin pour le menu */}
            <Route path="/ficheclients" element={<FicheClients />} /> {/* Chemin pour les fiches clients */}
            <Route path="/listeclients" element={<Listeclients />} />
            {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
    );
}

export default App;