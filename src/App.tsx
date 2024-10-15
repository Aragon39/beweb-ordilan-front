import { Routes, Route } from 'react-router-dom'; // Assurez-vous d'importer ces composants
import Connections from './connections'; // Votre composant de connexion
import Menu from './Menu'; // Votre composant de menu

function App() {
    return (
        <Routes>
            <Route path="/" element={<Connections />} />
            <Route path="/menu" element={<Menu />} />
            {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
    );
}

export default App;