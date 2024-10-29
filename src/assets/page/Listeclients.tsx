import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Ordilan from '../image/Logo-ordilan-png-1024x295.png';

interface Client {
    id: number;
    nom: string;
    prenom: string;
    adresse: string;
    telephone: string;
    materiels: string;
    etat: string;
    date: string;
    email: string;
}

const Listeclients: React.FC = () => {
    const [clients, setClients] = useState<Client[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get("http://localhost:3000/clients");
                setClients(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des clients:", error);
            }
        };

        fetchClients();
    }, []);

    const handleDelete = async (id: number) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce client ? ")) {
            try {
                await axios.delete(`http://localhost:3000/clients/${id}`);
                setClients(clients.filter(client => client.id !== id));
            } catch (error) {
                console.error('Erreur lors de la suppression du client:', error);
            }
        }
    };

    const handleEdit = (client: Client) => {
        navigate("/Ficheclients", { state: { client } });
    }

    const handleClose = () => {
        navigate('/Menu');
    };

    return (
        <div>
            <section id='logo et titre' className="flex flex-row items-center justify-center mb-7"> {/* Conteneur pour le logo et le titre */}
                <img src={Ordilan} alt="Logo Ordilan" className="h-40 mt-1" style={{ padding: "1px", margin: "10px" }} />
                <h1 className="text-4xl md:text-6xl text-black ml-80">Liste des Clients</h1>
            </section>

            <section id="tableau" className="overflow-x-auto"> {/* Conteneur pour le tableau avec défilement horizontal */}
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
                                    <td className="border px-1 py-1 text-white text-xs md:text-sm flex space-x-1">
                                        <button className="px-2 py-1 text-white bg-red-500 rounded" onClick={() => handleDelete(client.id)}>
                                            Supprimer
                                        </button>
                                        <button className="px-2 py-1 text-white bg-blue-700 rounded" onClick={() => handleEdit(client)}>
                                            Modifier
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </section>

            <button className="mt-4 px-4 py-2 text-white bg-blue-700 rounded" onClick={handleClose}>
                Retour
            </button>
        </div>
    );
};

export default Listeclients;
