import { Routes, Route } from "react-router-dom"; // Assurez-vous d'importer ces composants
import { Elements } from "@stripe/react-stripe-js"; // Importation de Stripe Elements
import { loadStripe } from "@stripe/stripe-js"; // Charger Stripe avec votre clé publique
import Connections from "./page/Connections"; // Utiliser le même casing
import Menu from "./component/Menu"; // Votre composant de menu
import FicheClients from "./page/Ficheclients"; // Votre composant de fiche clients
import ListeClients from "./page/Listeclients"; // Composant pour la liste des clients
import Historiqueclients from "./page/Historiqueclients";
import Devis from "./page/Devis"; // Composant pour les devis
import PaiementForm from "./component/PaiementForm"; // Formulaire de paiement
import "./index.css"; // Importation de votre fichier CSS global

// Charger votre clé publique Stripe en mode test
const stripePromise = loadStripe(
  "pk_test_51QWzym2L2TokrDk9TMPAk1uvSkz1pDAcPd3QG0pUW1OxqRlRoP0AeM0FBqQXyaBndmkWIfxQ9PaAQ4EoCq7x2LTJ004EP0Qq6M"
);

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Connections />} />{" "}
        {/* Page de connexion par défaut */}
        <Route path="/menu" element={<Menu />} /> {/* Chemin pour le menu */}
        <Route path="/ficheclients" element={<FicheClients />} />{" "}
        {/* Chemin pour les fiches clients */}
        <Route path="/listeclients" element={<ListeClients />} />{" "}
        {/* Chemin pour la liste des clients */}
        <Route path="/devis" element={<Devis />} />{" "}
        {/* Correction de la casse du chemin */}
        <Route path="/Historiqueclients" element={<Historiqueclients />} />
        {/* Route pour le formulaire de paiement */}
        <Route
          path="/paiementForm"element={<Elements stripe={stripePromise}><PaiementForm clientName={"gaetan finiels"} price={0} /></Elements>}/>
        {/* Ajoutez d'autres routes ici si nécessaire */}
      </Routes>
    </div>
  );
}

export default App;
