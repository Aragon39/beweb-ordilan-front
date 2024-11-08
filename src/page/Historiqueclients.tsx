import { useState, useEffect } from "react";
import Ordilan from "../assets/image/Logo-ordilan-png-1024x295.png";
import { fetchClients } from "../services/clientService"; // Importation de la fonction fetchClients

// Définir explicitement le type de `clients` comme étant un tableau de type `Client`
import { Client } from "../services/clientService"; // Importation du type Client

function Historiqueclients() {
  // Définir le type explicite pour l'état clients comme étant un tableau de `Client`
  const [clients, setClients] = useState<Client[]>([]);

  // Utiliser useEffect pour récupérer les clients au chargement du composant
  useEffect(() => {
    const getClients = async () => {
      try {
        const response = await fetchClients(); // Appel à la fonction fetchClients
        setClients(response.data); // Supposons que response.data contient la liste des clients
      } catch (error) {
        console.error("Erreur lors de la récupération des clients", error);
      }
    };

    getClients();
  }, []); // Se lance uniquement au montage du composant

  return (
    <div className="p-4">
      {/* Titre et logo */}
      <section
        id="Titre et logo"
        className="flex items-center justify-center mb-7 flex-wrap"
      >
        <img src={Ordilan} alt="logo Ordilan" className="h-40 mb-4 md:mb-0" />
        <h1 className="text-6xl text-black md:text-left md:ml-12">Historique Clients</h1>
      </section>

      {/* Tableau des clients */}
      <section id="tableau" className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              {[
                "ID",
                "NOM",
                "PRENOM",
                "MATERIELS",
                "INTERVENANT",
                "DATE ET HEURE DE DEBUT",
                "DATE ET HEURE DE FIN",
                "LA MARQUE DE LA MACHINE",
                "NATURE DE L'INTERVENTION",
                "OBSERVATION",
                "DESCRIPTION",
              ].map((header) => (
                <th
                  key={header}
                  className="px-2 py-1 border border-gray-700 bg-blue-700 text-customWhite text-base md:text-base"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Affichage dynamique des données */}
            {clients.length > 0 ? (
              clients.map((client) => (
                <tr key={client.id}>
                  <td className="px-2 py-1 border border-gray-700">{client.id}</td>
                  <td className="px-2 py-1 border border-gray-700">{client.nom}</td>
                  <td className="px-2 py-1 border border-gray-700">{client.prenom}</td>
                  <td className="px-2 py-1 border border-gray-700">{client.materiels}</td>
                  <td className="px-2 py-1 border border-gray-700">{client.intervenant}</td>
                  <td className="px-2 py-1 border border-gray-700">{client.dateEtHeureDeDebut}</td>
                  <td className="px-2 py-1 border border-gray-700">{client.dateEtHeureDeFin}</td>
                  <td className="px-2 py-1 border border-gray-700">{client.marqueDeLaMachine}</td>
                  <td className="px-2 py-1 border border-gray-700">{client.observation}</td>
                  <td className="px-2 py-1 border border-gray-700">{client.natureDeLintervention}</td>
                  <td className="px-2 py-1 border border-gray-700">{client.descriptions}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={11} className="px-2 py-1 text-center border border-gray-700">
                  Aucun client trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Historiqueclients;
