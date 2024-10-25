import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
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
    }, []); // Le tableau vide signifie que l'effet s'exécute une seule fois lors du montage

    // FONCTION POUR SUPPRIMER LE CLIENTS
    const handleDelete = async (id: number) => {
        if (window.confirm("ête vous sûr de vouloir supprimer ce clients ? ")){
            try{
                await axios.delete(`http://localhost:3000/clients/${id}`);
                 setClients(clients.filter(client => client.id !== id)); //mettre a jour apres avoir supprimer
            } catch(error){
                console.error('Erreur lors de la suppression du clients:', error);
            }
        }
    };

    // fonction pour modifier le client
    const handleEdit = (client: Client) => { navigate("/Ficheclients", { state: { client} });
    }

    return (
        <div>
            <section id='logo et tire' > {/* Conteneur pour le logo et le titre */}
                <img src={Ordilan} alt="Logo Ordilan" className="flex h-40 top-16 left-4 mb-4 mt-4" style={{ padding: "5px", margin: "10px" }} />
                <h1 className="absolute flex right-20 text-6xl top-16 text-black">Liste des Clients</h1>
            </section>

                <table className="table-auto w-full border-collapse border bg-blue-950 mt-8">
                    <thead>
                    <tr>
                        <th className="px-4 py-2 border border-gray-300 text-accent-50">Id</th>
                        <th className="px-4 py-2 border border-gray-300 text-accent-50">Nom</th>
                        <th className="px-4 py-2 border border-gray-300 text-accent-50">Prénom</th>
                        <th className="px-4 py-2 border border-gray-300 text-accent-50">Adresse</th>
                        <th className="px-4 py-2 border border-gray-300 text-accent-50">Téléphone</th>
                        <th className="px-4 py-2 border border-gray-300 text-accent-50">Matériels</th>
                        <th className="px-4 py-2 border border-gray-300 text-accent-50">État</th>
                        <th className="px-4 py-2 border border-gray-300 text-accent-50">Date</th>
                        <th className="px-4 py-2 border border-gray-300 text-accent-50">Email</th>
                        <th className="px-4 py-2 border border-gray-300 text-accent-50">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.length === 0 ? (
                        <tr>
                            <td colSpan={10} className="text-center py-4">Aucun client trouvé</td>
                        </tr>
                    ) : (
                        clients.map((client) => (
                            <tr key={client.id}>
                                <td className="border px-4 py-2 text-accent-50">{client.id}</td>
                                <td className="border px-4 py-2 text-accent-50">{client.nom}</td>
                                <td className="border px-4 py-2 text-accent-50">{client.prenom}</td>
                                <td className="border px-4 py-2 text-accent-50">{client.adresse}</td>
                                <td className="border px-4 py-2 text-accent-50">{client.telephone}</td>
                                <td className="border px-4 py-2 text-accent-50">{client.materiels}</td>
                                <td className="border px-4 py-2 text-accent-50">{client.etat}</td>
                                <td className="border px-4 py-2 text-accent-50">{client.date}</td>
                                <td className="border px-4 py-2 text-accent-50">{client.email}</td>
                                <td className="border px-4 py-2 text-accent-50">
                                    <button className="px-2 py-1 text-white bg-red-500 rounded"
                                    onClick={() => handleDelete( client.id)}>
                                        Supprimer
                                    </button>
                                    <button className="ml-2 px-2 py-1 text-white bg-blue-500 rounded"
                                    onClick={() => handleEdit( client)}>Modifier
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>

        </div>
    );
};

export default Listeclients;
