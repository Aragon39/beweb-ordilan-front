import Ordilan from "../assets/image/Logo-ordilan-png-1024x295.png";
import { useState } from "react";

function Devis() {
    interface SignUpSate {
        dateDuDevis: string;
        dateDeValiditeDuDevis: string;
        dateDeDebutDeLaPrestation: string;
        nomDuDestinataire: string;
        adresse: string;
        emisPar: string;
    }

    interface LigneDevis {
        description: string;
        prixUnitaire: number;
        quantite: number;
    }

    const [formData, setFormData] = useState<SignUpSate>({
        dateDuDevis: "",
        dateDeValiditeDuDevis: "",
        dateDeDebutDeLaPrestation: "",
        nomDuDestinataire: "",
        adresse: "",
        emisPar: ""
    });

    const [lignesDevis, setLignesDevis] = useState<LigneDevis[]>([
        { description: '', prixUnitaire: 0, quantite: 0 }
    ]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleLigneChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newLignes = [...lignesDevis];
        newLignes[index] = { ...newLignes[index], [name]: value };
        setLignesDevis(newLignes);
    };

    const addLigne = () => {
        setLignesDevis([...lignesDevis, { description: '', prixUnitaire: 0, quantite: 0 }]);
    };

    const removeLigne = (index: number) => {
        const newLignes = lignesDevis.filter((_, i) => i !== index);
        setLignesDevis(newLignes);
    };

    const calculateTotals = () => {
        const totalHT = lignesDevis.reduce((sum, ligne) => sum + (ligne.prixUnitaire * ligne.quantite), 0);
        const tva = totalHT * 0.2; // Supposons que la TVA est de 20%
        const totalTTC = totalHT + tva;
        return { totalHT, tva, totalTTC };
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Données du formulaire:", formData);
        console.log("Lignes de devis:", lignesDevis);
    };

    const { totalHT, tva, totalTTC } = calculateTotals();

    return (
        <div className="container mx-auto p-4">
            <section className="flex flex-col md:flex-row items-center mb-8">
                <img src={Ordilan} alt="logo ordilan" className="h-40 mb-4 md:mb-0" />
                <h1 className="text-4xl md:text-6xl text-center md:text-left md:ml-52 w-full">
                    DEVIS N°
                </h1>
            </section>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <label className="block mb-2 font-bold">
                        Date du Devis
                        <input
                            type="datetime-local"
                            name="dateDuDevis"
                            onChange={handleChange}
                            value={formData.dateDuDevis}
                            className="border border-gray-950 rounded-3xl p-2 w-full"
                            required
                        />
                    </label>
                    <label className="block mb-2 font-bold">
                        Date de Validité Du Devis
                        <input
                            type="datetime-local"
                            name="dateDeValiditeDuDevis"
                            onChange={handleChange}
                            value={formData.dateDeValiditeDuDevis}
                            className="border border-gray-950 rounded-3xl p-2 w-full"
                            required
                        />
                    </label>
                    <label className="block mb-2 font-bold">
                        Date du Début de la Prestation
                        <input
                            type="datetime-local"
                            name="dateDeDebutDeLaPrestation"
                            onChange={handleChange}
                            value={formData.dateDeDebutDeLaPrestation}
                            className="border border-gray-950 rounded-3xl p-2 w-full"
                            required
                        />
                    </label>
                </div>

                <div className="flex flex-col font-bold">
                    <label className="block mb-2">
                        Nom du Destinataire
                        <input
                            type="text"
                            name="nomDuDestinataire"
                            onChange={handleChange}
                            value={formData.nomDuDestinataire}
                            className="border border-gray-950 rounded-3xl p-2 w-full"
                            required
                        />
                    </label>

                    <label className="block mb-2">
                        Adresse
                        <input
                            type="text"
                            name="adresse"
                            onChange={handleChange}
                            value={formData.adresse}
                            className="border border-gray-950 rounded-3xl p-2 w-full"
                            required
                        />
                    </label>

                    <label className="block mb-2">
                        Emis Par
                        <input
                            type="text"
                            name="emisPar"
                            onChange={handleChange}
                            value={formData.emisPar}
                            className="border border-gray-950 rounded-3xl p-2 w-full"
                            required
                        />
                    </label>
                </div>
            </form>

            <section className="mt-8">
                <h2 className="text-xl font-bold">Détails du Devis</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-2">Description</th>
                                <th className="border border-gray-300 p-2">Prix unitaire HT</th>
                                <th className="border border-gray-300 p-2">Quantité</th>
                                <th className="border border-gray-300 p-2">Total HT</th>
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lignesDevis.map((ligne, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 p-2">
                                        <input
                                            type="text"
                                            name="description"
                                            value={ligne.description}
                                            onChange={(e) => handleLigneChange(index, e)}
                                            className="border border-gray-950 rounded p-1 w-full"
                                            required
                                        />
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                        <input
                                            type="number"
                                            name="prixUnitaire"
                                            value={ligne.prixUnitaire}
                                            onChange={(e) => handleLigneChange(index, e)}
                                            className="border border-gray-950 rounded p-1 w-full"
                                            required
                                        />
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                        <input
                                            type="number"
                                            name="quantite"
                                            value={ligne.quantite}
                                            onChange={(e) => handleLigneChange(index, e)}
                                            className="border border-gray-950 rounded p-1 w-full"
                                            required
                                        />
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                        {(ligne.prixUnitaire * ligne.quantite).toFixed(2)} €
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                        <button
                                            onClick={() => removeLigne(index)}
                                            className="bg-red-500 text-white rounded px-2 py-1"
                                        >
                                            Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button
                    type="button"
                    onClick={addLigne}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Ajouter une ligne
                </button>
            </section>

            <div className="mt-4 flex justify-end">
                <div className="border-t border-gray-300 pt-4">
                    <div className="flex justify-between">
                        <span>Total HT:</span>
                        <span>{totalHT.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between">
                        <span>TVA (20%):</span>
                        <span>{tva.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between font-bold">
                        <span>Total TTC:</span>
                        <span>{totalTTC.toFixed(2)} €</span>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
                    Soumettre le Devis
                </button>
            </div>
        </div>
    );
}

export default Devis;