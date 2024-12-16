import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Ordilan from "../assets/image/Logo-ordilan-png-1024x295.png";
import { fetchClients, Client } from "../services/clientService"; 

function Historiqueclients() {
  const [clients, setClients] = useState<Client[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Récupération des clients depuis le service
  useEffect(() => {
    const getClients = async () => {
      try {
        const response = await fetchClients();
        setClients(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des clients", error);
      }
    };
    getClients();
  }, []);

  // Fonction pour gérer la redirection du bouton "Retour"
  const handleClose = () => {
    if (location.state?.from === "listeclients") {
      // Si on vient de listeclients, revenir à listeclients
      navigate("/listeclients");
    } else if (location.state?.from === "menu") {
      // Si on vient du menu, revenir au menu
      navigate("/menu");
    } else {
      // Si on ne peut pas déterminer l'origine, on retourne au menu par défaut
      navigate("/menu");
    }
  };

  return (
    <div className="p-4">
      <section
        id="Titre et logo"
        className="flex items-center justify-center mb-7 flex-wrap"
      >
        <img src={Ordilan} alt="logo Ordilan" className="h-40 mb-4 md:mb-0" />
        <h1 className="text-6xl text-black md:text-left md:ml-12">Historique Clients</h1>
      </section>

      <section id="tableau" className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              {[
                "ID", "NOM", "PRENOM", "MATERIELS", "INTERVENANT",
                "DATE ET HEURE DE DEBUT", "DATE ET HEURE DE FIN", "LA MARQUE DE LA MACHINE",
                "NATURE DE L'INTERVENTION", "OBSERVATION", "DESCRIPTION",
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
            {clients.length > 0 ? (
              clients.map((client) => (
                <tr key={client.id}>
                  <td className="px-2 py-1 border border-gray-700 text-center">{client.id}</td>
                  <td className="px-2 py-1 border border-gray-700 text-center">{client.nom}</td>
                  <td className="px-2 py-1 border border-gray-700 text-center">{client.prenom}</td>
                  <td className="px-2 py-1 border border-gray-700 text-center">{client.materiels}</td>
                  <td className="px-2 py-1 border border-gray-700 text-center">{client.intervenant}</td>
                  <td className="px-2 py-1 border border-gray-700 text-center">{client.dateEtHeureDeDebut}</td>
                  <td className="px-2 py-1 border border-gray-700 text-center">{client.dateEtHeureDeFin}</td>
                  <td className="px-2 py-1 border border-gray-700 text-center">{client.marqueDeLaMachine}</td>
                  <td className="px-2 py-1 border border-gray-700 text-center">{client.natureDeLintervention}</td>
                  <td className="px-2 py-1 border border-gray-700 text-center">{client.observation}</td>
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

      <div className="mt-2 flex space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={handleClose}
        >
          Retour
        </button>
      </div>
    </div>
  );
}

export default Historiqueclients;
