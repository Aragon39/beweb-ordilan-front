import React, { useState } from "react";

const Listeclients: React.FC = () => {
    // État initial avec un tableau de clients vide
    const [clients, setClients] = useState<{
        id: number;
        nom: string;
        prenom: string;
        adresse: string;
        telephone: string;
        materiels: string;
        etat: string;
        date: string;
        email: string;
    }[]>([]);

    // Fonction pour ajouter un client
    const creeClient = (client: {
        id: number;
        nom: string;
        prenom: string;
        adresse: string;
        telephone: string;
        materiels: string;
        etat: string;
        date: string;
        email: string;
    }) => {
        setClients((prevClients) => [...prevClients, client]);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Liste des Clients</h1>
            <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                <tr>
                    <th className="px-4 py-2 border border-gray-300">Id</th>
                    <th className="px-4 py-2 border border-gray-300">Nom</th>
                    <th className="px-4 py-2 border border-gray-300">Prénom</th>
                    <th className="px-4 py-2 border border-gray-300">Adresse</th>
                    <th className="px-4 py-2 border border-gray-300">Téléphone</th>
                    <th className="px-4 py-2 border border-gray-300">Matériels</th>
                    <th className="px-4 py-2 border border-gray-300">État</th>
                    <th className="px-4 py-2 border border-gray-300">Date</th>
                    <th className="px-4 py-2 border border-gray-300">Email</th>
                </tr>
                </thead>
                <tbody>
                {/* Boucle pour afficher chaque client */}
                {clients.length === 0 ? (
                    <tr>
                        <td colSpan={9} className="text-center py-4">Aucun client trouvé</td>
                    </tr>
                ) : (
                    clients.map((client) => (
                        <tr key={client.id}>
                            <td className="border px-4 py-2">{client.id}</td>
                            <td className="border px-4 py-2">{client.nom}</td>
                            <td className="border px-4 py-2">{client.prenom}</td>
                            <td className="border px-4 py-2">{client.adresse}</td>
                            <td className="border px-4 py-2">{client.telephone}</td>
                            <td className="border px-4 py-2">{client.materiels}</td>
                            <td className="border px-4 py-2">{client.etat}</td>
                            <td className="border px-4 py-2">{client.date}</td>
                            <td className="border px-4 py-2">{client.email}</td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Listeclients;
