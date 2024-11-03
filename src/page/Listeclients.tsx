import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ordilan from "../assets/image/Logo-ordilan-png-1024x295.png";
import { fetchClients, deleteClient, Client } from "../services/clientService";

const Listeclients: React.FC = () => {
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    // Chargement des clients
    useEffect(() => {
        const loadClients = async () => {
            try {
                const response = await fetchClients();
                setClients(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des clients:", error);
                setError("Erreur lors de la récupération des clients.");
            } finally {
                setLoading(false);
            }
        };
        loadClients();
    }, []);

    // Suppression d'un client
    const handleDelete = async (id: number) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce client ?")) {
            try {
                await deleteClient(id);
                setClients((prevClients) => prevClients.filter(client => client.id !== id));
            } catch (error) {
                console.error("Erreur lors de la suppression du client:", error);
                setError("Erreur lors de la suppression du client.");
            }
        }
    };

    // Modification d'un client
    const handleEdit = (client: Client) => {
        navigate("/Ficheclients", { state: { client } });
    };

    // Retour au menu
    const handleClose = () => {
        navigate("/Menu");
    };

    return (
        <div className="p-4">
            {/* Logo et titre */}
            <section id="logo-et-titre" className="flex items-center justify-center mb-7 flex-wrap">
                <img src={Ordilan} alt="Logo Ordilan" className="h-40" />
                <h1 className="text-4xl md:text-6xl text-black ml-4">Liste des Clients</h1>
            </section>

            {/* Affichage des erreurs */}
            {error && <div className="text-red-500 text-center mb-4">{error}</div>}

            {/* Tableau des clients */}
            <section id="tableau" className="overflow-x-auto">
                {loading ? (
                    <p className="text-center py-4">Chargement des clients...</p>
                ) : (
                    <table className="min-w-full border-collapse border bg-blue-900">
                        <thead>
                            <tr>
                                {["Id", "Nom", "Prénom", "Adresse", "Téléphone", "Matériels", "État", "Date", "Email", "Actions"].map((header) => (
                                    <th key={header} className="px-2 py-1 border border-gray-300 text-accent-50 text-xs md:text-sm">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {clients.length === 0 ? (
                                <tr>
                                    <td colSpan={10} className="text-center py-4 text-xs md:text-sm">Aucun client trouvé</td>
                                </tr>
                            ) : (
                                clients.map((client) => (
                                    <tr key={client.id}>
                                        <td className="border px-1 py-1 text-white text-xs md:text-sm">{client.id}</td>
                                        <td className="border px-1 py-1 text-white text-xs md:text-sm">{client.nom}</td>
                                        <td className="border px-1 py-1 text-white text-xs md:text-sm">{client.prenom}</td>
                                        <td className="border px-1 py-1 text-white text-xs md:text-sm">{client.adresse}</td>
                                        <td className="border px-1 py-1 text-white text-xs md:text-sm">{client.telephone}</td>
                                        <td className="border px-1 py-1 text-white text-xs md:text-sm">{client.materiels}</td>
                                        <td className="border px-1 py-1 text-white text-xs md:text-sm">{client.etat}</td>
                                        <td className="border px-1 py-1 text-white text-xs md:text-sm">{client.date}</td>
                                        <td className="border px-1 py-1 text-white text-xs md:text-sm">{client.email}</td>
                                        <td className="border px-1 py-1 text-white text-xs md:text-sm">
                                            <div className="flex justify-center space-x-2">
                                                <button className="px-2 py-1 text-white bg-red-500 rounded" onClick={() => handleDelete(client.id)}>
                                                    Supprimer
                                                </button>
                                                <button className="px-2 py-1 text-white bg-blue-700 rounded" onClick={() => handleEdit(client)}>
                                                    Modifier
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                )}
            </section>

            {/* Bouton Retour */}
            <div className="mt-2 flex space-x-4">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleClose}>
                    Retour
                </button>
            </div>
        </div>
    );
};

export default Listeclients;
