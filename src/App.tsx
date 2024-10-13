
import { Routes, Route } from 'react-router-dom'; // Importez Routes et Route
import LogoAplication from './logoaplication'; // Importer le composant LogoAplication
import Connections from './connections'; // Importer le composant Connections

function App() {
    return (
        <div>
            <Routes>
                <Route
                    path="/" element={
                    <div className="h-dvh w-full">
                        <LogoAplication/> {/* Affichez le logo ici */}
                    </div>
                }/>
                <Route path="/connections" element={<Connections />} /> {/* Route vers la page de connexion */}
            </Routes>
        </div>
    );
}

export default App;